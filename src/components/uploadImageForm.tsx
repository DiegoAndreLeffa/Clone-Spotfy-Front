import { useMusic } from "@/contexts/musicContext";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaImage } from "react-icons/fa";

const UploadImageForm = () => {
  const { setPage, musicInfo, setMusicInfo, setCoverImage, createMusic } = useMusic();
  const [fileSelected, setFileSelected] = useState(false);

  const onDrop = useCallback((files: File[]) => {
    setCoverImage(files[0]);
    setFileSelected(true);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg"]
    }
  });

  const { getRootProps, getInputProps } = dropzone;

  return (
    <div className="container w-3/4 min-w-[1393px] bg-gray-800/80 rounded-md  flex justify-center">
      <div>
        <p className="text-4xl my-6 font-semibold text-center">Salvar música</p>
        <div className="flex flex-row justify-center mb-6">
          <div className={`w-5 h-5 m-1 rounded-full ${fileSelected ? "bg-gray-100" : "bg-gray-400"}`}></div>
          <div className={`w-5 h-5 m-1 rounded-full ${fileSelected ? "bg-gray-100" : "bg-blue-400"}`}></div>
        </div>
        <div className="flex flex-row w-4/5">
          <div {...getRootProps()} className={`flex flex-col min-w-[648px] min-h-[410px] rounded-lg border-dashed border-2 border-gray-400 ${fileSelected ? "bg-gray-100" : "bg-pink-500"}`}>
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
              <div className="flex flex-col items-center pt-5 pb-6 w-full h-full gap-2">
                <FaImage className="fill-blue-900 w-24 h-20 m-4 " />
                <p className="text-3xl">Arrasta e solte a capa aqui</p>
                <p className="text-3xl mt-4">- OU -</p>
                <button className="user-form-button w-48 my-8 text-blue-900" onClick={(e) => e.preventDefault()}>
                  Busque aqui
                </button>
                <p className="text-lg italic font-gray-200">Formatos suportados: jpg</p>
              </div>
            </label>
            <input className="hidden" {...getInputProps()} />
          </div>
          <div className="min-w-[648px] min-h-[410px] justify-center">
            <div className="pl-6">
              <label htmlFor="gender" className="user-form-label">
                Gênero
              </label>
              <div className="mt-2 mb-12">
                <input
                  type="text"
                  className="user-form-input"
                  placeholder="heavy metal"
                  value={musicInfo.genre}
                  onChange={(e) => {
                    setMusicInfo({ ...musicInfo, genre: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="year" className="user-form-label">
                  Ano
                </label>
                <div className="mt-2 mb-12">
                  <input
                    type="text"
                    className="user-form-input"
                    placeholder="1970"
                    value={musicInfo.year}
                    onChange={(e) => {
                      setMusicInfo({ ...musicInfo, year: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex flex-row">
            <div className=" flex justify-center items-center mr-6 ">
              <button
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}>
                <span className="text-2xl ">Voltar</span>
              </button>
            </div>

            <button
              className="user-form-button w-72 my-8 text-blue-900"
              onClick={(e) => {
                e.preventDefault();
                createMusic();
              }}>
              Finalizar Cadastro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImageForm;
