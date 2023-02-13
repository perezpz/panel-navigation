import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import { openMenuTimeline, closeMenuTimeline } from './timelines';
import { isServerSide, noop } from './utils';

export type PopperProps = NavigationProps & {
  open: boolean;
  timer: React.RefObject<number>;
  onMouseLeave: () => void;
  visible?: boolean;
};

const Popper = (props: PopperProps) => {
  const { children, open, timer, visible, duration, onEntered, onExited, onMouseLeave } = props;

  const backgroundRef = React.useRef<HTMLDivElement>();
  const listRef = React.useRef<HTMLDivElement>();

  const didEnter = () => {
    onEntered();
    document.querySelector('html').classList.add(props.htmlClassName);
  };
  const didLeave = () => {
    onExited();
    document.querySelector('html').classList.remove(props.htmlClassName);
  };

  if (!visible) {
    didLeave();
    return null;
  }

  return (
    <Transition
      timeout={{ exit: duration - 100, enter: duration }}
      mountOnEnter
      unmountOnExit
      in={open}
      onEnter={() => openMenuTimeline({ listRef, backgroundRef, duration, ease: props.ease })}
      onExit={() => closeMenuTimeline({ listRef, backgroundRef, duration, ease: props.ease })}
      onEntered={didEnter}
      onExited={didLeave}
    >
      <React.Fragment>
        {createPortal(
          <div className="navigation">
            <div ref={backgroundRef} className="mask"></div>
            <div
              ref={listRef}
              className="dropdownList"
              onMouseEnter={() => clearTimeout(timer.current)}
              onMouseLeave={onMouseLeave}
            >
              {children}
            </div>
          </div>,
          document.querySelector('body'),
        )}
      </React.Fragment>
    </Transition>
  );
};

type NavigationProps = {
  visible?: boolean;
  duration?: number;
  ease?: string;
  children: React.ReactNode;
  onEntered?: () => void;
  onExited?: () => void;
  htmlClassName?: string;
};

function Navigation(props: NavigationProps) {
  const { visible, children } = props;
  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const timer = useRef<number>(null);
  const [showPopper, setShowPopper] = useState(false);

  const updateCurrent = (key: string) => {
    setCurrent(key);
  };

  const updateOpenState = (state: boolean) => {
    setOpen(state);
  };

  const onMouseLeave = () => {
    timer.current = window.setTimeout(() => {
      updateOpenState(false);
    }, 150);
  };

  const mapContents = useMemo(() => {
    const result = React.Children.toArray(props.children);
    const map = result.reduce((acc, child) => {
      if (React.isValidElement(child)) {
        const { itemKey, content } = child.props;
        if (content) {
          acc[itemKey] = content;
        }
      }
      return acc;
    }, {});
    return map;
  }, []);

  const currentContent = mapContents[current] || null;

  useEffect(() => {
    if (!visible && open) {
      updateOpenState(false);
    }
  }, [visible, open]);

  useEffect(() => {
    if (!isServerSide) {
      setShowPopper(true);
    }
  }, []);

  const itemProps = {
    updateCurrent,
    updateOpenState,
    current,
    open,
    onMouseLeave,
    timer,
    visible,
  };

  const popperProps = {
    open,
    timer,
    duration: props.duration,
    ease: props.ease,
    visible,
    onMouseLeave,
    onEntered: props.onEntered,
    onExited: props.onExited,
    htmlClassName: props.htmlClassName,
  };

  return (
    <>
      <div className="dropdownWrap">
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, {
            ...itemProps,
          });
        })}
      </div>
      {showPopper && <Popper {...popperProps}>{currentContent}</Popper>}
    </>
  );
}

Navigation.defaultProps = {
  visible: true,
  onEntered: noop,
  onExited: noop,
  htmlClassName: 'scrollDisabled',
  ease: 'expo.out',
  duration: 600,
};

export default Navigation;
