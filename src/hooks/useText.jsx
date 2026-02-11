import { useEffect, useState } from "react";
export default function useText() {
  const [animateOnLoad, setAnimateOnLoad] = useState(false);
  useEffect(() => {
    queueMicrotask(() => setAnimateOnLoad(true));
  }, []);
  return { animateOnLoad, setAnimateOnLoad };
}
