import React, { useEffect, useState } from 'react';
import cls from 'classnames';
import { PopperProps } from './nav';

import Caret from './icons/caret';

type PanelProps = PopperProps & {
  itemKey: string;
  updateCurrent: (val: string) => void;
  current: string;
  updateOpenState: (val: boolean) => void;
  isSubPage?: boolean;
  content: React.ReactNode;
};

const Panel = (props: Partial<PanelProps>) => {
  const { children, itemKey, updateCurrent, current, open, updateOpenState, onMouseLeave, timer, isSubPage } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    if (!open) {
      updateOpenState(true);
    }
    updateCurrent(itemKey);
  };

  useEffect(() => {
    setIsOpen(open && current === itemKey);
  }, [open, current, itemKey]);

  return (
    <div
      className={cls('dropdown', { ['open']: isOpen, ['active']: isSubPage })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdownToggle">
        <div className="text">{children}</div>
        <Caret className="icon" />
      </div>
    </div>
  );
};

Panel.defaultProps = {
  isSubPage: false,
};

export default Panel;
