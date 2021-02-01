import "./HamburgerButton.css";

export const HamburgerButton = (props: {
  drawerHandler: (handler: boolean) => void;
}) => {
  return (
    <button
      className="hamburger-button"
      onClick={() => props.drawerHandler(true)}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
