import Head from 'next/head';
import React from 'react';

import { Intro } from '../../src/components/intro/Intro';

export default () => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <Intro>About page</Intro>
  </>
);
