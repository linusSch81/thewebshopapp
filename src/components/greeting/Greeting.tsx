import "./Greeting.css";

/** When using Greeting props @fname must be specified but @lname is not mandatory ('optional chaining' with '?' in typescript. Is a null and undefiend point checker) */
export const Greeting = (props: { fname: string; lname?: string }) => {

  const { fname } = props;
  
  return (
    <>
      <div>
        Greetings{" "}
        <strong className="greeting-heading">
          {/* {props.fname}  */}
          {fname} 
          {props.lname}
        </strong>
      </div>
    </>
  );
};
