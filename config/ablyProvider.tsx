import React, { useState } from 'react';
import * as Ably from 'ably';
import { AblyProvider, useChannel, useConnectionStateListener } from 'ably/react';

export default function ProviderAbly({
  children
}:{
  children:React.ReactNode
}) {

  // Connect to Ably using the AblyProvider component and your API key
  const client = new Ably.Realtime.Promise({ key: process.env.ALBY_Key });

  return (
    <AblyProvider client={client}>
      {children}
    </AblyProvider>
  );
}


