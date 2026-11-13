import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { About, Services, ServiceDetail, Pregnancy, Doctor, HealthLibrary, Contact, Appointment, Privacy, Disclaimer, NotFound } from './pages/Pages'

export default function App() {
  return <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:slug" element={<ServiceDetail/>}/>
      <Route path="/pregnancy-care" element={<Pregnancy/>}/>
      <Route path="/health-library" element={<HealthLibrary/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/disclaimer" element={<Disclaimer/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes>
}
