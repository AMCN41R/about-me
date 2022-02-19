import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IProps {
  href: string;
  text: string;
  icon: IconProp
}

const LinkStyled = styled.a`
  margin-top: 6px;
  padding: 6px 12px;
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: 6px;
  margin: 12px 0;
  text-decoration: none;
  color: inherit;

  .link-button-wrap {
    display: flex;
    align-items: center;
    padding: 3px;
  }

  .link-button-icon {
    margin-right: 3px;
    font-size: 18px;
  }

  &:hover {
    background-color: ${p => p.theme.colors.lightHover};
    cursor: pointer;
  }
`;

const LinkButton: React.FC<IProps> = (props): JSX.Element => (
  <LinkStyled href={props.href} target="_blank" rel="noreferrer">
    <div className="link-button-wrap">
      <FontAwesomeIcon className="link-button-icon" icon={props.icon} fixedWidth={true} />
      <span className="italic">{props.text}</span>
    </div>
  </LinkStyled>
);

export default LinkButton;