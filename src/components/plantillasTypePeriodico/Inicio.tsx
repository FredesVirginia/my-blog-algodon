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
        className=" p-3 flex gap-10 justify-center"
      >
        <p>Primero</p>
        <p>Segundo</p>
        <p>Tercero</p>
      </div>

      <div className="p-3 flex ">
        <div className="flex-[3] bg-re-400 ">
          <p className="h1-inicio text-4xl">Bolas de Algodon</p>
        </div>

        <div className="flex flex-[8] bg-red800 ml-50  pt-2  gap-25">
          <p>Primero</p>
          <p>Segundo</p>
          <p>Tercero</p>
        </div>
      </div>
      <div className="border-2"></div>
    </div>
  );
}
