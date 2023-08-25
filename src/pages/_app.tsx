import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { PlayerProvider } from "@/contexts/playerContext";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/contexts/authContext";
import "react-toastify/dist/ReactToastify.css";
import { MusicProvider } from "@/contexts/musicContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <PlayerProvider>
          <MusicProvider>
            <Component {...pageProps} />
          </MusicProvider>
        </PlayerProvider>
      </AuthProvider>
    </>
  );
}