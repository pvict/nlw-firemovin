import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface LoginProps {
  
}
 
export default function Login(props: LoginProps) {
  const [session, loading] = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login');
    } else {
      router.push('/');
    }
  }, [session, loading]);

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
