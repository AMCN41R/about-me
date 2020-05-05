import * as React from 'react';
import clsx from 'clsx';

interface IProps {
  ms: number;
}

const fadeIn: React.SFC<IProps> = (props): JSX.Element => {
  const [delay, setDelay] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, props.ms);
  }, []);

  const cls = clsx('fader', !delay && 'hide');

  return (
    <div className={cls}>
      {props.children}
    </div>
  );
};

export default fadeIn;
