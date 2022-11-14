import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from './Pages/Components/Header.jsx'
import { Home } from './Pages/Home.jsx'
import { Login } from './Pages/Login.jsx'
import { Sign } from './Pages/Sign.jsx'
import { Admin } from './Pages/Admin.jsx'
import { AddEvents } from './Pages/Admin/AddEvents.jsx'
import { PlaningEvent } from './Pages/Admin/PlaningEvent.jsx'
import { CreateEvent } from './Pages/Admin/CreateEvent.jsx'
import { ControlSubjects } from './Pages/Admin/ControlSubjects.jsx'
import { UserRol } from './Pages/Admin/UserRol.jsx'
import { GiveRol } from './Pages/Admin/GiveRol.jsx'
import { Teacher } from './Pages/Teacher.jsx'
import { ControlSubjectsTeach } from './Pages/Teach/ControlSubjectsTeach.jsx'
import { PassList } from './Pages/Teach/PassList.jsx'
import { QRList } from './Pages/Teach/QRList.jsx'
import { Tickets } from './Pages/Teach/Tickets'
import { Student } from './Pages/Student.jsx'
import { SeeTickets } from './Pages/Student/SeeTickets'
import { EventRegister } from './Pages/Student/EventRegister'
import { Inscription } from './Pages/Student/Inscription'
// import { Footer } from './Pages/Components/Footer'


function App() {


  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Sign-up" element={<Sign />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Teacher" element={<Teacher />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/AddEvent" element={<AddEvents />} />
      <Route path="/ControlSubjects" element={<ControlSubjects />} />
      <Route path="/UserRol" element={<UserRol />} />
      <Route path='/PlaningEvent' element={<PlaningEvent />} />
      <Route path='/CreateEvent' element={<CreateEvent />} />
      <Route path='/GiveRol' element={<GiveRol />} />
      <Route path='/ControlSubjectsTeach' element={<ControlSubjectsTeach />} />
      <Route path='/PassList' element={<PassList />} />
      <Route path='/QRList' element={<QRList />} />
      <Route path='/Tickets' element={<Tickets />} />
      <Route path='/SeeTickets' element={<SeeTickets />} />
      <Route path='/EventRegister' element={<EventRegister />} />
      <Route path='/Inscription' element={<Inscription />} />
    </Routes>
    </>
  )
    
}

export default App
