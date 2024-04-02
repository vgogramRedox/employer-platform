"use client"
import React, { useState } from 'react';
import * as Ably from 'ably';
import { AblyProvider, useChannel, useConnectionStateListener } from 'ably/react';

export default async function ProviderAbly({
  children
}:{
  children:React.ReactNode
}) {

  
  // Connect to Ably using the AblyProvider component and your API key
  const alby = new Ably.Realtime.Promise({ key: process.env.NEXT_PUBLIC_ALBY_KEY });


  return (
    <AblyProvider client={alby}>
      {children}
    </AblyProvider>
  );
}


