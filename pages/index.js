import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Loc. I'm currently a Software Engineer @ JPMorgan Chase & Co.</p>
        <p>
          Linkedin: {' '}
          <a href="https://www.linkedin.com/in/loc-lam-b38552125/">Loc's Linkedin</a>
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
