import ME from "../../assets/img/Captura_de_pantalla__1_-removebg-preview.png";
import fondo from "../../assets/img/fondo.jpg"
export default function Inicio() {
  return (
   <div className="relative w-full min-h-screen overflow-hidden text-white">
  {/* Imagen de fondo ocupando toda la pantalla */}
  <div className="absolute inset-0 z-0 flex">
    <img src={fondo} alt="" className="w-full h-full object-cover" />
    <img src={fondo} alt="" className="w-full h-full object-cover" />
    <img src={fondo} alt="" className="w-full h-full object-cover" />
  </div>

  {/* Contenido encima de la imagen */}
  <div className="relative z-10  ">
    <div className="w-full pt-5 flex justify-center items-center">
      <p className="bg-white/50 backdrop-blur-md text-black rounded-xl px-9 py-1 text-center">Primero</p>
     
    </div>

    <div className="p-3 flex">
      <div className="flex-[3] pl-10">
        <p className="h1-inicio md:text-2xl text-4xl">Bolas de Algodon</p>
      </div>
      <div className="flex bg-red-00 justify-between mx-40 flex-[8] ml-10 pt-2 gap-10">
        <p className="bg-white/50 backdrop-blur-md text-black rounded-xl px-9 py-1">Primero</p>
      <p className="bg-white/50 backdrop-blur-md text-black rounded-xl px-9 py-1">Primero</p>
       <p className="bg-white/50 backdrop-blur-md text-black rounded-xl px-9 py-1">Primero</p>
      </div>
    </div>

    <div className="border-2 my-5"></div>

    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-1 p-10 flex flex-col justify-center items-center">
        <p className="h1-edu text-center">Soy Vicky, también conocida como John Clein. Desarrolladora web.</p>
        <p className="h1-edu text-center">Me gusta pensar que llevo dentro a un noble inglés rebelde del siglo XVII.</p>
        <p className="h1-edu text-center">
          En este blog hablo de desarrollo web, sí… Pero también de las preguntas que no se responden con código:
          reflexiones, vivencias y poemas que nacen del caos y la calma.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-96 h-96 -translate-x-10 rounded-2xl shadow-lg overflow-hidden">
          <img src={ME} alt="Vicky" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
