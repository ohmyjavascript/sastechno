import '../asset/css/global.css';
import Layout from '@/components/layout/Layout';
import Navbar from '@/shared/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
