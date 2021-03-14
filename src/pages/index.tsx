import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { Sidebar } from '../components/Sidebar';
import { Toaster } from 'react-hot-toast';

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  toggleTheme(): void;
}
 
export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />

        <title>Início | move.it</title>
      </Head>
      <div className="wrapper">
        <Toaster position="top-right" reverseOrder={false} />
        <Sidebar toggleTheme={props.toggleTheme} />
        <div className={styles.container}>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { 
    level, 
    currentExperience, 
    challengesCompleted
  } = ctx.req.cookies; 

  if (isNaN(Number(level))) {
    return {
      props: {
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0
      }
    }
  } else {
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
      }
    }
  }
}
