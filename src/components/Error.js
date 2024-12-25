import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="Error-Container">
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!</h2>
      {err.status === "undefined" ? (
        <h2>
          {err.status} {err.statusText}
        </h2>
      ) : (
        <h2>
          We are utilizing live data from Swiggy for educational purposes. If
          the cards are not visible, it indicates that changes have occurred in
          the data fetch process.
        </h2>
      )}
    </div>
  );
};
export default Error;
