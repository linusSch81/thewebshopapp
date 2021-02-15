import "./BackDrop.scss";
export const BackDrop = (props: { openHandler: Function }) => {
  return (
    <div
      onClick={() => props.openHandler(false)}
      className="backdrop clickable"
    ></div>
  );
};
