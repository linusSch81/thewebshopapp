import "./Greeting.css";

// When using Greeting props @fname must be specified but @lname is not mandatory ('optional chaining' with '?' in typescript. Is a null and undefiend point checker)
export const Greeting = (props: { fname: string; lname?: string }) => {
  return (
    <>
      <div>
      Greetings <strong className="greeting-heading">
          {props.fname} {props.lname}
        </strong>
      </div>
    </>
  );
};
