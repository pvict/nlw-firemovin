import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BiHomeAlt, BiMedal, BiMeteor, BiMoon} from 'react-icons/bi'
import styles from '../styles/components/Sidebar.module.css'
import Switch from "react-switch";

export function Sidebar( ): JSX.Element {
  const router = useRouter()
  return (
    <aside className={styles.sidebarContainer}>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.navLogo}>
            <BiMeteor/>
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
          <li className={router.pathname === '/leaderboard' ? styles.active : ''}>
            <Link href="/leaderboard">
              <a>
                <BiMedal />
              </a>
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <footer className={styles.footer}>

      </footer>
    </aside>
  )
}