# 🏡 Real Estate Listings - Next.js Project

## Overview

This is a modern **Next.js real estate application** that allows users to browse, filter, and explore properties. The project leverages **Server-Side Rendering (SSR)**, **Incremental Static Regeneration (ISR)**, and interactive maps using **Leaflet**.

The app includes advanced filtering, contact forms, and responsive design to provide a smooth user experience.

---

## Features

- Browse and search real estate listings
- Filter by **Price**, **Beds/Baths**, **Home Type**, and **Other Criteria**
- View property locations on interactive **Leaflet maps**
- Contact local agents through a form
- Optimized rendering:
  - **SSR**: Dynamic pages that require fresh data on each request
  - **ISR**: Pages updated at intervals for fast static delivery
- Responsive design for desktop and mobile
- Smooth UX with animations and popups

---

## Tech Stack

| Category             | Technology                                             |
| -------------------- | ------------------------------------------------------ |
| Framework            | Next.js (App Router)                                   |
| Rendering            | SSR, ISR, SSG                                          |
| Frontend             | React, Tailwind CSS                                    |
| Maps                 | Leaflet.js                                             |
| State Management     | React useState, Context API                            |
| API Requests         | Axios / Fetch API, React Query (TanStack)              |
| Forms & Validation   | React Hook Form (optional)                             |
| Notifications        | react-hot-toast                                        |
| Hosting / Deployment | Vercel                                                 |
| Icons & Animations   | Lucide Icons, Framer Motion                            |
| Backend / API        | Headless CMS (Strapi / Directus) or custom Node.js API |

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/real-estate-nextjs.git
cd real-estate-nextjs
```

2. Install dependencies :

```bash
npm install
# or
yarn install
```

3. Set up environment variables in .env.local:

```bash
NEXT_PUBLIC_API_BASE_URL=YOUR_API_URL
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=YOUR_SECRET

```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Usage

SSR Pages: Pages like /estate/[id] fetch data on every request for up-to-date listings.

ISR Pages: Pages like / regenerate every n seconds for fast loading.

Leaflet Maps: Property locations are displayed with markers and popups for detailed info.

Filter Forms: Use the top filter bar to dynamically update listings based on criteria.

Contact Agents: Fill the contact form to send inquiries (integrated with React Query & toast notifications).

Deployment

The project is optimized for deployment on Vercel. Connect your GitHub repository to Vercel, and it will automatically handle SSR and ISR builds.
