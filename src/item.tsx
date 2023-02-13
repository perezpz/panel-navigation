import React from 'react';
import cls from 'classnames';

type ItemProps = {
  children: React.ReactNode;
  isSubPage?: boolean;
};

const Item = (props: ItemProps) => {
  const { children, isSubPage } = props;

  return <div className={cls('dropdown', 'link', { ['active']: isSubPage })}>{children}</div>;
};

Item.defaultProps = {
  isSubPage: false,
};

export default Item;
