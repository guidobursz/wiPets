import { useEffect, useState } from "react";

const useCountDown = (cdValue) => {
  //States
  const [countDown, setCountDown] = useState(cdValue || 10);
  const [countDownStatus, setCountDownStatus] = useState("working");
  //
  useEffect(() => {
    //make -1 until countdown its 0.
    if (countDown >= 1) {
      //Create interval:
      let interval = setInterval(() => {
        //countDown value less 1;
        setCountDown(countDown - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else if (countDown === 0) {
      setCountDownStatus("done");
    }
  }, [countDown]);

  //Return states
  return { countDown, countDownStatus };
};

export default useCountDown;
