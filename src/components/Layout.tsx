import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

const navItems = [
  ['Home', '/'], ['About', '/about'], ['Our Doctor', '/doctor'],
  ['Services', '/services'], ['Pregnancy Care', '/pregnancy-care'],
  ['Health Library', '/health-library'], ['Contact', '/contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const whatsappUrl = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}`
    : '/contact'
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><MapPin size={14} /> Mangaluru, Karnataka</span>
          <span><Clock size={14} /> {siteConfig.openingHours}</span>
          <a href={siteConfig.phone ? `tel:${siteConfig.phone}` : '/contact'}><Phone size={14} /> {siteConfig.phone || 'Contact clinic'}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">m</span>
            <span><strong>MYSANA</strong><small>WOMEN'S HEALTHCARE</small></span>
          </Link>
          <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <nav className={open ? 'main-nav open' : 'main-nav'}>
            {navItems.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
            <Link className="nav-cta" to="/appointment" onClick={() => setOpen(false)}>Book an appointment <span>↗</span></Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light"><span className="brand-mark">m</span><span><strong>MYSANA</strong><small>WOMEN'S HEALTHCARE</small></span></Link>
          <p>Thoughtful, compassionate women's healthcare in Mangaluru. Your health journey deserves time, respect and clear conversations.</p>
          <div className="footer-social">{siteConfig.instagram && <a href={siteConfig.instagram} aria-label="Instagram"><Instagram size={18}/></a>}</div>
        </div>
        <div><h4>Explore</h4><Link to="/about">About the clinic</Link><Link to="/doctor">Our doctor</Link><Link to="/services">Our services</Link><Link to="/health-library">Health library</Link></div>
        <div><h4>Patient information</h4><Link to="/appointment">Appointment enquiry</Link><Link to="/contact">Contact us</Link><Link to="/privacy">Privacy policy</Link><Link to="/disclaimer">Medical disclaimer</Link></div>
        <div><h4>Find us</h4><p>{siteConfig.address}</p><p>{siteConfig.phone || 'Add clinic phone number'}</p><p>{siteConfig.email || 'Add clinic email address'}</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Mysana Clinic. All rights reserved.</span><span>Website information is not a substitute for medical advice.</span></div>
    </footer>
  )
}

export default function Layout() {
  return <><Header /><main><Outlet /></main><Footer />
    <a className="floating-whatsapp" href={siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}` : '/contact'} target={siteConfig.whatsapp ? '_blank' : undefined} rel="noreferrer" aria-label="WhatsApp clinic"><MessageCircle size={21}/><span>WhatsApp</span></a>
  </>
}
