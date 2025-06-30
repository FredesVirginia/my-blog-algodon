import PERFIL from "../../assets/img/perfil.png";

export default function Main() {
  return (
    <div className="bg-white m-3 w-min-full h-screen rounded-2xl">
      <div className="flex items-center justify-between mx-10 pt-10">
        <div className="h1-description bg-re-400">
          <h2 className="text-sky-900">Bolas de Algodon</h2>
        </div>
        <div className="bg-ed-700 flex justify-center gap-20 items-center ">
          <div>
            <h2>Desarrollo Web</h2>
          </div>
          <div> Mamarachismo Ilustrado</div>
          <div className=" w-10  rounded-2xl -translate-y-1">
            <img src={PERFIL} alt="" className="w-full rounded-2xl " />
          </div>
        </div>
      </div>


      <div className="bg-gray-200  mx-8 mt-5  flex flex-col justify-center items-center py-8 rounded-2xl">
            <h1 className="text-center text-gray-400" >WELCOME TO BULETIN</h1>
            <p className="text-center font-bold text-gray-700">Bienvenido al  <span className="text-red-800">rincón 🍂 </span> donde Sherlock Holmes tomaría mate y <span className="text-red-800">escribiría  ✍️</span> en React.</p>
      </div>

      <div className="border">

      </div>
    </div>
  );
}
