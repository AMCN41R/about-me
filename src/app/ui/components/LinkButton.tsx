import * as React from 'react';
import clsx from 'clsx';

interface IProps {
  href: string;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const linkButton: React.SFC<IProps> = (props): JSX.Element => {
  const cls = clsx('link-button', props.className);
  const clsIcon = clsx('link-button-icon', props.iconClassName);

  return (
    <a href={props.href} target="_blank" className={cls}>
      <div className="link-button-wrap">
        {
          props.iconClassName &&
          <i className={clsIcon} />
        }
        <span className={props.textClassName}>{props.text}</span>
      </div>
    </a>
  );
};

export default linkButton;
