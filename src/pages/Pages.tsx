import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import SEO from '../components/SEO'
import { SectionHeading, ServiceGrid, ValuesSection, ArticleGrid } from '../components/Sections'
import { services, faqItems } from '../data/content'
import { siteConfig } from '../config/siteConfig'

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>{title.replace(/[.]/g, '')}</span></div></div></section>
}

export function About() {
  return <><SEO title="About Mysana Clinic" description="Learn about Mysana Clinic's approach to women's healthcare in Mangaluru." path="/about"/><PageHero eyebrow="A SPACE FOR WOMEN'S WELLBEING" title="Care begins with being heard." text="Mysana Clinic is being developed around a simple belief: every woman deserves respectful conversations, clear information and thoughtful healthcare."/><section className="section-pad"><div className="container intro-grid"><div className="intro-art"><div className="intro-image"><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85" alt="Healthcare consultation" /></div></div><div className="intro-copy"><span className="eyebrow">OUR PHILOSOPHY</span><h2>Healthcare with <em>humanity at its heart.</em></h2><p>Women's health needs can change across adolescence, reproductive years, pregnancy and menopause. We want Mysana to be a welcoming place where people can ask questions without hesitation.</p><p>Our clinic information and services will be updated with verified details as the practice prepares to welcome patients.</p></div></div></section><section className="values-section section-pad"><div className="container"><SectionHeading eyebrow="WHAT MATTERS TO US" title="The values behind Mysana." centered/><ValuesSection/></div></section></>
}

export function Services() {
  return <><SEO title="Women's Healthcare Services in Mangaluru" description="Explore women's health and gynaecology consultation areas at Mysana Clinic, Mangaluru." path="/services"/><PageHero eyebrow="OUR AREAS OF CARE" title="Women's health, considered from every angle." text="Explore our consultation areas. Please contact the clinic to verify which services and facilities are currently available."/><section className="section-pad"><div className="container"><ServiceGrid/></div></section></>
}

export function ServiceDetail() {
  const { slug } = useParams()
  const item = services.find(s => s.slug === slug)
  if (!item) return <NotFound/>
  return <><SEO title={`${item.title} in Mangaluru`} description={item.description} path={`/services/${slug}`}/><PageHero eyebrow="MYSANA CLINIC • WOMEN'S HEALTH" title={item.title} text={item.description}/><section className="section-pad"><div className="container detail-layout"><div className="detail-main"><span className="eyebrow">ABOUT THIS CONSULTATION AREA</span><h2>Care starts with understanding <em>your concerns.</em></h2><p>Every person's health history and needs are different. A consultation gives you an opportunity to describe your concerns, ask questions and discuss whether an assessment or further care may be appropriate.</p><h3>What you can discuss</h3><ul className="check-list"><li><CheckCircle2/> Your symptoms, questions and health goals.</li><li><CheckCircle2/> Relevant health history and previous investigations.</li><li><CheckCircle2/> Possible assessment and care options with a qualified clinician.</li><li><CheckCircle2/> Follow-up questions and next steps.</li></ul><div className="notice-box"><strong>Please note</strong><p>This page provides general information only. It does not diagnose a condition or replace a consultation. Confirm availability of this service directly with the clinic.</p></div></div><aside className="detail-aside"><span className="eyebrow">NEED MORE INFORMATION?</span><h3>Let's talk about your care.</h3><p>Contact Mysana Clinic to enquire about consultation availability.</p><Link to="/appointment" className="button button-primary">Request an appointment <ArrowUpRight size={16}/></Link><Link to="/contact" className="text-link">Contact details <ArrowRight size={16}/></Link></aside></div></section></>
}

