import { useEffect, useState } from "react";

const useVisible = () => {
  const [state, setState] = useState("visible");

  const visibilityHandler = () => {
    setState(document.visibilityState);
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", visibilityHandler);

    return () =>
      document.removeEventListener("visibilitychange", visibilityHandler);
  }, []);
  return state;
};

export default useVisible;
