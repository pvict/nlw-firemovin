import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jxnblk.png" alt="Brent Jackson"/>
      <div>
        <strong>Brent Jackson</strong>
        <p>
          <img src="icons/level.svg" alt="Level" style={{ width: '0.9rem' }}/>
          Level {level}
        </p>
      </div>
    </div>
  )
}