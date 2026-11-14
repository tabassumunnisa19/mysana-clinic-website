import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2, HeartPulse, CalendarDays, Flower2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { ArticleGrid, SectionHeading, ServiceGrid, ValuesSection } from '../components/Sections'
import { siteConfig } from '../config/siteConfig'

export default function Home() {
  return <>
    <SEO title="Women's Healthcare & Gynaecology in Mangaluru" description="SANA CLINIC offers information about women's healthcare, gynaecology and pregnancy care in Mangaluru, Karnataka." path="/" />
    <section className="hero">
      <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
          <span className="eyebrow"><span className="eyebrow-dot"/> ADVANCED & PERSONALISED PCOD SPECIALTY <i/> MANGALURU</span>
          <h1>Personalised care for <em>PCOD & hormonal health.</em></h1>
          <p className="hero-lead">Specialised, personalised support for PCOD, hormonal health and the concerns that matter to you.</p>
          <div className="hero-actions"><Link to="/appointment" className="button button-primary">Request an appointment <ArrowUpRight size={17}/></Link><Link to="/services" className="button button-quiet">Explore our services <ArrowRight size={17}/></Link></div>
          <div className="hero-note"><span className="note-icon"><HeartPulse size={18}/></span><span><strong>Advanced & personalised</strong><small>Individual attention. Clear guidance.</small></span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
          <div className="hero-photo-wrap"><img src={`${import.meta.env.BASE_URL}images/clinic-consultation-team.png`} alt="Female doctor, nurse and patient during a clinic consultation" /></div>
          <div className="hero-stamp"><span>CARE</span><strong>for every<br/>woman</strong><small>♡</small></div>
          <div className="hero-caption"><span className="caption-leaf">✳</span><span><strong>A little more care.</strong><small>At every stage of life.</small></span></div>
        </motion.div>
      </div>
      <div className="hero-bottom container"><span>CARE THAT LISTENS</span><span className="line"/><span>HEALTH THAT EMPOWERS</span><span className="line"/><span>WELLNESS THROUGH EVERY SEASON</span></div>
    </section>

    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <div className="intro-art"><div className="intro-image"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85" alt="A clinician speaking with a patient" /></div><div className="intro-art-label"><span>♡</span><strong>Listen.<br/>Understand.<br/>Care.</strong></div></div>
        <div className="intro-copy"><span className="eyebrow">WELCOME TO SANA CLINIC</span><h2>Advanced & personalised <em>PCOD specialty care.</em></h2><p>Women's health is personal. Every question, concern and life stage deserves thoughtful attention. SANA CLINIC is being created as a welcoming space for conversations about gynaecological health, pregnancy and wellbeing.</p><p>Our approach is centred on listening, clear explanations and helping you understand the care options available to you.</p><Link to="/about" className="text-link">Discover SANA CLINIC <ArrowUpRight size={17}/></Link></div>
      </div>
    </section>

    <section className="services-section section-pad">
      <div className="container"><div className="section-row"><SectionHeading eyebrow="HOW WE CAN HELP" title="Care for the things that matter." text="Explore women's health topics and consultation areas. Contact the clinic to confirm currently available services."/><Link to="/services" className="button button-outline">View all services <ArrowUpRight size={16}/></Link></div><ServiceGrid limit={4}/></div>
    </section>

    <section className="journey-section section-pad">
      <div className="container journey-grid"><div><span className="eyebrow">EVERY CHAPTER MATTERS</span><h2>Here for your <em>health journey.</em></h2><p className="body-large">From PCOD and menstrual health to fertility, menopause and general gynaecology, every concern deserves thoughtful attention.</p><Link to="/services/pcod-hormonal-health" className="button button-primary">Explore PCOD care <ArrowUpRight size={16}/></Link></div>
        <div className="journey-steps">
          {[['01','Planning & preparation','Conversations about preconception health and your goals.'],['02','Pregnancy & antenatal care','Guidance and consultation throughout pregnancy.'],['03','Postnatal wellbeing','Support as you adjust after pregnancy and birth.']].map(([n,t,d])=><div className="journey-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18}/></div>)}
        </div>
      </div>
    </section>

    <section className="doctor-section section-pad">
      <div className="container doctor-grid"><div className="doctor-photo"><img src={`${import.meta.env.BASE_URL}images/clinic-consultation-team.png`} alt="Female doctor, nurse and patient at SANA CLINIC" /><span className="photo-tag">MEET YOUR CARE TEAM</span></div><div className="doctor-copy"><span className="eyebrow">PERSONAL, PROFESSIONAL CARE</span><h2>A conversation is where <em>care begins.</em></h2><p>Get to know the medical professional behind SANA CLINIC. Verified qualifications, professional registration, experience and consultation information will be published here once confirmed.</p><div className="doctor-details"><strong>{siteConfig.doctorName}</strong><span>{siteConfig.doctorQualifications}</span><span>{siteConfig.doctorExperience}</span></div><Link to="/doctor" className="text-link">Meet the doctor <ArrowUpRight size={17}/></Link></div></div>
    </section>

    <section className="values-section section-pad"><div className="container"><SectionHeading eyebrow="THE SANA CLINIC APPROACH" title="A more thoughtful kind of care." text="The experience we aim to create is grounded in respect, understanding and clear communication." centered/><ValuesSection/></div></section>

    <section className="articles-section section-pad"><div className="container"><div className="section-row"><SectionHeading eyebrow="THE HEALTH LIBRARY" title="Knowledge is part of care." text="Simple, accessible information to help you prepare for informed conversations with your healthcare professional."/><Link to="/health-library" className="text-link">Visit health library <ArrowUpRight size={17}/></Link></div><ArticleGrid/></div></section>

    <section className="pcod-location section-pad">
      <div className="container pcod-location-grid">
        <div className="pcod-building"><img src={`${import.meta.env.BASE_URL}images/comfort-inn-building.webp`} alt="Comfort Inn Complex, Deralakatte"/></div>
        <div className="pcod-location-copy">
          <span className="eyebrow">ADVANCED & PERSONALISED PCOD SPECIALTY</span>
          <h2>1st PCOD Clinic in <em>Mangalore</em></h2>
          <p>Visit SANA CLINIC at Comfort Inn Complex, opposite K.S. Hegde Medical College & Hospital, Deralakatte.</p>
          <a className="text-link" href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">Get directions & view location <ArrowUpRight size={17}/></a>
          <p className="pcod-address">{siteConfig.address}</p>
          <p><strong>Consultation hours</strong><br/>Monday–Saturday: 4:00 PM–8:30 PM<br/>Sunday: 10:00 AM–8:30 PM</p>
          <a className="button button-primary" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: +91 93531 94754</a>
        </div>
      </div>
    </section>

    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">WE'RE HERE TO LISTEN</span><h2>Start with a conversation.</h2><p>Have a question or want to enquire about a consultation? Reach out to SANA CLINIC.</p></div><Link to="/appointment" className="button button-light">Make an enquiry <ArrowUpRight size={17}/></Link></div></section>
  </>
}
