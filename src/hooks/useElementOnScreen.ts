import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (id: string | undefined) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  //Callback function to update state, if the display view it's on the element
  //would be true, if not, false.
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  
  const animation = isVisible ? "fadeIn" : ''

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0};
    const observer = new IntersectionObserver(callbackFunction, options);
    console.log(containerRef.current);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [containerRef]);

  return { animation, containerRef };
};
