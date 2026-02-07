# "We Are Dreamers" Personal Blog — Full Rebuild Plan

## Context

The current site is built on Next.js 11 / React 17 / Material-UI v4 with an Express + MongoDB backend. It has a homepage, about/resume page, and auth system, but the core blog functionality (CRUD, post pages, editor) is unimplemented. The goal is to rebuild as a modern personal blog where Steven can write and publish posts from a browser-based admin UI, with a public-facing blog and resume/about section — all under the "We Are Dreamers" brand.

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | **Next.js 15 (App Router)** | Latest React 19, server components, API routes replace Express |
| Styling | **Tailwind CSS v4** | Fast to build, utility-first, replaces Material-UI |
| Database | **MongoDB + Mongoose** | Keep existing data, familiar to Steven |
| API | **Next.js Route Handlers** | Eliminates separate Express server entirely |
| Auth | **NextAuth.js (Auth.js v5)** | Handles admin login, supports credentials + OAuth if needed later |
| Editor | **TipTap** | Modern, extensible, great React integration, WYSIWYG |
| Images | **Cloudinary** | Already in use, keep existing URLs |
| Deployment | **Vercel** | Native Next.js host, free tier, no Heroku needed |
| Monorepo | **Single Next.js app** | No separate client/server — everything in one Next.js project |

---

## Content to Carry Over from Existing Site

### Branding
- Site name: **"We Are Dreamers"**
- Studio name: **"szcreativestudios"**
- Dark theme with yellow accents

### Colors (from existing Material-UI theme)
- Primary: `#FFF` (White)
- Accent/Secondary: `#FAFB69` (Yellow)
- Dark background: `#171717`
- Light background: `#1E1E1E`
- Card background: `#292929`
- Button gradient: `linear-gradient(#FAFB69, #949501)`
- Subtext: `#818181`

### Fonts
- Primary: **Poppins** (headings and body)
- Fallback: Segoe UI, system fonts

### Static Assets to Copy
- `HeaderLogo.png`, `HeaderLogoicon.png`
- `Logo-black-large.png`, `Logo-white-large.png`, `Logo-white.png`, `logo.png`
- `IMG_20200918_202549.jpg` (profile photo)
- `welcomeImage2.jpg`
- `favicon.ico`, `logo192.png`, `logo512.png`
- `Wen-Jie-Steven-Zhao-Resume.pdf`
- Poppins font files from `client/public/font/`

### Personal Data

**Social Links:**
- Instagram: https://www.instagram.com/swjz_perspective/
- LinkedIn: https://www.linkedin.com/in/wen-jie-steven-zhao-b4212514a/
- GitHub: https://github.com/Swjzhao

**Work Experience (4 entries):**

1. **Crabel Capital Management** — Full Stack Engineer (June 2021 – Present)
   - Tech: TypeScript, React, RPC, HighCharts, Python
   - Analyzed CSV/ROI data with millions of data points
   - Reduced DOM refresh by 90% using React methods and lazy loading
   - Reduced load time by 96% (20s → 0.8s) using efficient algorithms

2. **Dataraction Inc** — Chief Technology Officer (Aug 2020 – May 2021)
   - Tech: JavaScript, React, Next.js, LoopBack, Node.js, GraphQL, PostgreSQL, MongoDB, Kubernetes, OpenShift, WebSocket, Agora
   - 1500+ signups, 100 live viewers per event
   - $5000/month revenue through client contracts
   - Hired and led 10 developers using Agile
   - Built SaaS and live streaming platform

3. **Google** — Software Engineering Intern (May 2020 – Aug 2020)
   - Tech: Java, TypeScript, JavaScript, RPC
   - Google Travel feature development

4. **Google** — Software Engineering Intern (May 2019 – Aug 2019)
   - Tech: Objective C, JavaScript, iOS
   - Gmail iOS feature development

**Skills (3 tiers):**
- Expert: Java, JavaScript, HTML/CSS/PHP, React, Next.js, Node.js, Objective C, MongoDB, Git, Flutter, Firebase
- Advanced: Python, Django, Objective C, Swift, PostgreSQL, MySQL, WebSocket, RPC
- Intermediate: C++, C, Docker, Kubernetes, OpenShift, SpringBoot, TensorFlow, PyTorch, MATLAB

