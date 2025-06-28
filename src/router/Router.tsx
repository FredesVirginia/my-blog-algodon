import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "../components/plantillasTypePeriodico/Inicio";

export default function Router() {
  return (
     <Routes>
      <Route path="/" element={<Inicio />} />
   
      

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