export function Pregnancy() {
  return <><SEO title="Pregnancy & Antenatal Care in Mangaluru" description="Information about pregnancy and antenatal care enquiries at Mysana Clinic in Mangaluru." path="/pregnancy-care"/><PageHero eyebrow="PREGNANCY & ANTENATAL CARE" title="Support through every new beginning." text="Pregnancy is a deeply personal journey. Find information and enquire about consultation options for pregnancy and antenatal care."/><section className="section-pad"><div className="container"><div className="journey-steps journey-steps-large">{[['01','Before pregnancy','Discuss health goals, previous history and preconception questions.'],['02','Early pregnancy','Ask about early pregnancy consultations and recommended next steps.'],['03','Antenatal journey','Discuss routine care, monitoring and questions as pregnancy progresses.'],['04','After birth','Talk about postnatal recovery, wellbeing and follow-up care.']].map(([n,t,d])=><div className="journey-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18}/></div>)}</div><div className="notice-box"><strong>Service availability</strong><p>Please contact the clinic to confirm the pregnancy-related consultations, facilities and referral arrangements currently offered.</p></div></div></section></>
}

export function Doctor() {
  return <><SEO title="Our Doctor" description="Meet the medical professional at Mysana Clinic. Doctor credentials will be published after verification." path="/doctor"/><PageHero eyebrow="MEET YOUR CARE TEAM" title="Professional care. Personal attention." text="Learn about the clinician behind Mysana Clinic. Professional information will be added after verification."/><section className="section-pad"><div className="container doctor-profile"><div className="doctor-profile-photo"><img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85" alt="Doctor profile placeholder"/></div><div><span className="eyebrow">GYNAECOLOGY & WOMEN'S HEALTH</span><h2>{siteConfig.doctorName}</h2><p>{siteConfig.doctorQualifications}</p><div className="profile-facts"><span><strong>Registration</strong>{siteConfig.doctorRegistration}</span><span><strong>Experience</strong>{siteConfig.doctorExperience}</span><span><strong>Languages</strong>{siteConfig.doctorLanguages}</span></div><div className="notice-box"><strong>Profile information pending</strong><p>Doctor name, qualifications, registration, experience and photograph must be confirmed by the clinic before publication.</p></div><Link to="/appointment" className="button button-primary">Enquire about a consultation <ArrowUpRight size={16}/></Link></div></div></section></>
}

export function HealthLibrary() {
  return <><SEO title="Women's Health Library" description="Accessible women's health information from Mysana Clinic in Mangaluru." path="/health-library"/><PageHero eyebrow="READ • LEARN • ASK" title="A little knowledge can help you feel prepared." text="Explore general women's health topics to support informed conversations with your healthcare professional."/><section className="section-pad"><div className="container"><ArticleGrid/><div className="notice-box library-note"><strong>Medical information disclaimer</strong><p>Articles are general educational content and are not a substitute for diagnosis, treatment or advice from a qualified healthcare professional.</p></div></div></section></>
}

export function Contact() {
  return <><SEO title="Contact Mysana Clinic in Mangaluru" description="Contact Mysana Clinic in Mangaluru for clinic information and appointment enquiries." path="/contact"/><PageHero eyebrow="WE'D LOVE TO HEAR FROM YOU" title="A conversation is just a message away." text="For appointment enquiries and clinic information, use the contact details below once they have been confirmed."/><section className="section-pad"><div className="container contact-grid"><div className="contact-cards"><div className="contact-card"><MapPin/><div><strong>Clinic address</strong><p>{siteConfig.address}</p></div></div><div className="contact-card"><Phone/><div><strong>Phone</strong><p>{siteConfig.phone || 'Clinic phone number to be added'}</p></div></div><div className="contact-card"><Mail/><div><strong>Email</strong><p>{siteConfig.email || 'Clinic email to be added'}</p></div></div><div className="contact-card"><Clock/><div><strong>Consultation hours</strong><p>{siteConfig.openingHours}</p></div></div></div><div className="map-panel">{siteConfig.googleMapsEmbedUrl ? <iframe title="Mysana Clinic location map" src={siteConfig.googleMapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/> : <div className="map-placeholder"><MapPin size={32}/><strong>Mangaluru, Karnataka</strong><span>Add the verified clinic location to display the map.</span></div>}</div></div></section></>
}

export function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', message: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }))
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.service) { setError('Please complete your name, phone number and consultation area.'); return }
    setError('')
    const body = `Appointment enquiry for Mysana Clinic%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AConsultation: ${encodeURIComponent(form.service)}%0APreferred date: ${encodeURIComponent(form.date)}%0APreferred time: ${encodeURIComponent(form.time)}%0AMessage: ${encodeURIComponent(form.message)}`
    if (siteConfig.whatsapp) {
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${body}`, '_blank', 'noopener,noreferrer')
      setSent(true)
    } else if (siteConfig.email) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.appointmentEmailSubject)}&body=${body.replaceAll('%0A', '%0D%0A')}`
      setSent(true)
    } else {
      setError('The clinic has not configured its WhatsApp number or email yet. Please use the contact page for now.')
    }
  }
  return <><SEO title="Appointment Enquiry" description="Send an appointment enquiry to Mysana Clinic in Mangaluru." path="/appointment"/><PageHero eyebrow="APPOINTMENT ENQUIRY" title="Let's find a time to talk." text="Share your preferred consultation details. The clinic will contact you to confirm availability."/><section className="section-pad"><div className="container appointment-layout"><form className="appointment-form" onSubmit={submit}><div className="form-heading"><span className="eyebrow">GET IN TOUCH</span><h2>Request an appointment</h2><p>Fields marked with * are required.</p></div><div className="form-grid"><label>Full name *<input value={form.name} onChange={e=>update('name',e.target.value)} required placeholder="Your name"/></label><label>Mobile number *<input value={form.phone} onChange={e=>update('phone',e.target.value)} required type="tel" placeholder="Your contact number"/></label><label>Email address<input value={form.email} onChange={e=>update('email',e.target.value)} type="email" placeholder="you@example.com"/></label><label>Consultation area *<select value={form.service} onChange={e=>update('service',e.target.value)} required><option value="">Choose an area</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></label><label>Preferred date<input type="date" min={new Date().toISOString().slice(0,10)} value={form.date} onChange={e=>update('date',e.target.value)}/></label><label>Preferred time<input type="time" value={form.time} onChange={e=>update('time',e.target.value)}/></label><label className="full-field">Message (optional)<textarea value={form.message} onChange={e=>update('message',e.target.value)} rows={4} placeholder="A brief note about your enquiry. Please do not include sensitive medical information."/></label></div><p className="form-consent">By submitting, you agree that the clinic may use these details to respond to your enquiry. Do not include medical records or sensitive health information.</p>{error && <p className="form-error">{error}</p>}{sent && <p className="form-success">Your enquiry has been prepared. The clinic will confirm appointment availability separately.</p>}<button className="button button-primary" type="submit">Send appointment enquiry <ArrowUpRight size={17}/></button></form><aside className="appointment-aside"><span className="eyebrow">PLEASE NOTE</span><h3>Your enquiry is the first step.</h3><p>This form does not book or confirm an appointment. The clinic will contact you to confirm a suitable date and time.</p><div className="aside-divider"/><strong>Need urgent medical attention?</strong><p>This website is not an emergency service. If you have an emergency, contact local emergency services or go to the nearest emergency department.</p></aside></div></section></>
}

