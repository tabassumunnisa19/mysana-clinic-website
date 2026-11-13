import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../config/siteConfig'

type Props = { title: string; description: string; path?: string }

export default function SEO({ title, description, path = '' }: Props) {
  const url = `${siteConfig.domain}${path}`
  return (
    <Helmet>
      <title>{title} | {siteConfig.brandName}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={`${title} | ${siteConfig.brandName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
