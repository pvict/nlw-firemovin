import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import toast from 'react-hot-toast';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  muteButton: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ 
  children, 
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [isMuteButtonOn, setMuteButtonOn] = useState(false);

  const experienceToNextLevel = Math.pow((level +1) * 4, 2)

  const notifyIcons = ['🎉','🏃‍♀️','💪','👊','🏋️‍♀'];

  function getNotifyIcon () {
    let notifyIcon = notifyIcons[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
    
    return notifyIcon;
  } 

  useEffect(() => {
    Notification.requestPermission(); 
  }, []);

  useEffect(() =>  {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  } , [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
    let winSound = new Audio('/win.wav');
    winSound.volume = 0.6;
    winSound.play();
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function muteButton() {
    setMuteButtonOn(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)

    let notificationSound = new Audio('/notification.wav');
    notificationSound.volume = 0.3;
    notificationSound.play();

    if (Notification.permission === 'granted') {
      toast(`Novo desafio!`, {
        icon: `${getNotifyIcon()}`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted+1);
  }

  return (
    <ChallengesContext.Provider value={{ 
      level, 
      currentExperience,
      experienceToNextLevel, 
      challengesCompleted, 
      levelUp ,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal,
      muteButton
    }}>
      {children}
      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  )
}