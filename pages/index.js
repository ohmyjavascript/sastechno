import Head from 'next/head';
import Banner from '@/components/Banner';
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
  return (
    <div>
      <Banner />
      <WhatWeDo />
    </div>
  );
}
