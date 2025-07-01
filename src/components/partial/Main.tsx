import PERFIL from "../../assets/img/perfil.png";
import { FaSnowboarding } from "react-icons/fa";
import { motion } from "framer-motion";
import FONDO from "../../assets/img/fondo13.jpg"
import ME from "../../assets/img/me.png"


export default function Main() {
  return (
    <div className="bg-gray-200 m-3 w-min-full  pt-10 rounded-2xl">
      <div className="flex items-center justify-between mx-36 pt-10">
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

      <div className="bg-gray-200  mx-36 mt-5  flex flex-col justify-center items-center py-8 rounded-2xl">
        <h1 className="text-center text-gray-400">WELCOME TO BULETIN</h1>
        <p className="text-center font-bold text-gray-700">
          Bienvenido al <span className="text-red-800">rincón 🍂 </span> donde
          Sherlock Holmes tomaría mate y{" "}
          <span className="text-red-800">escribiría ✍️</span> en React.
        </p>
      </div>

      <div className=" mx-36  mt-5 flex justify-between   ">
        
        <div className="flex-1">
          <div className="h-86 w-86 rounded-2xl  px-1">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/25/20/20/owl-2344243_1280.jpg"
                  className="h-full w-full object-cover rounded-2xl"
                  alt="logo"
                />
          </div>

        </div>

        <div className=" flex-1">

           <div className="flex mx-10 mt-2  gap-5  items-center">
                <FaSnowboarding className="border bg-sky-900 rounded-2xl w-6 p-1 h-6" />
                <p className="text-gray-800">Articulo Bolas De Algodon</p>
              </div>
              <p className="mx-10 mt-4 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisi
              </p>
              <p className="mx-10 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis nostrum provident nobis, necessitatibus vero a, in
                fugiat omnis similique dicta nesciunt placeat sit aperiam
                blanditiis saepe vitae quod est nulla.
              </p>
              <p className="mx-10 text-gray-700">
                {" "}
                <span className="text-red-900 font-bold fo">Movie</span> Read
              </p>
        </div>


      </div>





        <p className="text-4xl ml-36 mt-5">Last News</p>
      <div className="    mx-36   ">
      
        <div className="flex justify-between flex-wrap gap-15  ">
          <div className="w-76 py-5 bg-gray-200 rounded-2xl">
            <div className="  ">
              <div className="h-56 w-76 rounded-2xl  p-2">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/25/20/20/owl-2344243_1280.jpg"
                  className="h-full w-full object-cover rounded-2xl"
                  alt="logo"
                />
              </div>
            </div>
            <div className=" ">
              <div className="flex mx-10 mt-2 gap-5  items-center">
                <FaSnowboarding className="border bg-sky-900 rounded-2xl w-6 p-1 h-6" />
                <p className="text-gray-800">Articulo Bolas De Algodon</p>
              </div>
              <p className="mx-10 mt-4 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisi
              </p>
              <p className="mx-10 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis nostrum provident nobis, necessitatibus vero a, in
                fugiat omnis similique dicta nesciunt placeat sit aperiam
                blanditiis saepe vitae quod est nulla.
              </p>
              <p className="mx-10 text-gray-700">
                {" "}
                <span className="text-red-900 font-bold fo">Movie</span> Read
              </p>
            </div>
          </div>

          <div className="w-76 py-5 bg-gray-200 rounded-2xl">
            <div className="  ">
              <div className="h-56 w-76 rounded-2xl  p-2">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/25/20/20/owl-2344243_1280.jpg"
                  className="h-full w-full object-cover rounded-2xl"
                  alt="logo"
                />
              </div>
            </div>
            <div className=" ">
              <div className="flex mx-10 mt-2 gap-5  items-center">
                <FaSnowboarding className="border bg-sky-900 rounded-2xl w-6 p-1 h-6" />
                <p className="text-gray-800">Articulo Bolas De Algodon</p>
              </div>
              <p className="mx-10 mt-4 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisi
              </p>
              <p className="mx-10 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis nostrum provident nobis, necessitatibus vero a, in
                fugiat omnis similique dicta nesciunt placeat sit aperiam
                blanditiis saepe vitae quod est nulla.
              </p>
              <p className="mx-10 text-gray-700">
                {" "}
                <span className="text-red-900 font-bold fo">Movie</span> Read
              </p>
            </div>
          </div>

           <div className="w-76 py-5 bg-gray-200 rounded-2xl">
            <div className="  ">
              <div className="h-56 w-76 rounded-2xl  p-2">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/25/20/20/owl-2344243_1280.jpg"
                  className="h-full w-full object-cover rounded-2xl"
                  alt="logo"
                />
              </div>
            </div>
            <div className=" ">
              <div className="flex mx-10 mt-2 gap-5  items-center">
                <FaSnowboarding className="border bg-sky-900 rounded-2xl w-6 p-1 h-6" />
                <p className="text-gray-800">Articulo Bolas De Algodon</p>
              </div>
              <p className="mx-10 mt-4 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisi
              </p>
              <p className="mx-10 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis nostrum provident nobis, necessitatibus vero a, in
                fugiat omnis similique dicta nesciunt placeat sit aperiam
                blanditiis saepe vitae quod est nulla.
              </p>
              <p className="mx-10 text-gray-700">
                {" "}
                <span className="text-red-900 font-bold fo">Movie</span> Read
              </p>
            </div>
          </div>

          <div className="w-76 py-5 bg-gray-200 rounded-2xl">
            <div className="  ">
              <div className="h-56 w-76 rounded-2xl  p-2">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/25/20/20/owl-2344243_1280.jpg"
                  className="h-full w-full object-cover rounded-2xl"
                  alt="logo"
                />
              </div>
            </div>
            <div className=" ">
              <div className="flex mx-10 mt-2 gap-5  items-center">
                <FaSnowboarding className="border bg-sky-900 rounded-2xl w-6 p-1 h-6" />
                <p className="text-gray-800">Articulo Bolas De Algodon</p>
              </div>
              <p className="mx-10 mt-4 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisi
              </p>
              <p className="mx-10 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis nostrum provident nobis, necessitatibus vero a, in
                fugiat omnis similique dicta nesciunt placeat sit aperiam
                blanditiis saepe vitae quod est nulla.
              </p>
              <p className="mx-10 text-gray-700">
                {" "}
                <span className="text-red-900 font-bold fo">Movie</span> Read
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex rounded-b-xl bg-red-900     mt-5 justify-between px-46 py-5 items-center gap-20">
        <div className="text-white"><p>Lo importante no es saber, es deducir. Y si no, improvisar con estilo.</p></div>
        <div className="w-36 h-36 boder">
          <img src={ME} alt="" className="w-full h-full object-contain rounded-full" />
        </div>
      </div>

     
    </div>
  );
}
