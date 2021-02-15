import "./HamburgerButton.scss";

export const HamburgerButton = (props: {
  openHandler: (handler: boolean) => void;
}) => {
  return (
    <button
      className="hamburger-button"
      onClick={() => props.openHandler(true)}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
