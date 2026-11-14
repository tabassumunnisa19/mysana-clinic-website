
import {
  Baby,
  Flower2,
  CalendarHeart,
  Activity,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  HeartHandshake,
} from 'lucide-react'

export const services = [
  {
    title: 'PCOD & Hormonal Health',
    slug: 'pcod-hormonal-health',
    description: 'Personalised consultations for PCOD, hormonal symptoms, menstrual irregularities and related concerns.',
    icon: Activity,
    tone: 'rose',
  },
  {
    title: 'Menstrual Health',
    slug: 'menstrual-health',
    description: 'Care for irregular periods, painful periods and changes in menstrual patterns.',
    icon: CalendarHeart,
    tone: 'sage',
  },
  {
    title: 'Fertility & Preconception',
    slug: 'fertility-preconception',
    description: 'Preconception conversations and fertility evaluation where clinically appropriate.',
    icon: HeartHandshake,
    tone: 'rose',
  },
  {
    title: 'Menopause & Midlife Wellness',
    slug: 'menopause-wellness',
    description: 'Support for navigating perimenopause, menopause and midlife health changes.',
    icon: Flower2,
    tone: 'sage',
  },
  {
    title: 'Community Women’s Health',
    slug: 'community-womens-health',
    description: "Women's health awareness, education and preventive conversations for the community.",
    icon: ShieldCheck,
    tone: 'rose',
  },
  {
    title: 'Adolescent Gynaecology',
    slug: 'adolescent-gynaecology',
    description: 'Age-appropriate, respectful guidance for adolescent and young women’s health.',
    icon: Sparkles,
    tone: 'sage',
  },
  {
    title: 'General Gynaecology',
    slug: 'general-gynaecology',
    description: 'Consultations for common gynaecological concerns and ongoing reproductive health.',
    icon: Stethoscope,
    tone: 'rose',
  },
  {
    title: 'Pregnancy & Antenatal Care',
    slug: 'pregnancy-care',
    description: 'Support and guidance through pregnancy, with care plans shaped around individual needs.',
    icon: Baby,
    tone: 'sage',
  },
]

export const faqItems = [
  {
    q: 'How can I request an appointment?',
    a: 'Use the appointment enquiry form or contact the clinic by phone or WhatsApp. The clinic will confirm availability separately.',
  },
  {
    q: 'Do I need to book before visiting?',
    a: 'We recommend contacting the clinic before visiting so that the team can guide you about consultation availability.',
  },
  {
    q: 'What should I bring to my first consultation?',
    a: 'You may bring relevant previous prescriptions, investigation reports and a list of questions you would like to discuss.',
  },
  {
    q: 'Can I consult for irregular periods or PCOS?',
    a: 'You can enquire about a consultation for menstrual or hormonal concerns. A qualified clinician can advise on an appropriate assessment.',
  },
  {
    q: 'Does the clinic provide pregnancy care?',
    a: 'Pregnancy and antenatal care information is presented on this website. Please contact the clinic to confirm the specific services currently available.',
  },
  {
    q: 'Is my enquiry an appointment confirmation?',
    a: 'No. Sending an enquiry does not confirm a booking. The clinic must contact you to confirm the date and time.',
  },
]

export const articles = [
  {
    category: 'MENSTRUAL HEALTH',
    title: 'Understanding changes in your menstrual cycle',
    description: 'A practical introduction to tracking cycle changes and knowing when to seek professional advice.',
    read: '4 min read',
  },
  {
    category: 'PREGNANCY',
    title: 'Preparing for your first antenatal consultation',
    description: 'What to discuss and which previous health records may be useful to bring to your appointment.',
    read: '5 min read',
  },
  {
    category: 'WOMEN’S WELLNESS',
    title: 'A guide to preventive gynaecological care',
    description: 'Why routine conversations about reproductive and general health matter at different life stages.',
    read: '4 min read',
  },
]

export const careValues = [
  {
    title: 'Respectful conversations',
    description: 'A welcoming approach that gives space to ask questions and discuss concerns.',
  },
  {
    title: 'Individual attention',
    description: 'Care discussions should reflect each person’s health history, needs and preferences.',
  },
  {
    title: 'Clear explanations',
    description: 'Understand your options and the next steps through open, accessible communication.',
  },
]
