import MusicContainer from "@/components/musicContainer";
import { musicData } from "@/schemas/music.schema";
import api from "@/services/api";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface MusicProps {
  music: musicData;
}

const Music: NextPage<MusicProps> = ({ music }: MusicProps) => {
  const router = useRouter();
  return (
    <main className="body min-h-screen">
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
      <div className="flex items-center justify-center">
        <MusicContainer music={music} />
      </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "7f52443e-88ac-405f-a3f4-6ee11ddbea0d" }
      }
    ],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<MusicProps> = async (ctx) => {
  const id = ctx.params!.id;
  const response = await api.get<musicData>(`/musics/${id}`);

  return { props: { music: response.data }, revalidate: 60 };
};

export default Music;