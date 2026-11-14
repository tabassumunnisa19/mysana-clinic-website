# Mysana Clinic Website

A responsive React + Vite + TypeScript website for **Mysana Clinic**, a women's healthcare and gynaecology clinic brand in Mangaluru, Karnataka.

Production domain: https://mysanaclinic.com

## Included

- Responsive homepage and navigation
- About, doctor, services, pregnancy care, health library, contact and appointment pages
- Individual service detail routes
- WhatsApp / email appointment enquiry handoff
- SEO titles, descriptions, canonical URLs, sitemap and robots.txt
- GitHub Pages workflow
- Custom domain CNAME file
- Mobile responsive layout

## Important before launch

This project contains clearly marked placeholders. Before publishing, replace:
- Clinic address, phone, WhatsApp number and email
- Doctor name, qualifications, registration details, experience and photograph
- Consultation hours and service availability
- Google Maps embed URL
- Social media links
- Medical content and privacy policy after professional review
- Placeholder stock photographs with licensed clinic photography where available

Do not publish fabricated patient testimonials, qualifications, ratings, medical facilities or statistics.

The appointment form does not create a confirmed booking. It hands the enquiry to the configured WhatsApp number or email. GitHub Pages is static hosting and does not securely store patient records.

## Requirements

- Node.js 22 or later
- npm
- Git

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Configure clinic details

Edit:

`src/config/siteConfig.ts`

Set:
- `phone`
- `whatsapp` (international number, digits only; e.g. country code + number)
- `email`
- `address`
- `openingHours`
- `googleMapsEmbedUrl`
- Doctor profile fields

Also update `src/data/content.ts` for service and article copy.

## GitHub repository

1. Create a public repository, for example `mysana-clinic-website`.
2. Push this project to the `main` branch.
3. In repository Settings → Pages, select **GitHub Actions** as the build and deployment source.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

Example:

```bash
git init
git add .
git commit -m "Initial Mysana Clinic website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mysana-clinic-website.git
git push -u origin main
```

## Custom domain: mysanaclinic.com

The `public/CNAME` file is already set to `mysanaclinic.com`.

At your domain registrar:
1. Add the GitHub Pages DNS records recommended by GitHub for the domain.
2. For the apex domain, GitHub Pages commonly uses A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
3. Add an AAAA record only if following GitHub's current documentation.
4. For `www`, configure a CNAME to `YOUR-USERNAME.github.io`.
5. In GitHub repository Settings → Pages → Custom domain, enter `mysanaclinic.com`.
6. Wait for DNS verification, then enable Enforce HTTPS.

DNS values and verification can change; confirm the current instructions in GitHub's official documentation:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Routing note

The site uses React Router and includes a GitHub Pages `404.html` fallback for deep links. Verify direct refreshes on service and content routes after deployment.

## SEO note

React Helmet updates page metadata in the browser. For stronger search-engine coverage of every route, add a prerender/static-generation step before launch. Ensure the generated sitemap only lists live pages.

## Privacy and medical content

Have the privacy notice, consent language and all health content reviewed before launch. Do not collect detailed medical histories, diagnoses, patient documents or other sensitive health information using an unsecured static form.
