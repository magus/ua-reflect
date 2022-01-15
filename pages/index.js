import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// This gets called on every request
export async function getServerSideProps(context) {
  const ua = context.req.headers['user-agent'];
  const now = new Date();
  const ip = context.req.headers['x-real-ip'];
  console.debug(now, ip, ua);

  // Pass data to the page via props
  return { props: { data: {} } };
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UA Reflect</title>
        <meta name="description" content="Check user agent via nextjs server logs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Look at Function logs on Vercel for `index`</h1>
      </main>
    </div>
  );
}
