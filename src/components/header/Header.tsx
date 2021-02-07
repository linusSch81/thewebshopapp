import "./Header.scss"
export const Header = (props: { children: React.ReactChild }) => {
  return <header className="header">{props.children}</header>;
};
