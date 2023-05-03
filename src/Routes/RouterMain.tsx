import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { DashEmpresas } from "../Pages/DashBoardEmpresa/DashBoardEmpresa";
import { DashMotoboy } from "../Pages/DashboardMotoboy/DashBoardMotoboy";
import { ProtectedDashMotoboy } from "../components/ProtectedRoutes/dashMotoboy";
import { ProtectedDashEmpresas } from "../components/ProtectedRoutes/dashEmpresas";
import { JobsProvider } from "../providers/JobsContext";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboardempresas" element={<ProtectedDashEmpresas />}>
        <Route
          index
          element={
            <JobsProvider>
              <DashEmpresas />
            </JobsProvider>
          }
        />
      </Route>

      <Route path="/dashboardemotoboy" element={<ProtectedDashMotoboy />}>
        <Route
          index
          element={
            <JobsProvider>
              <DashMotoboy />
            </JobsProvider>
          }
        />
      </Route>
    </Routes>
  );
};
