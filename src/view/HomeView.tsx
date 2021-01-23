import {Greeting} from "../components/greeting/Greeting"

export const HomeView = () => {
  return (
    <>
      <h1>Home view</h1>
      <Greeting fname="John" />
      <Greeting fname={"John"} lname={"Doe"} />
    </>
  );
};
