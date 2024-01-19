'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const SignoutButton = () => {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div className="flex justify-center items-center gap-4 ml-auto">
        <p className="text-md tracking-tight font-bold text-black">
          {session.user.name}
        </p>
        <button className="text-white bg-black rounded-full p-3 text-sm font-semibold" onClick={() => signOut()}>Sign Out</button>
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
