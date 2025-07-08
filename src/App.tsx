import { BrowserRouter, Routes, Route } from "react-router-dom";
import type React from "react";
import MainLayout from "./components/authcomponents/MainLayout";
import DashboardLayout from "./components/Homepage/HomeLayout";
import StatsCards from "./components/Homepage/Dashboardlayout/StatsCards";
import Chat from "./components/Homepage/Chatcomponents/Chat";
import Lead from "./components/Homepage/Leadscomponents/Lead";
import Team from "./components/Homepage/Teams/Team";
import Quick from "./components/Homepage/Quikreply/Quick";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/lol" element={<StatsCards/>} />
        <Route path="/Chats" element={<Chat/>} ></Route>
        <Route path="/Lead" element={<Lead/>}></Route>
         <Route path="/Team" element={<Team/>}></Route>
         <Route path="/Quick" element={<Quick/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;