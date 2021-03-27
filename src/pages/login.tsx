import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css'

interface LoginProps {
  
}
 
export default function Login(props: LoginProps) {
  const [session, loading] = useSession();

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn('google')}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>

}
