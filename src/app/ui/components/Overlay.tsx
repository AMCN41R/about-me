import * as React from 'react';
import clsx from 'clsx';

interface IProps {
  opacity?: string;
  className?: string;
}

const overlay: React.SFC<IProps> = (props): JSX.Element => {
  const style: React.CSSProperties = {};

  if (props.opacity) {
    style.opacity = props.opacity
  }

  const cls = clsx('overlay', props.className);

  return (
    <div className={cls} style={style}>
      {props.children}
    </div>
  );
};

export default overlay;
