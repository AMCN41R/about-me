import * as React from 'react';
import styled from 'styled-components';

const Fader = styled.div<{ hide: boolean }>`
  transition: opacity 1.5s;
  opacity: ${p => p.hide ? 0 : 1};
  pointer-events: ${p => p.hide ? 'none' : 'initial'};
`;

interface IProps {
  ms: number;
}

const FadeIn: React.FC<IProps> = (props): JSX.Element => {
  const [hidden, setHidden] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, props.ms);
  }, [props.ms]);

  return (
    <Fader hide={hidden}>
      {props.children}
    </Fader>
  );
};

export default FadeIn;
