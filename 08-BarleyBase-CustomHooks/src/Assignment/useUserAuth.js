import { useState } from "react";

const useUserAuth = () => {
  const [authStatus, SetauthStatus] = useState(false);

  !authStatus ? SetauthStatus(true) : SetauthStatus(false);

  return authStatus;
};

export default useUserAuth;
