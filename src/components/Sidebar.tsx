import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BiHomeAlt, BiMedal, BiMeteor, BiMoon, BiSun} from 'react-icons/bi'
import styles from '../styles/components/Sidebar.module.css'
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}

export function Sidebar({toggleTheme}): JSX.Element {
  const router = useRouter()
  const {colors, title} = useContext(ThemeContext);
  return (
    <aside className={styles.sidebarContainer}>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.navLogo}>
            <BiMeteor />
          </a>
        </Link>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li className={router.pathname === '/' ? styles.active : ''}>
            <Link href="/">
              <a>
                <BiHomeAlt />
              </a>
            </Link>
          </li>
          <li
            className={router.pathname === '/leaderboard' ? styles.active : ''}
          >
            <Link href="/leaderboard">
              <a>
                <BiMedal />
              </a>
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <footer className={styles.footer}>
        <i>{title === 'dark' ? <BiSun /> : <BiMoon />}</i>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={12}
          width={36}
          handleDiameter={18}
          offHandleColor={colors.text}
          onHandleColor={colors.redDark}
          offColor={colors.grayLine}
          onColor={colors.redMark}
          activeBoxShadow='0 0 1px 2px #222222'
        />
      </footer>
    </aside>
  );
}