export function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return <div className="faq-list">{faqItems.map((f,i)=><div className="faq-item" key={f.q}><button onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i}><span>{f.q}</span><ChevronDown className={active===i?'rotated':''}/></button>{active===i && <p>{f.a}</p>}</div>)}</div>
}

export function Privacy() {
  return <><SEO title="Privacy Policy" description="Mysana Clinic website privacy information." path="/privacy"/><PageHero eyebrow="YOUR INFORMATION" title="Privacy policy" text="This draft policy should be reviewed and completed by the clinic before the website is launched."/><section className="section-pad"><div className="container legal-copy"><h2>Information submitted through this website</h2><p>Appointment enquiry details may be used to respond to your request. This website is not designed to collect medical records, diagnoses or detailed health histories.</p><h3>Data handling</h3><p>Before launch, the clinic must specify who receives enquiries, how they are stored, how long they are retained and how a person can request access or correction.</p><h3>Third-party services</h3><p>Links to WhatsApp, email, maps or other services may take you to third-party platforms that have their own privacy practices.</p><p><strong>Clinic action required:</strong> Replace this draft with a legally reviewed privacy notice and verified contact details.</p></div></section></>
}

export function Disclaimer() {
  return <><SEO title="Medical Disclaimer" description="Medical information disclaimer for Mysana Clinic website." path="/disclaimer"/><PageHero eyebrow="IMPORTANT INFORMATION" title="Medical disclaimer" text="Please read this information before using the website."/><section className="section-pad"><div className="container legal-copy"><p>Content on this website is intended for general educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis or treatment.</p><p>Do not delay seeking medical advice because of something you have read on this website. Always consult a qualified healthcare professional about your individual circumstances.</p><p>This website is not monitored as an emergency communication channel. In an emergency, contact local emergency services or attend the nearest emergency department.</p></div></section></>
}

export function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 • PAGE NOT FOUND</span><h1>We can't find that page.</h1><p>The page may have moved or the address may be incorrect.</p><Link to="/" className="button button-primary">Return to homepage <ArrowRight size={16}/></Link></section>
}
