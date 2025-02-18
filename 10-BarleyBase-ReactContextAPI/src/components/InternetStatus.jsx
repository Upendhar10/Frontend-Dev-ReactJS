import useInternetStatus from "../hooks/useInternetStatus";
const InternetStatus = () => {
  const InternetStatus = useInternetStatus();

  return InternetStatus ? "🟢" : "🔴";
};

export default InternetStatus;