**About/Bio Text:**
- "Hi! I'm Steven"
- Typing animation roles: Student → Dreamer → Entrepreneur
- Education: University of Toronto — Computer Engineering (Grad April 2022)

**Footer Tagline:**
- "This site is for contenders in software who aspire to become exceptional. I aim to use this site to share my own experiences and road from 2x Google intern to CTO."

**Homepage Hero:**
- Heading: "We Are Dreamers"
- Tagline: "A community for young innovators, enthusiasts, entrepreneurs who think mediocre is not enough"

---

## Project Structure (New)

```
stevenwjzhao/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx                # Homepage (hero + latest posts by category)
│   ├── globals.css             # Tailwind imports + custom styles
│   ├── about/
│   │   └── page.tsx            # About/resume page
│   ├── blog/
│   │   ├── page.tsx            # All posts listing with category filter
│   │   └── [slug]/
│   │       └── page.tsx        # Individual post page
│   ├── admin/
│   │   ├── page.tsx            # Admin dashboard (list/manage posts)
│   │   ├── login/
│   │   │   └── page.tsx        # Admin login page
│   │   └── editor/
│   │       ├── page.tsx        # New post editor
│   │       └── [id]/
│   │           └── page.tsx    # Edit existing post
│   └── api/
│       ├── auth/[...nextauth]/
│       │   └── route.ts        # NextAuth handler
│       ├── posts/
│       │   ├── route.ts        # GET (list) / POST (create)
│       │   └── [id]/
│       │       └── route.ts    # GET / PATCH / DELETE single post
│       └── upload/
│           └── route.ts        # Image upload to Cloudinary
├── components/
│   ├── nav/
│   │   └── Navbar.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── CategorySection.tsx
│   │   └── PostCard.tsx
│   ├── about/
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   └── SkillsSection.tsx
│   ├── blog/
│   │   ├── PostList.tsx
│   │   └── PostContent.tsx
│   ├── admin/
│   │   ├── PostEditor.tsx      # TipTap rich text editor
│   │   ├── PostForm.tsx        # Title, description, category, thumbnail
│   │   └── PostTable.tsx       # Admin post management table
│   └── ui/                     # Shared UI primitives
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Modal.tsx
├── lib/
│   ├── db.ts                   # MongoDB connection
│   ├── auth.ts                 # NextAuth config
│   └── cloudinary.ts           # Cloudinary upload helper
├── models/
│   ├── User.ts                 # Mongoose user model (simplified for admin)
│   ├── Post.ts                 # Blog post model
│   └── Category.ts             # Category model
├── data/
│   ├── experience.ts           # Work experience data
│   ├── skills.ts               # Skills data
│   └── socials.ts              # Social media links
├── public/
│   ├── fonts/                  # Poppins font files (carried over)
│   ├── images/                 # Logo variants, profile photos
│   ├── Wen-Jie-Steven-Zhao-Resume.pdf
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── .env.local                  # MongoDB URI, NextAuth secret, Cloudinary keys
```

---

## Implementation Phases

### Phase 1: Project Scaffold
**Goal:** Clean slate Next.js 15 project with Tailwind CSS configured.

**Tasks:**
- [ ] Back up existing `client/` and `server/` directories (move to `_archive/`)
- [ ] Initialize Next.js 15 project at root with App Router, TypeScript, Tailwind CSS v4
- [ ] Set up `tailwind.config.ts` with custom theme:
  - Dark background: `#171717`
  - Yellow accent: `#FAFB69`
  - Card bg: `#292929`
  - Light bg: `#1E1E1E`
  - Subtext: `#818181`
  - Button gradient colors
- [ ] Set up root layout (`app/layout.tsx`) with Poppins font (Google Fonts via `next/font`)
- [ ] Copy static assets from `client/public/` → `public/`:
  - All logo PNG files → `public/images/`
  - Profile photo → `public/images/`
  - Resume PDF → `public/`
  - Favicon → `public/`
  - Font files → `public/fonts/` (if self-hosting, otherwise use next/font)
- [ ] Configure `next.config.ts` (image domains for Cloudinary, etc.)
- [ ] Create `.env.local` template with required variables:
  - `MONGODB_URI`
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
- [ ] Verify `npm run dev` starts clean on localhost:3000

**Deliverable:** Blank Next.js app loads with dark background, Poppins font applied.

---

### Phase 2: Shared Components + Layout
**Goal:** Navbar, footer, and data files that wrap all pages.

