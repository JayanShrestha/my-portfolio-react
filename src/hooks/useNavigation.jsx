import { useState } from "react";

const useNavigation = () => {
  const [openNavigation, setNavigation] = useState(false);
  return { openNavigation, setNavigation };
};

export default useNavigation;
