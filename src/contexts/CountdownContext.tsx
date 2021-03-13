import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountdown: () => void;
  resetCountdown: () => void;
  time: number;
  percentToClose: number;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

  const { startNewChallenge } = useContext(ChallengesContext);
  const challengeTime = 2 * 60
  const [time, setTime] = useState(2*60)
  const [isActive, setIsActive] =  useState(false); 
  const [hasFinished, setHasFinished] = useState(false);
  const [percentToClose, setPercentToClose] = useState(0)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true)
    setTime(challengeTime)
    setPercentToClose(100 - (time / challengeTime) * 100)
  }

  function resetCountdown() {
    setIsActive(false);
    setPercentToClose(0)
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setTime(challengeTime)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time-1)
        setPercentToClose(100 - (time / challengeTime) * 100)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value = {{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
      time,
      percentToClose
    }}>
      {children}
    </CountdownContext.Provider>
  )
}