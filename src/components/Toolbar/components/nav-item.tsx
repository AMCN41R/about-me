import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IProps {
  href: string;
  icon: IconProp;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Link = styled.a`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  padding: 2px;
  margin: 12px;
  text-decoration: none;
  transition: 0.1s;

  &:hover {
    color: ${p => p.theme.colors.dark};
  }
`;

const Item = styled.li`
  font-size: 24px;
`;

const NavItem: React.FC<IProps> = (props): JSX.Element => (
  <Item>
    <Link
      href={props.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <FontAwesomeIcon icon={props.icon} />
    </Link>
  </Item>
);

export default NavItem