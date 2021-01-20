import "./Greeting.css";

export const Greeting = (props: { fname: string, lname: string }) => {
  return (
    <strong className="greeting-heading">
      Greetings {props.fname} {props.lname}!
    </strong>
  );
};