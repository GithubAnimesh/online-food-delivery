import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to{" "}
          <span className="font-semibold text-gray-900">Foodie Express</span> —
          your one-stop destination for delightful meals delivered to your
          doorstep! We aim to bridge the gap between your cravings and
          top-quality restaurants by offering a seamless food delivery
          experience. Whether you're in the mood for comforting classics or
          exotic cuisines, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-around items-center">
          <div className="text-center sm:w-1/2 mb-6 sm:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At Foodie Express, we strive to make every meal special. Our
              mission is to connect people with their favorite food while
              ensuring timely delivery, affordability, and quality in every
              bite.
            </p>
          </div>
          <div className="text-center sm:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc text-left text-gray-600 mx-auto max-w-sm">
              <li>Wide range of restaurant partners</li>
              <li>Live order tracking</li>
              <li>Exclusive deals and discounts</li>
              <li>Fast and reliable delivery</li>
              <li>Customer-first approach</li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-10">
          <User name={"Animesh Singh"} />
          <UserClass name={"Animesh Class"} />
        </div> */}
      </div>
    </div>
  );
};

export default About;
