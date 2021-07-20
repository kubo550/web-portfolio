import "styles/globals.css";
import "nprogress/nprogress.css";

import { AnimatePresence } from "framer-motion";
import nProgress from "nprogress";
import { Router } from "next/dist/client/router";

import type { AppProps } from "next/app";
import { Header } from "components";

nProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
};
export default MyApp;
