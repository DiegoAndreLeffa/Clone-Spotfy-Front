import UploadImageForm from "@/components/uploadImageForm";
import UploadMusicForm from "@/components/uploadMusicForm";
import { useMusic } from "@/contexts/musicContext";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";

const UploadMusic: NextPage = () => {
  const { page } = useMusic();
  const router = useRouter();
  const pageDisplay = () => {
    if (page === 0) {
      return <UploadMusicForm />;
    } else {
      return <UploadImageForm />;
    }
  };
  return (
    
    <main className="body min-h-screen ">
      <button
        className="btn-primary m-6"
        onClick={() => {
          router.push("/");
        }}
        style={{
          backgroundColor: "transparent",
          border: "1px solid #FBC02D",
          color: "#FBC02D",
          padding: "5px",
          borderRadius: "15px",
        }}>
        Voltar
      </button>
      <form className="flex items-center justify-center">
        <div>{pageDisplay()}</div>
      </form>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  if (!cookies["kenziefy.token"]) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

export default UploadMusic;