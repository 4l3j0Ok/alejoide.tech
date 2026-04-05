# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**alejoide.tech** es una landing page de servicio técnico de PCs construida con Astro 6.1.3 en modo SSR. La página presenta servicios, trabajos realizados, y un formulario de contacto con integración a Resend para envío de emails.

**Stack:**
- Framework: Astro 6.1.3 (SSR + Node adapter)
- UI/Interactive: React 19 (solo para ContactForm)
- Styling: CSS scoped & CSS Modules
- Icons: astro-icon + Material Design Icons (MDI)
- Email: Resend API
- Fonts: Manrope Variable (body), Cascadia Code (headings/mono)

## Common Commands

```bash
# Development
pnpm dev          # Start dev server (http://localhost:3000)

# Type checking & Building
pnpm build        # Build + type check (required before production)
pnpm astro check  # Check for TypeScript & Astro errors only
pnpm astro sync   # Generate TypeScript types for all Astro modules

# Single tasks
pnpm astro build  # Build without type checking
pnpm preview      # Preview production build locally
```

## Project Structure

```
src/
├── config/           # Configuration & data constants
│   ├── colors.ts     # Design system colors
│   ├── meta.ts       # Page title & description
│   ├── services.ts   # Service cards data
│   └── works.ts      # Work gallery data
├── layouts/
│   ├── Layout.astro  # Root HTML + CSS variables + animations
│   └── Section.astro # Reusable section wrapper
├── components/
│   ├── Hero.astro              # Hero section with CTA
│   ├── Services.astro          # Service cards (8 items)
│   ├── Works.astro             # Work gallery (6 items) with icons
│   ├── Contact.astro           # Contact info + form wrapper
│   ├── ContactForm.tsx         # React form with Resend integration
│   ├── Navbar.astro            # Sticky nav with section links
│   ├── Footer.astro            # Footer with links
│   └── Logo.astro              # ALEJOIDE.TECH branding
├── pages/
│   ├── index.astro             # Home page (composes all sections)
│   └── api/sendEmail.json.ts   # POST endpoint for contact form
├── styles/
│   └── ContactForm.css         # Form input & button styles
└── env.d.ts                    # TypeScript definitions for Astro
```

## Architecture Notes

### Design System
- **Color palette** in `src/config/colors.ts` injected as CSS variables (`--accentColor`, `--textPrimary`, etc.)
- Dark theme: Navy backgrounds (#0c121f, #060912) with Teal accents (#48c7a8)
- Glassmorphism: Semi-transparent surfaces with backdrop blur
- Grid overlay: Fixed 48px grid background at low opacity

### Page Flow
1. **Layout.astro**: Wraps all pages with Navbar, slot, Footer + global styles/animations
2. **index.astro**: Composes Hero → Services → Works → Contact sections
3. Each section uses **Section.astro** layout (kicker + title + body)

### Forms & Email
- **ContactForm.tsx**: React component with status management (idle/sending/sent/error)
- Includes service dropdown (8 predefined services)
- Sends to `/api/sendEmail.json` via FormData
- **sendEmail.json.ts**: Server-side API route using Resend SDK
  - Constructs HTML email with name, email, service, message
  - Returns JSON response for UI feedback

### Animations
- Section reveals: Staggered `translateY + opacity` on page load (0.08s increments)
- Hover effects: Card lifts, icon scales, color transitions (0.2s)
- Smooth scroll behavior enabled globally

## Environment Variables

Create `.env` with:
```
SEND_EMAIL_FROM=onboarding@resend.dev       # From address (Resend domain)
SEND_EMAIL_TO=tu@email.com                  # Where emails arrive
PUBLIC_EMAIL=contacto@alejoide.tech         # Displayed in Contact section
RESEND_API_KEY=re_xxxxx                     # Resend API key
```

**Note:** `PUBLIC_*` vars are exposed to the client. Server-only vars (SEND_EMAIL_*, RESEND_API_KEY) are secrets.

## Key Files to Know

- **src/config/**: Central data sources (services, works, colors) — update these to modify content
- **astro.config.mjs**: SSR mode, integrations (icon, react), env schema
- **src/layouts/Layout.astro**: Global CSS variables, animations, typography settings
- **src/components/ContactForm.tsx**: Only interactive client component (rest is static Astro)

## Deployment

Builds to `dist/` with SSR ready for Node.js. For production:
1. Run `pnpm build` to verify no errors
2. Set environment variables on host
3. Deploy `dist/` folder or use Node adapter for serverless/containers

## Common Tasks

**Modify services or works data:**
- Edit `src/config/services.ts` or `src/config/works.ts`

**Change colors/theme:**
- Update `src/config/colors.ts` (automatically injected via CSS variables)

**Add new section:**
- Create component in `src/components/`, use `Section.astro` layout, add to `index.astro`

**Fix email sending issues:**
- Check `.env` has valid Resend API key
- Verify `SEND_EMAIL_TO` is correct
- Check browser DevTools Network tab for form response
