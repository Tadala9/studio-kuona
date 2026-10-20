# Studio Kuona website: build brief

This file is the brief for building the Studio Kuona portfolio website. Read all of it before writing any code. The owner, Tadala (Tad) Bowazi, is a designer, not a developer: explain anything technical in plain language, work in small steps, and show her the result after each step.

## 1. The project

- **What:** a portfolio website for Studio Kuona, a commercial and residential interior and spatial design studio rooted in African design storytelling.
- **Who it's for:** prospective clients first (homeowners, hospitality and commercial clients). It should feel like an established, calm, editorial studio.
- **Domain:** studiokuona.com (registered at Namecheap)
- **Contact email:** hello@studiokuona.com
- **Instagram:** @studiokuona (https://instagram.com/studiokuona)
- **Tagline:** Design that sees beyond.

## 2. Tech approach

- Build a **simple static site** with **Astro**. Put each project in its own Markdown file (a content collection), so adding a project later means adding one file and a folder of images.
- No CMS, no database, no login. Keep dependencies minimal.
- Host on **Vercel** (free tier) from a GitHub repository called `studio-kuona`. Tad already uses Vercel for another site.
- Optimise images with Astro's image tools: WebP output, responsive sizes and lazy loading below the fold. The source images are in `/images`.
- **Mobile first.** Most visitors will come from Instagram on a phone. Test every page at phone width (390px) and desktop width (1440px).
- **Accessible:** real links and buttons, alt text on every image (provided below), visible focus states, text contrast of at least 4.5:1.
- Add a page title and meta description for each page, plus an Open Graph image (use the Lakeshore House hero) so links look good when shared.

## 3. Brand

### Colours
| Name | Hex | Use |
|---|---|---|
| Off-white | `#F4F1EC` | Page background |
| Sand | `#E8E0D4` | Services band, placeholders |
| Near-black | `#1F1F1F` | Text, primary buttons, contact band, footer |
| Charcoal | `#2E2E2E` | Secondary dark |
| Taupe (text) | `#6F6354` | Small labels, captions, eyebrows (a darker taupe so it passes contrast) |
| Taupe (light) | `#A69886` | Decorative only, never for text |
| Rule line | `#C9BFB2` | Thin dividers |
| Footer text | `#BDB3A6` | Text on the dark footer |

### Typography
- **One typeface for everything: Jost** (Google Fonts, weights 400 and 500). Tad chose an all-sans look.
- Jost stands in for the brand's heading font, **Codec**. If Tad later buys a Codec web licence, swap it in for headings only.
- Small labels (eyebrows, nav, tags, captions): Jost, uppercase, 11–13px, letter-spacing 0.12–0.18em.
- Large statements: Jost 400, generous line-height. Big type sizes were first drafted for a serif, so tune the scale for Jost so it doesn't feel heavy (roughly hero 56–64px desktop / 40px mobile, statements 30–34px, body 17–18px).

### Logo
- A stacked wordmark: **STUDIO** on the first line, **KUONA** on the second. In the header, render it as text in Jost 500 (it's crisp and matches the logo).
- Logo image files are in `/brand` (cream, charcoal and black backgrounds). `brand-board.png` shows the original colour and type board.

### Feel
Calm, warm, editorial. Lots of white space, large images, thin rules, no rounded "app" styling, no gradients, no emoji, no stock icons. Subtle hover states only (e.g. an image fades slightly).

### Writing rules
- British English spelling (visualisation, colour, centre).
- The studio is described in the **third person** ("Studio Kuona…", "she…").
- Use the copy below exactly as written. Ask Tad before changing any wording.

## 4. Site map

```
/                        Homepage
/work/lakeshore-house
/work/kweza-studio-residences
/work/chatham-house
/work/the-hill-bathroom
```

Nav links: WORK (homepage #work), STUDIO (homepage #studio), CONTACT (homepage #contact). On every page, the logo links home.

## 5. Homepage, top to bottom

1. **Header:** stacked wordmark on the left; nav on the right (it wraps on mobile; no hamburger menu needed for three links).
2. **Hero text**
   - Eyebrow: `INTERIOR & SPATIAL DESIGN · LONDON`
   - Headline: **Interiors rooted in African design storytelling.**
   - Buttons: `VIEW WORK` (solid near-black, links to #work) and `START A PROJECT` (outlined, links to #contact). Minimum 48px tall.
3. **Hero image:** full-bleed, about 760px tall on desktop and 420px on mobile, `lakeshore-lounge-1.jpg`. The caption row below it reads `LAKESHORE HOUSE · LAKE MALAWI` on the left and `VISUALISATION` on the right.
4. **Intro statement** (large text):
   > Studio Kuona designs spaces that carry a story. We draw on African craft, pattern and vernacular building, and translate them into calm, contemporary interiors for hospitality, workplaces and homes.
5. **Selected work** (`id="work"`): a thin top rule with `SELECTED WORK` on the left and `04` on the right. A 2-column grid on desktop, 1 column on mobile. Each card shows a 4:3 image, the name (uppercase), a one-line description and a status tag, and links to its project page.
   | Order | Name | Line | Tag | Card image |
   |---|---|---|---|---|
   | 1 | LAKESHORE HOUSE | Private lakeside residence, Lake Malawi | DESIGN PROPOSAL · 2025 | lakeshore-lounge-2.jpg |
   | 2 | KWEZA STUDIO RESIDENCES | Artist residency studios, Lilongwe, Malawi | DESIGN PROPOSAL · 2024 | kweza-studio.jpg |
   | 3 | CHATHAM HOUSE | Café and co-working in a Grade II* listed building, Rochester | ACADEMIC PROJECT · 2023 | chatham-lounge.jpg |
   | 4 | THE HILL BATHROOM | Full bathroom renovation, Essex | COMPLETED · 2026 | hill-vanity.jpg |
6. **Services** (sand background, 4 columns on desktop, 2 on mobile, numbered 01–04):
   - **01 Interior design:** Concept to specification: materials, furniture, lighting and art, chosen to tell one story.
   - **02 Spatial planning:** Layouts that make the most of a room, from compact studios to reworked bathrooms.
   - **03 Heritage & adaptive reuse:** New uses for historic buildings, designed to respect what is already there.
   - **04 3D visualisation:** Photoreal renders so you can see the space, and decide, before anything is built.
7. **The studio** (`id="studio"`): 2 columns (1 on mobile), with the photo on the left and both columns aligned to the top.
   - Photo: `tadala-bowazi.jpg`, 4:5 crop, centred. Caption: `TADALA BOWAZI · FOUNDER`
   - Label: `THE STUDIO`
   - Large line: **Kuona means "to see" in Chichewa. It is also the studio's promise: design that sees beyond.**
   - Body:
     > Studio Kuona was founded by Tadala Bowazi, a Malawian-born, British designer who grew up between Malawi, South Africa and the UK, and that mix of places shapes how she designs.
     >
     > Trained first in architecture and then in spatial and interior design, she reads a building before she reads a room. She studied Spatial and Interior Design at the University of Kent and has designed for clients in the UK and Malawi.
     >
     > Her work spans homes, hospitality and commercial spaces, and is drawn to what others have written off: listed buildings waiting for a new life, and design histories the textbooks skipped. Every project starts with the people who will actually use it, because access can't be retrofitted.
8. **Contact** (`id="contact"`, near-black band, off-white text):
   - Heading: **Have a space with a story to tell?**
   - Links: `HELLO@STUDIOKUONA.COM` (mailto:hello@studiokuona.com) and `@STUDIOKUONA` (Instagram).
9. **Footer** (near-black): `© 2026 STUDIO KUONA` on the left and `DESIGN THAT SEES BEYOND` on the right.

## 6. Project page template

Every project page uses the same layout:

1. Header (as on the homepage)
2. `← ALL WORK` link back to the homepage's #work section
3. Eyebrow (taupe, uppercase) → project name as a large heading → meta line (uppercase)
4. Hero image (or the before/after pair for The Hill Bathroom)
5. Info section: a 12-column grid. On the left (4 columns) is a details list: label / value pairs, each with a thin top rule, the first rule darker. On the right (8 columns) is a large lead line followed by the body paragraphs. It stacks on mobile.
6. Gallery
7. Optional credit line (small, taupe, uppercase)
8. "Next project" link: a big name with an arrow plus a small thumbnail. The order loops: Lakeshore → Kweza → Chatham → Hill → Lakeshore.
9. Footer: `© 2026 STUDIO KUONA` and `@STUDIOKUONA`

**Image labels:** every render gets a small off-white `VISUALISATION` tag in its top-left corner. Real photos have no tag. The Hill Bathroom's pair uses `BEFORE` (off-white tag) and `AFTER` (near-black tag).

## 7. Projects (exact copy)

### 7.1 Lakeshore House
- **Slug:** lakeshore-house
- **Eyebrow:** PRIVATE LAKESIDE RESIDENCE · LAKE MALAWI
- **Meta line:** LOUNGE REFURBISHMENT · DESIGN PROPOSAL · 2025
- **Hero:** `lakeshore-setting.jpg` (real photo, no tag). Caption below: `THE SETTING · LAKE MALAWI`. Alt: "The lakeshore setting: beach, fishing canoes and hills behind"
- **Details:** Location: Lake Malawi · Type: Private residence · Lounge · Status: Design proposal, implementation planned · Year: 2025 · Role: Concept, spatial layout, material and furniture selection, artwork curation, 3D visualisation
- **Lead:** A lakeside lounge reimagined around the place it sits in.
- **Body:**
  > Exposed timber beams and a woven reed ceiling draw on the region's vernacular building traditions, while full-height linen sheers soften the light coming off Lake Malawi.
  >
  > The room is anchored by a pair of large-scale afroprint panels of fish imagery, chosen as a nod to the lake's famous cichlids, which are as much a part of local identity as the water itself. Around them, the palette stays quiet and tactile: textured stone-coloured upholstery, a woven jute rug, marble and brushed brass lighting, with moss and sage accents picking up the garden outside.
- **Gallery** (full width, both tagged VISUALISATION):
  - `lakeshore-lounge-1.jpg`, alt: "Lounge view towards the console and media wall under the timber roof"
  - `lakeshore-lounge-2.jpg`, alt: "Seating area with marble coffee table, jute rug and fish-motif panels"
- **Credit line:** VISUALISATION: D5 RENDER, AI-ASSISTED POST-PRODUCTION
- **Privacy:** this is a private family property. Never use the names "Kuka Cottage" or "Namaso Bay", and never link to its booking or Facebook pages.

### 7.2 Kweza Studio Residences
- **Slug:** kweza-studio-residences
- **Eyebrow:** ARTIST RESIDENCY STUDIOS · LILONGWE, MALAWI
- **Meta line:** HOSPITALITY · DESIGN PROPOSAL · 2024
- **Hero:** `kweza-studio.jpg`, tagged VISUALISATION. Alt: "Studio with raised timber sleeping platform, deep red feature walls and a wire pendant"
- **Details:** Location: Lilongwe, Malawi · Client: Kweza · Type: Hospitality · Short-stay studios · Status: Design proposal · Year: 2024 · Role: Concept, spatial planning, material and furniture selection, 3D visualisation
- **Lead:** A creative home from the first night, not a generic rental.
- **Body:**
  > Kweza, a creative events management agency in Lilongwe, needed short-stay accommodation for the artists and creatives it brings to the city. The proposal adds four compact studios alongside Kweza's existing building.
  >
  > A raised timber platform zones the sleeping area from the living space without walls, keeping each studio open and flexible. Deep red feature walls carry contemporary African portrait artwork, balanced by rattan, natural timber and woven textures. In the kitchenette, a geometric triangle-tile splashback pairs with oxblood cabinetry and warm wood. The earth-toned palette and organic materials suit Lilongwe's climate, and Kweza's own identity runs through the space, right down to the cushions.
- **Gallery** (2 columns, square crops, both tagged VISUALISATION):
  - `kweza-bed.jpg`, alt: "Bed against a deep red wall with portrait artwork and rattan headboard" (**low resolution: ask Tad for the original render**)
  - `kweza-kitchen.jpg`, alt: "Kitchenette with triangle-tile splashback and oxblood cabinets"
- **Note:** don't mention any family connection to the client.

### 7.3 Chatham House
- **Slug:** chatham-house
- **Eyebrow:** ADAPTIVE REUSE · ROCHESTER, KENT
- **Meta line:** CAFÉ AND CO-WORKING · ACADEMIC PROJECT · 2023
- **Hero:** `chatham-lounge.jpg`, tagged VISUALISATION. Alt: "Lounge with scenic mural wallpaper, olive banquette, walnut table and original fireplace"
- **Details:** Location: Rochester, Kent · Building: Grade II* listed Georgian mansion · Type: Café and co-working · Status: Academic project, University of Kent · Year: 2023 · Role: Concept, heritage-sensitive spatial planning, material and furniture selection, visualisation
- **Lead:** Heritage kept intact, and made useful again.
- **Body:**
  > An adaptive reuse of a Grade II* listed Georgian mansion, reimagined as a café and flexible co-working space. The approach was led by the building itself: original sash windows, marble fireplaces and neoclassical mouldings are retained and celebrated, with new interventions designed to sit lightly alongside them.
  >
  > A scenic mural wallpaper and sculptural walnut table give the main lounge the feel of a private members' room, while olive upholstery and soft neutrals pick up the tones of the existing joinery. In the café, a curved leather banquette and marble pedestal table create an intimate dining booth framed by the original window.
- **Gallery** (full width, tagged VISUALISATION): `chatham-booth.jpg`, alt: "Café booth with curved leather banquette and marble pedestal table beneath a sash window"
- **Credit line:** VISUALISATIONS INCLUDE AI-ASSISTED POST-PRODUCTION
- **Note:** no "before" photo for now. Don't use the Historic England archive photo. Tad will supply her own before photo later.

### 7.4 The Hill Bathroom
- **Slug:** the-hill-bathroom
- **Eyebrow:** PRIVATE RESIDENCE · ESSEX
- **Meta line:** FULL BATHROOM RENOVATION · COMPLETED · 2026
- **Hero:** a 2-column before/after pair (stacked on mobile), 3:4 crops:
  - `hill-before.jpg`, tag BEFORE, alt: "Before: beige mosaic tiles, brass taps and a bath with a shower curtain"
  - `hill-after.jpg`, tag AFTER, alt: "After: marble-effect porcelain walls, black-trimmed window reveal, wall-hung WC and backlit mirror"
- **Details:** Location: Essex · Type: Private residence · Bathroom · Status: Completed · Year: 2026 · Role: Layout design, plans and sections, material and fixture selection
- **Lead:** A family bathroom, redrawn from the floor up.
- **Body:**
  > A complete reworking of a family bathroom. The original bathtub was removed and the layout redrawn around a walk-in shower, freeing up floor space and giving the room a clearer flow from the door to the basin, WC and shower.
  >
  > Large-format marble-effect porcelain wraps the walls and floor, so the room reads as one continuous surface. Matt black fixtures and fine black edge trims run through it as a deliberate counterpoint: around the recessed shower niche, the boxed-in cistern, the rainfall shower and the tap. A wall-hung vanity and backlit mirrors keep the floor clear and the light soft.
- **Gallery** (3 columns on desktop, 1 on mobile, 3:4 crops, no tags since these are real photos):
  - `hill-vanity.jpg`, alt: "Wall-hung vanity with matt black tap, backlit mirror and mirrored cabinet"
  - `hill-niche.jpg`, alt: "Walk-in shower with recessed niche edged in black trim and a matt black rainfall shower"
  - `hill-basin.jpg`, alt: "Basin with matt black tap beneath a backlit mirror"
- **Privacy:** never show the street address. "The Hill" is deliberately vague.

## 8. Things to leave out (for now)

- The Dock Hub project (removed for now)
- Any Keith Haring imagery
- Personal age or dates of moving countries
- A close-up of the Lakeshore fish panels
- Contact forms, blogs, shops or newsletter sign-ups. The email link is enough for launch.

## 9. Launch steps (guide Tad through these one at a time)

1. Create the GitHub repository `studio-kuona` and push the site.
2. Import the repository into Vercel and deploy it. Check the preview URL on her phone.
3. In Vercel, add the custom domain studiokuona.com (and www.studiokuona.com).
4. In Namecheap, update the DNS records Vercel asks for. Explain each record in plain words, and keep the email-forwarding records Namecheap set up for hello@studiokuona.com intact.
5. Once it's live, test the email link, every project link, and the site on a phone.

## 10. Later (not part of this build)

- Swap in Codec for headings if a licence is bought
- Add Tad's own "before" photo to Chatham House
- Replace `kweza-bed.jpg` with a higher-resolution render
- More projects: one new Markdown file plus images each