**Tasks:**
- [ ] Create `data/experience.ts` — 4 work experience entries (from existing WorkExpSection)
- [ ] Create `data/skills.ts` — 3-tier skill data (from existing SkillsSection)
- [ ] Create `data/socials.ts` — Instagram, LinkedIn, GitHub links with icons
- [ ] Build `components/nav/Navbar.tsx`:
  - Logo (white logo image on left)
  - Navigation links: Home, About, Blog
  - Dark theme (`#171717` bg)
  - Mobile hamburger menu / drawer
  - Sticky/fixed position
  - Transparent mode on homepage (solid on scroll)
- [ ] Build `components/footer/Footer.tsx`:
  - Logo + tagline text
  - Social media icon links (Instagram, LinkedIn, GitHub)
  - Copyright: "We Are Still Dreamers © szcreativestudios"
  - Dark theme styling
- [ ] Wire navbar + footer into root `app/layout.tsx`
- [ ] Create shared UI primitives:
  - `components/ui/Button.tsx` — primary (yellow gradient) and secondary variants
  - `components/ui/Input.tsx` — styled text input
  - `components/ui/Modal.tsx` — reusable modal component

**Deliverable:** Every page shows navbar at top, footer at bottom. Data files ready for use.

---

### Phase 3: Public Pages (Static Content)
**Goal:** Homepage and About page with all existing content, no database needed yet.

**Tasks:**

#### Homepage (`app/page.tsx`)
- [ ] Build `components/home/HeroSection.tsx`:
  - "We Are Dreamers" large heading
  - Tagline: "A community for young innovators, enthusiasts, entrepreneurs who think mediocre is not enough"
  - CTA button (e.g., "Read the Blog" → /blog)
  - Full-viewport dark section
- [ ] Build `components/home/CategorySection.tsx`:
  - Section for each category (Tech, Life, Books)
  - Category heading with "View All" link
  - Grid of `PostCard` components
  - Initially renders placeholder/empty state ("Posts coming soon")
- [ ] Build `components/home/PostCard.tsx`:
  - Thumbnail image
  - Title, description excerpt
  - Date, category badge
  - Hover effect, click → `/blog/[slug]`
  - Dark card styling (`#292929` bg)
- [ ] Build about preview section on homepage:
  - Brief intro text + profile photo
  - "Learn More" button → /about

#### About Page (`app/about/page.tsx`)
- [ ] Build `components/about/HeroSection.tsx`:
  - "Hi! I'm Steven" heading
  - Typing animation effect: Student → Dreamer → Entrepreneur
  - Education info: University of Toronto — Computer Engineering
  - Profile photo
  - Social media icons
  - "Read My Blogs" CTA
- [ ] Build `components/about/ExperienceTimeline.tsx`:
  - Vertical timeline layout (desktop)
  - 4 work experience entries from `data/experience.ts`
  - Each entry: company, role, dates, tech stack tags, achievements list
  - Company logos/icons
  - Resume download button
  - Mobile-responsive version (stacked cards)
- [ ] Build `components/about/SkillsSection.tsx`:
  - 3 cards: Expert, Advanced, Intermediate
  - Skill tags/chips in each card
  - Visual rating indicators
- [ ] Resume download button linking to `/Wen-Jie-Steven-Zhao-Resume.pdf`

**Deliverable:** Homepage and About page fully render with all existing content. No database required.

---

### Phase 4: Database + API
**Goal:** MongoDB connected, models created, REST API working.

**Tasks:**

#### Database Setup
- [ ] Create `lib/db.ts` — MongoDB connection singleton (cached for serverless)
- [ ] Create `models/User.ts` — Simplified admin user model:
  ```
  { name, email, password (hashed), role, timestamps }
  ```
- [ ] Create `models/Post.ts` — Blog post model:
  ```
  { title, slug (unique, auto-generated), content (HTML from TipTap),
    description, thumbnail, category (ref), user (ref),
    published (boolean), publishedAt, timestamps }
  ```
- [ ] Create `models/Category.ts` — Category model:
  ```
  { name (unique), slug, timestamps }
  ```

#### API Route Handlers
- [ ] `app/api/posts/route.ts`:
  - `GET` — List posts (query: category, published, page, limit)
  - `POST` — Create post (auth required, auto-generate slug from title)
