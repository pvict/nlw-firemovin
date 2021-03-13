import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

import { RiPlayFill, RiCloseFill } from "react-icons/ri";

export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown,
    percentToClose
  } = useContext(CountdownContext)

  //timer consts
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  //progressbar width
  let progressBarWidth = percentToClose/100;

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
        disabled 
        className={styles.countdownButton}
      >
        Ciclo encerrado <img src="icons/check.svg" style= {{'width':'1.2rem', 'margin': '0 0 0 1rem'}} />
      </button>
      ) : (
        <>
          { isActive ? (
            <div className={styles.buttonContainer}>
              <button 
              type="button" 
              className={styles.countdownButtonActive}
              onClick={resetCountdown}
              >
                Abandonar ciclo <RiCloseFill className={styles.actionIcon}/>
              </button>
              <div className={styles.progressBar}>
                <div className={styles.currentProgress} style={{transform: `ScaleX(${progressBarWidth})`}}></div>  
              </div>    
            </div>
        ) : (
          <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar ciclo <RiPlayFill className={styles.actionIcon}/>
          </button>
        ) }
          </>
      )}
    </div>
  )
}