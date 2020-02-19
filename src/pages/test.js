import React from 'react';

import Providers from '@components/Providers';
import Chain from '@components/MyComponent/Chain';
import Configs from '@components/MyComponent/Configs';
import Ticker from '@components/Ticker';

const Test = () => {
  const items = [
    { id: '0', title: 'First' },
    { id: '1', title: 'Second' },
    { id: '2', title: 'Third' },
    { id: '3', title: 'Fourth' },
    { id: '4', title: 'Fifth' },
    { id: '5', title: 'Sixth' },
    { id: '6', title: 'Seventh' },
    { id: '7', title: 'Eighth' },
  ];

  return (
    <Providers>
      <div>
        <div>Test</div>
        <Ticker />
      </div>
    </Providers>
  );
};

export default Test;