- [ ] `app/api/posts/[id]/route.ts`:
  - `GET` — Get single post by ID or slug
  - `PATCH` — Update post (auth required)
  - `DELETE` — Delete post (auth required)
- [ ] `app/api/upload/route.ts`:
  - `POST` — Accept image file, upload to Cloudinary, return URL
- [ ] Create `lib/cloudinary.ts` — Cloudinary upload helper

#### Seeding
- [ ] Create seed script or API to create default categories: Tech, Life, Books
- [ ] Create initial admin user (or handle via first-run setup)

**Deliverable:** API endpoints work via curl/Postman. Posts can be created, read, updated, deleted.

---

### Phase 5: Auth + Admin
**Goal:** Admin can log in and manage posts through a browser UI.

**Tasks:**

#### Authentication
- [ ] Create `lib/auth.ts` — NextAuth.js v5 configuration:
  - Credentials provider (email + password)
  - Session strategy: JWT
  - Callbacks for session/token
- [ ] Create `app/api/auth/[...nextauth]/route.ts` — NextAuth route handler
- [ ] Create middleware (`middleware.ts`) to protect `/admin/*` routes:
  - Redirect unauthenticated users to `/admin/login`
  - Allow `/admin/login` without auth

#### Admin Login
- [ ] Build `app/admin/login/page.tsx`:
  - Email + password form
  - Error handling (invalid credentials)
  - Redirect to `/admin` on success
  - Dark theme styling consistent with site

#### Admin Dashboard
- [ ] Build `app/admin/page.tsx`:
  - List all posts (published + drafts)
  - `components/admin/PostTable.tsx`:
    - Table with columns: Title, Category, Status (Draft/Published), Date, Actions
    - Edit button → `/admin/editor/[id]`
    - Delete button with confirmation modal
    - "New Post" button → `/admin/editor`
  - Post count stats at top

#### Post Editor
- [ ] Install TipTap packages:
  - `@tiptap/react`, `@tiptap/starter-kit`
  - `@tiptap/extension-image`, `@tiptap/extension-link`
  - `@tiptap/extension-placeholder`, `@tiptap/extension-code-block-lowlight`
- [ ] Build `components/admin/PostEditor.tsx` — TipTap WYSIWYG editor:
  - Formatting toolbar: Bold, Italic, Headings (H1-H3), Lists (ordered/unordered), Code block, Blockquote, Link, Image
  - Image insertion via Cloudinary upload
  - Placeholder text
  - Dark theme editor styling
- [ ] Build `components/admin/PostForm.tsx`:
  - Title input
  - Description textarea (for SEO/cards)
  - Category dropdown (from database categories)
  - Thumbnail upload (Cloudinary) with preview
  - Published/Draft toggle
  - Save button (create or update)
- [ ] Build `app/admin/editor/page.tsx` — New post:
  - PostForm + PostEditor
  - Save → POST `/api/posts`
  - Redirect to dashboard on success
- [ ] Build `app/admin/editor/[id]/page.tsx` — Edit post:
  - Load existing post data
  - PostForm + PostEditor pre-filled
  - Save → PATCH `/api/posts/[id]`

**Deliverable:** Admin can log in, create/edit/delete posts with rich text, upload images, toggle publish status.

---

### Phase 6: Blog Public Pages (Dynamic)
**Goal:** Public blog listing and individual post pages pulling from MongoDB.

**Tasks:**

#### Blog Listing
- [ ] Build `app/blog/page.tsx`:
  - Heading: "Blog" or "All Posts"
  - Category filter tabs (All, Tech, Life, Books)
  - `components/blog/PostList.tsx`:
    - Grid/list of `PostCard` components
    - Only show published posts
    - Pagination or "Load More"
    - Empty state for no posts
  - Server-side data fetching from MongoDB

#### Individual Post Page
- [ ] Build `app/blog/[slug]/page.tsx`:
  - `components/blog/PostContent.tsx`:
    - Post title (large heading)
    - Published date, category badge
    - Thumbnail hero image
    - Rich text content rendered from TipTap HTML
    - Prose styling (readable typography, proper spacing)
  - Dynamic metadata for SEO (title, description, Open Graph)
  - "Back to Blog" link

#### Homepage Integration
- [ ] Wire `components/home/CategorySection.tsx` to fetch real posts from MongoDB
  - Show latest 3 posts per category
  - "View All" links to `/blog?category=tech` etc.
  - Graceful empty state if no posts in a category

