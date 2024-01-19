'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const SignoutButton = () => {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sm tracking-tight text-white">
          {session.user.name}
        </p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
  return (
    <button className="text-white bg-black rounded-full p-3 text-sm font-semibold" onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export default SignoutButton;
