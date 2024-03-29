import { Keys } from '@blockcode/core';
import { Text, Spinner } from '@blockcode/ui';
import { ScratchBlocks } from '@blockcode/blocks-editor';
import { connectDevice, disconnectDevice, downloadDevice } from '@blockcode/device-pyboard';
import defaultFilters from './filters.yaml';

import fileIcon from './menu-icons/icon-file.svg';
import editIcon from './menu-icons/icon-edit.svg';
import deviceIcon from './menu-icons/icon-device.svg';

const isMac = /Mac/i.test(navigator.platform || navigator.userAgent);

export default function ({
  newProject,
  openStoreLibrary,
  setPrompt,
  setAlert,
  removeAlert,
  extendsMenu,
  deviceFilters,
  onDownload = (...args) => [].concat(...args),
} = {}) {
  let setDisableUndo = () => {};
  let setDisableRedo = () => {};

  let workspace;
  const checkWorkspace = () => {
    workspace = ScratchBlocks.getMainWorkspace();
    if (workspace) {
      workspace.addChangeListener(() => {
        setDisableUndo(workspace.undoStack_.length === 0);
        setDisableRedo(workspace.redoStack_.length === 0);
      });
      setDisableUndo(workspace.undoStack_.length === 0);
      setDisableRedo(workspace.redoStack_.length === 0);
      return;
    }
    setTimeout(checkWorkspace);
  };
  checkWorkspace();

  const downloadAlert = (progress) => {
    if (!downloadAlert.id) {
      downloadAlert.id = `download.${Date.now()}`;
    }
    if (progress < 100) {
      if (setAlert) {
        setAlert({
          id: downloadAlert.id,
          icon: <Spinner level="success" />,
          message: (
            <Text
              id="blocks.alert.downloading"
              defaultMessage="Downloading...{progress}%"
              progress={progress}
            />
          ),
        });
      }
    } else {
      if (removeAlert) {
        removeAlert(downloadAlert.id);
      }
      delete downloadAlert.id;
    }
  };

  const fileMenu = {
    label: (
      <>
        <img src={fileIcon} />
        <Text
          id="blocks.menu.file"
          defaultMessage="File"
        />
      </>
    ),
    menuItems: [
      [
        {
          label: (
            <Text
              id="blocks.menu.file.newProject"
              defaultMessage="New"
            />
          ),
          hotkey: [isMac ? Keys.COMMAND : Keys.CONTROL, Keys.N],
          onClick({ context }) {
            if (context.modified) {
              setPrompt({
                title: (
                  <Text
                    id="gui.projects.notSaved"
                    defaultMessage="Not saved"
                  />
                ),
                label: (
                  <Text
                    id="gui.projects.replaceProject"
                    defaultMessage="Replace contents of the current project?"
                  />
                ),
                onSubmit: newProject,
              });
            } else {
              newProject();
            }
          },
        },
      ],
      [
        {
          label: (
            <Text
              id="blocks.menu.file.openProject"
              defaultMessage="Open"
            />
          ),
          hotkey: [isMac ? Keys.COMMAND : Keys.CONTROL, Keys.O],
          onClick() {
            openStoreLibrary();
          },
        },
        {
          label: (
            <Text
              id="blocks.menu.file.saveProject"
              defaultMessage="Save"
            />
          ),
          hotkey: [isMac ? Keys.COMMAND : Keys.CONTROL, Keys.S],
          onClick({ context }) {
            context.saveNow();
            if (downloadAlert.id) return;
            if (context.device && context.editor.autoDownload) {
              downloadDevice(context.device, [].concat(context.fileList, context.assetList), downloadAlert);
            }
          },
        },
      ],
      [
        {
          label: (
            <Text
              id="blocks.menu.file.uploadProject"
              defaultMessage="Load from your computer"
            />
          ),
          disabled: true,
          async onClick() {
            console.log('upload');
          },
        },
        {
          label: (
            <Text
              id="blocks.menu.file.downloadProject"
              defaultMessage="save to your computer"
            />
          ),
          disabled: true,
          async onClick() {
            console.log('download');
          },
        },
      ],
    ],
  };

  const editMenu = {
    label: (
      <>
        <img src={editIcon} />
        <Text
          id="blocks.menu.edit"
          defaultMessage="Edit"
        />
      </>
    ),
    menuItems: [
      [
        {
          label: (
            <Text
              id="blocks.menu.edit.undo"
              defaultMessage="Undo"
            />
          ),
          hotkey: [isMac ? Keys.COMMAND : Keys.CONTROL, Keys.Z],
          onDisable({ setDisable }) {
            setDisableUndo = setDisable;
            if (workspace) {
              setDisableUndo(workspace.undoStack_.length === 0);
            }
          },
          async onClick(e) {
            if (e instanceof MouseEvent && workspace) {
              workspace.undo(false);
            }
          },
        },
        {
          label: (
            <Text
              id="blocks.menu.edit.redo"
              defaultMessage="Redo"
            />
          ),
          hotkey: isMac ? [Keys.SHIFT, Keys.COMMAND, Keys.Z] : [Keys.CONTROL, Keys.Y],
          onDisable({ setDisable }) {
            setDisableRedo = setDisable;
            if (workspace) {
              setDisableRedo(workspace.redoStack_.length === 0);
            }
          },
          async onClick(e) {
            if (e instanceof MouseEvent && workspace) {
              workspace.undo(true);
            }
          },
        },
      ],
    ],
  };

  const deviceMenu = {
    label: (
      <>
        <img src={deviceIcon} />
        <Text
          id="blocks.menu.device"
          defaultMessage="Device"
        />
      </>
    ),
    menuItems: [
      [
        {
          label: (
            <Text
              id="blocks.menu.device.connect"
              defaultMessage="Connect your device"
            />
          ),
          onLabel({ locale, context }) {
            if (context.device) {
              return locale.getText('blocks.menu.device.disconnect', 'Disconnect this device');
            }
            return locale.getText('blocks.menu.device.connect', 'Connect your device');
          },
          onClick({ context }) {
            if (context.device) {
              disconnectDevice(context.device, context.connectDevice);
            } else {
              connectDevice(deviceFilters || defaultFilters, context.connectDevice);
            }
          },
        },
        {
          label: (
            <Text
              id="blocks.menu.device.download"
              defaultMessage="Download program"
            />
          ),
          async onClick({ context }) {
            if (downloadAlert.id) return;
            let { device } = context;
            if (!device) {
              device = await connectDevice(deviceFilters, context.connectDevice);
            }
            const files = onDownload(context.fileList, context.assetList);
            downloadDevice(device, files, downloadAlert);
          },
        },
      ],
      [
        {
          label: (
            <Text
              id="blocks.menu.device.turnOnAutoDownload"
              defaultMessage="Turn on auto download"
            />
          ),
          onLabel({ locale, context }) {
            if (context.editor.autoDownload) {
              return locale.getText('blocks.menu.device.turnOffAutoDownload', 'Turn off auto download');
            }
            return locale.getText('blocks.menu.device.turnOnAutoDownload', 'Turn on auto download');
          },
          onDisable({ context, setDisable }) {
            if (!context.device && context.editor.autoDownload) {
              context.setEditor({
                autoDownload: false,
              });
            }
            setDisable(!context.device);
          },
          async onClick({ context }) {
            context.setEditor({
              autoDownload: !context.editor.autoDownload,
            });
          },
        },
      ],
    ],
  };

  extendsMenu = extendsMenu || [];
  const concatMenus = (menu, id) => {
    const index = extendsMenu.findIndex((menuInfo) => menuInfo.id === id);
    if (index >= 0) {
      const [menuInfo] = extendsMenu.splice(index, 1);
      if (menuInfo.hidden) return [];
      if (menuInfo.label) {
        menu.label = menuInfo.label;
      }
      menu.menuItems = [].concat(menu.menuItems, menuInfo.menuItems);
    }
    return menu;
  };

  return [].concat(
    concatMenus(fileMenu, 'file'),
    concatMenus(editMenu, 'edit'),
    concatMenus(deviceMenu, 'device'),
    extendsMenu,
  );
}
