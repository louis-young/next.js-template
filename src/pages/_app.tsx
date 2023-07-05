import type { AppProps } from "next/app";

import "@/stylesheets/index.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link href="/images/favicon.ico" rel="icon" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
