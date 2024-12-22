import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="aboutUs-container">
      <h1>AboutUs</h1>
      <User name={"Animesh Singh"} />
      <UserClass name={"Animesh Class"} />
    </div>
  );
};
export default About;
