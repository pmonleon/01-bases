import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { type } from "os";

type Props = {
  initialValue: number;
  maxValue: number;
};

const useCounter = ({ initialValue, maxValue }: Props) => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const [count, setcount] = useState(initialValue);

  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!counterRef.current) return;

    timeline.current
      .to(counterRef.current, { y: -10, duration: 1, ease: "ease.out" })
      .to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    // if (count < 10) return;
    // console.log(
    //   "%cSe llego al valor requerido",
    //   "color:red;, background-color:blue;"
    // );

    timeline.current.play(0);
  }, [count]);

  const handleCounter = (value: number) => {
    // if (MAX_VALUE === count && value === +1) return
    setcount((prev) => Math.min(prev + value, maxValue));
  };
  return {
    count,
    handleCounter,
    counterRef,
  };
};

export default useCounter;
