import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { PlayerProvider } from "@/contexts/playerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  );
}