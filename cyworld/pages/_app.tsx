import type { AppProps } from "next/app";
import GlobalStyle from "../components/style/globalstyles";
import Layout from "../components/template/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
