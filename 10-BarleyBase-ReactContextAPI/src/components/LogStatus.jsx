import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const LogStatus = ({ logStatus, SetlogStatus }) => {
  const { setUser } = useContext(AuthContext);
  function handleLogStatus() {
    if (!logStatus) {
      setUser("Upendhar");
      SetlogStatus(true);
    } else {
      setUser(null);
      SetlogStatus(false);
    }
  }
  return (
    <div onClick={handleLogStatus} className="logStatus">
      {logStatus === true ? <button>LogOut</button> : <button>LogIn</button>}
    </div>
  );
};

export default LogStatus;
