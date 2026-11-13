import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { services, careValues, articles } from '../data/content'

export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function ServiceGrid({ limit }: { limit?: number }) {
  return <div className="service-grid">{services.slice(0, limit || services.length).map((item, i) => {
    const Icon = item.icon
    return <motion.article className="service-card" key={item.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}>
      <div className={`service-icon ${item.tone}`}><Icon size={25}/></div><h3>{item.title}</h3><p>{item.description}</p><Link to={`/services/${item.slug}`} className="text-link">Explore service <ArrowUpRight size={16}/></Link>
    </motion.article>
  })}</div>
}

export function ValuesSection() {
  const icons = [Heart, ShieldCheck, Sparkles]
  return <div className="values-grid">{careValues.map((v, i) => { const Icon = icons[i]; return <div className="value-card" key={v.title}><span className="value-icon"><Icon size={22}/></span><h3>{v.title}</h3><p>{v.description}</p></div> })}</div>
}

export function ArticleGrid() {
  return <div className="article-grid">{articles.map((a, i) => <article className="article-card" key={a.title}>
    <div className={`article-image article-image-${i+1}`}><span>{a.category}</span></div><div className="article-copy"><small>{a.read}</small><h3>{a.title}</h3><p>{a.description}</p><Link to="/health-library" className="text-link">Read article <ArrowRight size={16}/></Link></div>
  </article>)}</div>
}
