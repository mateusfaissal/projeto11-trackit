import SignUp from "./pages/SignUp"
import Habits from "./pages/Habits"
import Today from "./pages/Today"
import Login from "./pages/Login"
import History from "./pages/History"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Usuario } from "./resources/context"
import { useState } from "react"

export default function App() {

  const [usuario, setUsuario] = useState({});
  //const [habitsFinished, setHabitsFinished] = useState(0);

  return (
    <Usuario.Provider value={{usuario, setUsuario }}>
      {/*<HabitsFinished.Provider value={[habitsFinished, setHabitsFinished]}>*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </BrowserRouter>
      {/*</HabitsFinished.Provider>*/}
    </Usuario.Provider>

  )

}
