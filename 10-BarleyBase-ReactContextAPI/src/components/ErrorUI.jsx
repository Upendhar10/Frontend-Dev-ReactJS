import { useRouteError } from "react-router-dom";

const ErrorUI = () => {
  const err = useRouteError();
  // console.log(err);

  return (
    <div>
      <h1> OOPs!</h1>
      <p>{err.status}</p>
      <p>{err.statusText}</p>
    </div>
  );
};

export default ErrorUI;