**Deliverable:** Blog listing shows all published posts. Individual post pages render full rich text content. Homepage shows latest posts per category.

---

### Phase 7: Polish + Deploy
**Goal:** Production-ready, responsive, SEO-optimized, deployed to Vercel.

**Tasks:**

#### Responsive Design
- [ ] Mobile navbar: hamburger menu → slide-out drawer
- [ ] Homepage: stack sections vertically on mobile
- [ ] About page: timeline → stacked cards on mobile
- [ ] Blog listing: single column on mobile
- [ ] Post page: full-width content on mobile
- [ ] Admin: responsive table (cards on mobile)
- [ ] Test breakpoints: 320px, 375px, 768px, 1024px, 1440px

#### SEO & Metadata
- [ ] Root layout metadata: site title, description, Open Graph defaults
- [ ] Homepage: specific OG tags
- [ ] About page: specific OG tags
- [ ] Blog listing: OG tags
- [ ] Individual posts: dynamic OG tags (title, description, thumbnail as og:image)
- [ ] Twitter card meta tags
- [ ] `robots.txt` and `sitemap.xml` (Next.js built-in)
- [ ] Canonical URLs

#### Loading & Error States
- [ ] `app/loading.tsx` — Global loading skeleton
- [ ] `app/error.tsx` — Global error boundary
- [ ] `app/not-found.tsx` — Custom 404 page
- [ ] Blog loading skeletons (PostCard placeholders)
- [ ] Admin loading states
- [ ] Form submission loading indicators

#### Performance
- [ ] Image optimization with `next/image` (Cloudinary loader)
- [ ] Lazy loading for below-fold content
- [ ] Font optimization (preload Poppins)

#### Deployment
- [ ] Connect GitHub repo to Vercel
- [ ] Set environment variables on Vercel:
  - `MONGODB_URI` (MongoDB Atlas connection string)
  - `NEXTAUTH_SECRET` (generate random secret)
  - `NEXTAUTH_URL` (production URL)
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
- [ ] Configure custom domain (if applicable)
- [ ] Verify all routes work in production
- [ ] Test admin flow end-to-end in production

**Deliverable:** Site live on Vercel, all features working, responsive, SEO-ready.

---

## Key Libraries

```
next@15               # Framework
react@19              # UI
tailwindcss@4         # Styling
mongoose@8            # MongoDB ODM
next-auth@5           # Authentication (Auth.js v5)
@tiptap/react         # Rich text editor
@tiptap/starter-kit   # TipTap base extensions
@tiptap/extension-image
@tiptap/extension-link
@tiptap/extension-placeholder
@tiptap/extension-code-block-lowlight
cloudinary            # Image upload
bcryptjs              # Password hashing
slugify               # URL slug generation
```

---

## Existing Models (Reference)

### Current User Model
```typescript
{
  name: String (max 20 chars, required),
  email: String (unique, required),
  signInMethod: String (default: 'email'),
  password: String (required),
  avatar: String,
  role: Number (0: reader, 1: writer, 2: manager, 3: admin),
  verified: Boolean (default: false),
  timestamps: true
}
```

### Current Post Model
```typescript
{
  user: ObjectId (ref: User),
  title: String (5-50 chars, required),
  content: String (min 2000 chars, required),
  description: String (max 200 chars, required),
  thumbnail: String (required),
  category: ObjectId (ref: Category),
  timestamps: true
}
```

### Current Category Model
```typescript
{
  name: String (unique, required, max 50 chars),
  timestamps: true
}
```

---

## Environment Variables Template

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dreamers?retryWrites=true&w=majority

# NextAuth
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=http://localhost:3000

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

---

## Verification Checklist

1. [ ] `npm run dev` — site loads on localhost:3000
2. [ ] Homepage renders hero, category sections, about preview
3. [ ] About page shows experience timeline, skills, resume download
4. [ ] `/admin/login` — admin can log in with credentials
5. [ ] `/admin/editor` — create a post with rich text editor, upload thumbnail, select category, publish
6. [ ] `/admin` — dashboard shows published posts, can edit/delete
7. [ ] `/blog` — lists all published posts with category filter
8. [ ] `/blog/[slug]` — renders full post with rich text content
9. [ ] Homepage category sections pull real posts from database
10. [ ] Responsive on mobile/tablet
11. [ ] Deploy to Vercel, verify all routes work in production
