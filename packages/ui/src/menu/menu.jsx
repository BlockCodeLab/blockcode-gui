import classNames from 'classnames';
import { cloneElement } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { flatChildren, setHotkey, showHotkey, useLocale, useEditor } from '@blockcode/core';

import styles from './menu.module.css';

const defaultID = styles.menu.split('_')[0];

export function Menu({ id, className, children, name }) {
  return (
    <ul
      className={classNames(styles.menu, className)}
      id={`${id || defaultID}-menu-${name}`}
    >
      {children}
    </ul>
  );
}

const notMobile = /Win|Mac|Linux/i.test(navigator.platform || navigator.userAgent);

export function MenuItem({ children, className, disabled: isDisabled, href, hotkey, onLabel, onDisable, onClick }) {
  const [disabled, setDisable] = useState();
  const [label, setLabel] = useState();
  const locale = useLocale();
  const context = useEditor();

  const navigateToHref = () => href && window.open(href, '_blank');
  const handleClick = (e = {}) => {
    if (disabled) return;
    if (onClick) {
      e.locale = locale;
      e.context = context;
      onClick(e);
      return;
    }
    navigateToHref();
  };
  if (notMobile && hotkey) setHotkey(hotkey, handleClick);

  if (onDisable) {
    const result = onDisable({ locale, context, setDisable });
    if (typeof result !== 'undefined' && result !== disabled) {
      setDisable(result);
    }
  }
  if (onLabel) {
    const result = onLabel({ locale, context, setLabel });
    if (typeof result !== 'undefined' && result !== label) {
      setLabel(result);
    }
  }

  useEffect(() => {
    setDisable(isDisabled);
    return () => {};
  }, [isDisabled]);

  return (
    <li
      className={classNames(
        styles.menuItem,
        {
          [styles.hoverable]: !disabled,
          [styles.disabled]: disabled,
        },
        className,
      )}
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className={styles.content}>{label || children}</div>
      {notMobile && hotkey && <div className={styles.hotkey}>{showHotkey(hotkey)}</div>}
    </li>
  );
}

export function MenuSection({ children }) {
  return (
    <>
      {flatChildren(children).map(
        (child, index) =>
          child &&
          cloneElement(child, {
            className: classNames(child.props.className, { [styles.menuSection]: index === 0 }),
            key: index,
          }),
      )}
    </>
  );
}
