import "normalize.css";
import "swiper/css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const graphic = localFont({
  src: [
    {
      path: "../src/assets/fonts/GraphikLCG-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/GraphikLCG-Super.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${graphic.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
