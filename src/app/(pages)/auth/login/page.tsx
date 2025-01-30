'use client';
import LoginPage from '@/Components/Auth/LoginPage'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboards/crmdashboard");
    }
  }, [session, router]);

  if (session) return null;
  return <LoginPage/>
}

export default Login