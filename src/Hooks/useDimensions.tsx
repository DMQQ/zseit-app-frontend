import { useEffect, useState } from "react";

export default function useDimensions() {
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  function onResize() {
    setWidth(document.documentElement.clientWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}
