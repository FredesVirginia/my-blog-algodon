import ME from "../../assets/img/Captura de pantalla (6).png"

export default function Inicio() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#fbfbf3",
      }}
    >
      <div></div>

      <div
        style={{
          backgroundColor: "#d5dfe6",
        }}
        className=" p-3 flex  justify-between px-20"
      >
        <p>Primero</p>
        <p>Segundo</p>
        <p>Tercero</p>
      </div>

      <div className="p-3 flex ">
        <div className="flex-[3] bg-re-400 ">
          <p className="h1-inicio md:text-2xl text-4xl">Bolas de Algodon</p>
        </div>

        <div className="flex flex-[8] bg-red800 ml-42  pt-2  gap-25">
          <p>Primero</p>
          <p>Segundo</p>
          <p>Tercero</p>
        </div>
      </div>
      <div className="border-2"></div>
      <div className="flex justify-center items-center min-h-screen g-blue-400">
        <div className=" flex-1  p-10 flex flex-col justify-center items-center">
          <p className="h1-edu text-center">
            Soy Vicky, también conocida como John Clein. Desarrolladora web.
          </p>
          <p className="h1-edu text-center">
            Me gusta pensar que llevo dentro a un noble ingles rebelde del siglo
            XVII.
          </p>
          <p className="h1-edu text-center">
            En este blog hablo de desarrollo web, sí… Pero también de las
            preguntas que no se responden con código: reflexiones, vivencias y
            poemas que nacen del caos y la calma.
          </p>
        </div>
        <div className=" flex-1 flex justify-center bg-rd-700 ">

           <div className="h-66 w-66">
        <img src={ME} alt="Vicky" className=" w-full m-auto bg-bue-700 h-auto object-contain rounded-3xl " />
      </div>
        </div>
      </div>
    </div>
  );
}
