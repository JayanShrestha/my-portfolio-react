import { useState } from "react";

const useContent = () => {
  const [content, setContent] = useState([
    { id: 0, Active: false },
    { id: 1, Active: false },
    { id: 2, Active: false },
  ]);
  return { content, setContent };
};

export default useContent;
