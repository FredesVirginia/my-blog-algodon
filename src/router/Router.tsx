import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "../components/plantillasTypePeriodico/Inicio";
import Main from "../components/partial/Main";

export default function Router() {
  return (
     <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Main />} />
      

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
