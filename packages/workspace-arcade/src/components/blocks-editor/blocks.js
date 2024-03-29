import { ScratchBlocks } from '@blockcode/blocks-editor';

import '../../blocks/events';
import '../../blocks/sensing';
import '../../blocks/sound';

export default function (assetList, fileList, selectedIndex, workspace) {
  const stage = fileList[0];
  const sprite = fileList[selectedIndex];
  const otherSprites = fileList.filter((_, i) => i > 0 && i !== selectedIndex);
  const isStage = selectedIndex === 0;

  const otherSpritesMenu = otherSprites.map((spr) => [spr.name, spr.id]);

  ScratchBlocks.Blocks['motion_pointtowards_menu'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'TOWARDS',
            options: [[ScratchBlocks.Msg.MOTION_POINTTOWARDS_RANDOM, '_random_'], ...otherSpritesMenu],
          },
        ],
        colour: ScratchBlocks.Colours.motion.secondary,
        colourSecondary: ScratchBlocks.Colours.motion.secondary,
        colourTertiary: ScratchBlocks.Colours.motion.tertiary,
        colourQuaternary: ScratchBlocks.Colours.motion.quaternary,
        extensions: ['output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['motion_goto_menu'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'TO',
            options: [[ScratchBlocks.Msg.MOTION_GOTO_RANDOM, '_random_'], ...otherSpritesMenu],
          },
        ],
        colour: ScratchBlocks.Colours.motion.secondary,
        colourSecondary: ScratchBlocks.Colours.motion.secondary,
        colourTertiary: ScratchBlocks.Colours.motion.tertiary,
        colourQuaternary: ScratchBlocks.Colours.motion.quaternary,
        extensions: ['output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['motion_glideto_menu'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'TO',
            options: [[ScratchBlocks.Msg.MOTION_GLIDETO_RANDOM, '_random_'], ...otherSpritesMenu],
          },
        ],
        colour: ScratchBlocks.Colours.motion.secondary,
        colourSecondary: ScratchBlocks.Colours.motion.secondary,
        colourTertiary: ScratchBlocks.Colours.motion.tertiary,
        colourQuaternary: ScratchBlocks.Colours.motion.quaternary,
        extensions: ['output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['looks_costume'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'COSTUME',
            options: sprite.assets.map((assetId) => {
              const asset = assetList.find(({ id }) => assetId === id);
              return [asset.name, assetId];
            }),
          },
        ],
        colour: ScratchBlocks.Colours.looks.secondary,
        colourSecondary: ScratchBlocks.Colours.looks.secondary,
        colourTertiary: ScratchBlocks.Colours.looks.tertiary,
        colourQuaternary: ScratchBlocks.Colours.looks.quaternary,
        extensions: ['output_string'],
      });
    },
  };

  const stageMenu = stage.assets.map((assetId) => {
    const asset = assetList.find(({ id }) => assetId === id);
    return [asset.name, assetId];
  });

  ScratchBlocks.Blocks['looks_backdrops'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'BACKDROP',
            options: stageMenu,
          },
        ],
        colour: ScratchBlocks.Colours.looks.secondary,
        colourSecondary: ScratchBlocks.Colours.looks.secondary,
        colourTertiary: ScratchBlocks.Colours.looks.tertiary,
        colourQuaternary: ScratchBlocks.Colours.looks.quaternary,
        extensions: ['output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['event_whenbackdropswitchesto'] = {
    init() {
      this.jsonInit({
        message0: ScratchBlocks.Msg.EVENT_WHENBACKDROPSWITCHESTO,
        args0: [
          {
            type: 'field_dropdown',
            name: 'BACKDROP',
            options: stageMenu,
          },
        ],
        category: ScratchBlocks.Categories.event,
        extensions: ['colours_event', 'shape_hat'],
      });
    },
  };

  ScratchBlocks.Blocks['control_create_clone_of_menu'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'CLONE_OPTION',
            options: isStage
              ? [...otherSpritesMenu]
              : [[ScratchBlocks.Msg.CONTROL_CREATECLONEOF_MYSELF, '_myself_'], ...otherSpritesMenu],
          },
        ],
        extensions: ['colours_control', 'output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['sensing_touchingobjectmenu'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'TOUCHINGOBJECTMENU',
            options: [[ScratchBlocks.Msg.SENSING_TOUCHINGOBJECT_EDGE, '_edge_'], ...otherSpritesMenu],
          },
        ],
        extensions: ['colours_sensing', 'output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['sensing_distancetomenu'] = {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'DISTANCETOMENU',
            options: [[ScratchBlocks.Msg.SENSING_OF_DISTANCETO_CENTER, '_center_'], ...otherSpritesMenu],
          },
        ],
        extensions: ['colours_sensing', 'output_string'],
      });
    },
  };

  ScratchBlocks.Blocks['sensing_of_object_menu'] = {
    init() {
      const menu = [...otherSpritesMenu];
      if (!isStage) {
        menu.unshift([ScratchBlocks.Msg.SENSING_OF_STAGE, '_stage_']);
      }
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'OBJECT',
            options: menu,
          },
        ],
        category: ScratchBlocks.Categories.sensing,
        extensions: ['colours_sensing', 'output_string'],
      });
    },
  };

  const stagePropertyMenu = [
    [ScratchBlocks.Msg.SENSING_OF_BACKDROPNUMBER, 'backdrop #'],
    [ScratchBlocks.Msg.SENSING_OF_BACKDROPNAME, 'backdrop name'],
    // [ScratchBlocks.Msg.SENSING_OF_VOLUME, 'volume']
  ];

  const spritePropertyMenu = [
    [ScratchBlocks.Msg.SENSING_OF_XPOSITION, 'x position'],
    [ScratchBlocks.Msg.SENSING_OF_YPOSITION, 'y position'],
    [ScratchBlocks.Msg.SENSING_OF_DIRECTION, 'direction'],
    [ScratchBlocks.Msg.SENSING_OF_COSTUMENUMBER, 'costume #'],
    [ScratchBlocks.Msg.SENSING_OF_COSTUMENAME, 'costume name'],
    [ScratchBlocks.Msg.SENSING_OF_SIZE, 'size'],
    // [ScratchBlocks.Msg.SENSING_OF_VOLUME, 'volume']
  ];

  ScratchBlocks.Blocks['sensing_of'] = {
    init() {
      this.jsonInit({
        message0: ScratchBlocks.Msg.SENSING_OF,
        args0: [
          {
            type: 'field_dropdown',
            name: 'PROPERTY',
            options: isStage ? spritePropertyMenu : stagePropertyMenu,
          },
          {
            type: 'input_value',
            name: 'OBJECT',
          },
        ],
        output: true,
        category: ScratchBlocks.Categories.sensing,
        outputShape: ScratchBlocks.OUTPUT_SHAPE_ROUND,
        extensions: ['colours_sensing'],
      });
    },
    onchange(e) {
      if (e.blockId !== 'sensing_of_object_menu') return;
      if (e.name === 'OBJECT') {
        const property = this.getField('PROPERTY');
        property.menuGenerator_ = e.newValue === '_stage_' ? stagePropertyMenu : spritePropertyMenu;
        property.setText(property.menuGenerator_[0][0]);
        property.setValue(property.menuGenerator_[0][1]);
      }
    },
  };
}
