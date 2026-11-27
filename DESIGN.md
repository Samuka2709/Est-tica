---
name: Seiva Estética Avançada
description: Premium aesthetic-clinic landing in peach paper, porcelain and cocoa, with a Playfair serif voice and arch-topped photography; built to be re-skinned per client.
colors:
  pessego: "#EAB494"
  porcelana: "#F5EEE8"
  areia: "#ECDDD1"
  linho: "#FCF8F4"
  linha: "#DCCBBE"
  taupe: "#8A6A57"
  taupe-escuro: "#5A4335"
  cacau: "#231B17"
  cacau-2: "#352923"
  texto: "#3A2E28"
  texto-2: "#6B5B52"
  claro: "#F5EDE6"
  claro-2: "#CBBAAD"
typography:
  display:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  display-hero:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "clamp(3rem, min(5.1vw, 10vh), 5.4rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  display-large:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.4vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1.1
  title-sm:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.2
  title-xs:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.25
  numeral:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "2.2rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-light:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.65
  label-button:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
  label-nav:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.16em"
  label-field:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.14em"
  wordmark:
    fontFamily: "Playfair Display, Didot, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  hairline: "2px"
  raio: "4px"
  pill: "999px"
  round: "50%"
spacing:
  margem: "clamp(16px, 4.5vw, 72px)"
  gap: "clamp(16px, 2vw, 32px)"
  secao: "clamp(72px, 9vw, 140px)"
  header: "76px"
  header-mobile: "64px"
  container: "1560px"
  container-wide: "1720px"
components:
  button-primary:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.claro}"
    typography: "{typography.label-button}"
    rounded: "{rounded.hairline}"
    padding: "0 2em"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.taupe-escuro}"
    textColor: "{colors.claro}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cacau}"
    typography: "{typography.label-button}"
    rounded: "{rounded.hairline}"
    padding: "0 2em"
    height: "54px"
  button-outline-hover:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.claro}"
  button-light:
    backgroundColor: "{colors.porcelana}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.hairline}"
    height: "54px"
  button-light-hover:
    backgroundColor: "{colors.linho}"
  button-small:
    padding: "0 1.3em"
    height: "42px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  chip-selected:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.claro}"
  chip-on-cocoa-selected:
    backgroundColor: "{colors.claro}"
    textColor: "{colors.cacau}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  tab-selected:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.claro}"
  input:
    backgroundColor: "{colors.porcelana}"
    textColor: "{colors.texto}"
    rounded: "{rounded.hairline}"
    padding: "0 16px"
    height: "54px"
  input-on-cocoa:
    backgroundColor: "{colors.cacau-2}"
    textColor: "{colors.claro}"
  card:
    backgroundColor: "{colors.linho}"
    padding: "26px clamp(20px, 1.8vw, 28px) 18px"
  booking-panel:
    backgroundColor: "{colors.linho}"
    padding: "clamp(22px, 3vw, 44px)"
  arch-frame:
    backgroundColor: "{colors.areia}"
    rounded: "999px 999px 4px 4px"
  floating-cta:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.claro}"
    height: "54px"
---

# Design System: Seiva Estética Avançada

## Overview

**Creative North Star: "The Torn Peach Page"**

A calm, premium clinic told in the category's own language: nude and peach grounds, a high-contrast serif, glowing skin. It is done carefully enough to look clearly more expensive than the template and Instagram-only sites clinics usually have. The one memorable move is the first viewport: a single raster of flat peach paper torn open to reveal an extreme close-up face, with the headline set straight onto the flat paper. Everything after it is quieter. Porcelain and sand alternate section by section, cocoa bands carry the interactive tools, photos sit in arch-topped frames, and hairline rules divide content. Boxes are used sparingly.

Density is generous: sections breathe on a fluid 72 to 140px vertical rhythm, text columns stay at 34 to 56ch, and each section runs on the same 12-column grid. Type does the hierarchy. A roman Playfair headline carries an italic taupe phrase, and tracked uppercase Jost labels sit underneath. Motion is cinematic but limited to a few moves: the hero wipes in, photos rise like a curtain, section titles rise from behind a line, and nothing else animates in.

The look was pinned by the user's own reference images. An earlier green-and-yellow modernist direction was rejected, so that palette is a confirmed anti-reference.

**Key Characteristics:**
- Peach paper (pessego) opens and closes the page. Porcelain and sand alternate in between. Cocoa is kept for the primary button, the laser tool band and the footer.
- Playfair Display 400 for all display and titles, each heading with one italic phrase in taupe. Jost for body, light (300) for secondary prose.
- Arch-topped photo frames (pill top, 4px foot) are the signature shape.
- Hairline 1px rules in `linha` divide lists, accordions, tables and timelines. Cards are flat linen panels with no border.
- Thin-stroke inline SVG icons (1.2 to 1.4 stroke, round caps), all drawn the same way.
- One action everywhere: a cocoa "Agendar" button that opens WhatsApp with a prefilled message.

## Colors

A warm, low-chroma nude palette from peach to cocoa, with no cool hues except two small sage functional greens.

### Primary
- **Cocoa Ink** (cacau): The single action colour. Used for primary and floating buttons, selected chips and tabs, the outline-button stroke, the comparator's top rule, and the full dark bands (laser calculator, footer). Also the text colour of the hero and closing headlines on peach.
- **Deep Cocoa** (cacau-2): A raised surface inside cocoa bands, used for inputs and the hint box in the laser calculator.

### Secondary
- **Torn Peach** (pessego): The paper of the hero raster. It is sampled from the image so the text area and the photo read as one sheet. It also fills the closing section and, below 900px, the solid header. Change this colour only together with the hero image.
- **Dark Taupe** (taupe-escuro): The default headline and title colour on light grounds, the primary-button hover, and the focus-ring colour.
- **Taupe** (taupe): Italic accents inside headlines, line icons, accordion plus signs, FAQ counters, hover borders on chips, input focus border, selection highlight, scrollbar.

### Neutral
- **Porcelain** (porcelana): The page ground and the default section background. Also the fill of inputs and of the message preview.
- **Sand** (areia): The alternating section ground (treatments, questions, space) and the fill behind arch photos while they load.
- **Linen** (linho): The lightest surface: treatment cards, the booking panel, the "E depois?" timeline panel.
- **Hairline** (linha): Every 1px divider, chip and input stroke, timeline track, and the header's bottom rule once it turns solid.
- **Body Ink** (texto): Body text on light grounds.
- **Muted Ink** (texto-2): Secondary prose, section intros, uppercase field labels, metadata.
- **Pale Ink** (claro): Text on cocoa, and the selected-chip fill inside cocoa bands.
- **Pale Ink Muted** (claro-2): Secondary text on cocoa and the footer body.

**Hard-coded values outside `:root`** (check these by hand when re-skinning): wordmark subline `#4A3B33`; "open now" dot `#6E9A7C` (ring at 18% alpha); comparator "Sim" text `#3F6B4C`; input placeholder `#73645B`; italic accents on dark grounds use three near-identical blush tints, `#ECDACB` (photo band), `#DCC5B4` (laser heading) and `#E6D1C0` (laser sentence); photo-band scrim `rgba(35, 27, 23, .5)`; `<meta name="theme-color">` is `#EABDA5`.

### Named Rules
**The Cocoa Means Act Rule.** A cocoa-filled pill or button means "selected" or "book now". Do not use cocoa fill for decoration on light grounds.

**The Peach Bookends Rule.** Peach paper appears only on the first viewport (and its mobile header) and on the closing section. Interior sections alternate porcelain and sand.

## Typography

**Display Font:** Playfair Display (with Didot, Georgia, serif)
**Body Font:** Jost (with Futura, Century Gothic, system-ui, sans-serif)

**Character:** A high-contrast transitional serif in roman 400, set slightly tight, paired with a geometric sans that reads soft at light weights and confident when tracked in uppercase. Loaded weights: Playfair 400, 500 and italic 400; Jost 300, 400 and 500.

### Hierarchy
- **Display hero** (400, clamp(3rem, min(5.1vw, 10vh), 5.4rem), 1.1): The hero H1 only, in cocoa, one line per span. On mobile it drops to clamp(2.3rem, 10.4vw, 3.4rem) and the lines may wrap.
- **Display large** (400, clamp(2.6rem, 5.4vw, 5rem), 1.04): Headings of the full-bleed photo band and the closing section.
- **Headline** (400, clamp(2.1rem, 3.8vw, 3.4rem), 1.08): Every section H2, balanced wrap, with one italic phrase in taupe (or a blush tint on dark).
- **Title** (400, 1.7rem, 1.1): Treatment card names. Sub-panel titles use clamp(1.7rem, 2.6vw, 2.3rem).
- **Title small** (400, 1.45 / 1.4rem, 1.2): Principle terms, team names, process steps, comparator column heads (1.5rem).
- **Title extra-small** (400, 1.3rem, 1.25): FAQ questions and the "Five questions" list.
- **Numeral** (italic 400, 2.2rem / 1.7rem, 1): FAQ counters, team monograms, "Dia 0" stops in the aftercare timeline, the laser target label (0.95rem).
- **Body** (Jost 400, 1.0625rem, 1.65): Base copy. Secondary prose drops to weight 300 in muted ink, at 42 to 56ch.
- **Label** (Jost 500, 0.8rem, 0.14em, uppercase): Buttons and arrow links. Nav uses 400 at 0.74rem / 0.16em. Field legends and table row heads use 400 at 0.74rem / 0.14em in muted ink.
- **Wordmark** (Playfair 400, 1.75rem, 0.14em, uppercase) above a Jost 0.7rem / 0.3em uppercase subline.

### Named Rules
**The One Italic Phrase Rule.** Every section headline is roman with exactly one italic `em` phrase, coloured taupe on light grounds and a pale blush on dark. Bold is never used in display type.

**The Tabular Numbers Rule.** Durations, session counts, dates and registration numbers use `font-variant-numeric: tabular-nums`.

## Layout

Each section runs on the same 12-column grid with `gap` column gutters, padded by `margem` on the sides and `secao` vertically. Content containers cap at 1560px (1720px for the header, hero band, principles and footer). Section heads use two layouts. Split: the heading spans columns 1 to 7 and the intro spans 9 to the end, aligned to the baseline. Centered: one column, intro 18px below. Image and text pairs split 5 and 6 columns (arch at 1 to 5 or 2 to 5, text from column 6 or 7). The questions arch is sticky at `top: 110px` on desktop.

Breakpoints: 1180px (nav collapses to a Menu button, treatment cards go from 4 to 2 columns), 900px (everything stacks to one column, header 64px on solid peach, the hero becomes the image above and text below on peach, the comparator becomes stacked labelled rows, the process line turns vertical, the floating CTA appears), 640px (cards go to 1 column), 420px (aftercare days go to 1 column). Mobile is the primary screen, and the hero CTA must sit inside the first mobile viewport.

## Elevation & Depth

The system is mostly flat. Depth comes from tonal layering (porcelain, then sand, then linen panels, with cocoa bands for contrast) and from photography. The few shadows are soft, warm, long and negative-spread, tinted with cocoa, and none of them is a hard offset.

### Shadow Vocabulary
- **Panel float** (`box-shadow: 0 30px 60px -40px rgba(35, 27, 23, .35)`): The booking panel only.
- **Drawer** (`box-shadow: 0 24px 40px -24px rgba(35, 27, 23, .35)`): The mobile menu drawer.
- **Floating CTA** (`box-shadow: 0 14px 30px -12px rgba(35, 27, 23, .55)`): The mobile floating button.
- **Header rule** (`box-shadow: 0 1px 0 var(--linha)`): The solid header once the hero scrolls away, together with 95% porcelain and `backdrop-filter: blur(8px)`.
- **Status ring** (`box-shadow: 0 0 0 4px rgba(110, 154, 124, .18)`): The "open now" dot.

### Named Rules
**The Flat Linen Rule.** Cards and panels are borderless linen surfaces on a darker ground. A shadow is only for something that floats over content (the booking panel, drawer and floating CTA).

## Shapes

There are two kinds of corner. Rectangles are close to square: buttons and inputs are 2px, the arch foot is 4px, and cards and panels are 0. Selection controls are fully round: chips and tabs are 999px pills, and social buttons, status dots, timeline stops and team monograms are circles. The signature silhouette is the arch photo frame, `border-radius: 999px 999px 4px 4px`, at portrait ratios (4/5, 3/4.3, 3/4.2 on desktop and about 4/4.4 to 4/4.6 on mobile). The reveal clip-path keeps the same rounded top while it animates. Lines are 1px everywhere. Icons are thin strokes (1.2 at 32px, 1.3 at 24px) with round caps and joins.

## Components

### Buttons
Tactile but restrained. Tracked uppercase on a near-square slab.
- **Shape:** near-square (2px), min-height 54px, horizontal padding 2em, icon gap 0.7em, icon 1.35em.
- **Primary (`cacau`):** cocoa fill, pale-ink label. Hover goes to dark taupe. Active nudges down 1px.
- **Outline:** 1px cocoa stroke, cocoa label, transparent. Hover fills cocoa.
- **Light:** porcelain fill, cocoa label, for use on dark grounds. Hover goes to linen.
- **Small:** 42px tall, 1.3em padding, 0.74rem (header "Agendar").
- **Arrow link:** uppercase 0.78rem dark-taupe text with a thin arrow that slides 5px right on hover.
- **Transitions:** 0.3s on the expo-out curve (`cubic-bezier(.16, 1, .3, 1)`) for background, colour, border and transform.

### Chips
- **Style:** a visually hidden radio or checkbox inside a label. The 42px pill has a 1px hairline stroke, no fill, and body ink at 0.95rem.
- **State:** hover turns the stroke taupe. Checked is a cocoa fill with pale ink. Focus-visible draws a 1.5px dark-taupe outline offset 2px. Disabled is 40% opacity. On cocoa bands the stroke is pale ink at 26% and checked inverts to a pale fill with cocoa text.
- **Variants:** single-select radio (booking interest and period, laser area and target) and multi-select checkbox capped at 3 (comparator; the rest disable at the cap).

### Tabs
The same pill as a chip (42px, hairline stroke, 999px), using `role="tab"` buttons. The selected tab is cocoa-filled. Arrow keys move between tabs. Each panel is a four-column "day" timeline, where each stop has a top hairline and an italic Playfair "Dia N".

### Inputs / Fields
- **Style:** 54px tall, 16px padding, 1px hairline stroke, 2px corners, porcelain fill. The label above is uppercase muted ink at 0.74rem / 0.14em, with a lowercase "(opcional)".
- **Focus:** the outline is removed and the border turns taupe. Elsewhere, focus is a global 1.5px dark-taupe outline offset 3px.
- **On cocoa:** deep-cocoa fill, pale-ink stroke at 22%, `color-scheme: dark`.

### Cards / Containers
- **Treatment card:** a linen panel with no radius, no border and no shadow. Photo on top (4 / 3.2), then a 34px taupe line icon, a Playfair title, a light-weight summary, then a stack of expandable items.
- **Expandable item (`details`):** hairline top border, 56px summary row with name, tabular metadata below it, and a taupe plus sign that rotates 45 degrees when open. Hover underlines the name in taupe. FAQ items use the same pattern at 68px with a Playfair 1.3rem question.
- **Booking panel:** linen panel, fluid 22 to 44px padding, panel-float shadow, chips, name field, WhatsApp submit, and a live porcelain preview box showing the exact message.
- **Internal padding:** 26px top, clamp(20px, 1.8vw, 28px) sides, 18px bottom.

### Arch Photo Frame
A `figure` with pill-top, 4px-foot corners and a sand fill. The image covers the frame and gets the curtain reveal and parallax. Use it for every portrait photo set inside a section. Landscape photos inside cards stay rectangular.

### Comparator Table
An ARIA grid (`role="row"`, `columnheader`, `rowheader`, `cell`) built from CSS grid: a 150px-min label column plus `--n` equal columns (1 to 3). It has a 1px cocoa top rule and hairline row dividers. Column heads are Playfair 1.5rem. Row heads are uppercase muted labels. Cells are weight 300 with tabular numbers. A "Sim" answer is sage green. Below 900px the header row is hidden, and each cell becomes a two-column row whose italic Playfair label repeats the treatment name.

### Laser Calendar Timeline
It sits in a cocoa band. A 76px track has a 1px pale line at 30% alpha, month labels below it (0.8rem, muted pale), 11px solid pale dots for sessions that fit and hollow dots for sessions that do not, and an italic Playfair target flag with a 24px stem (right-anchored past 72%). Below it: an uppercase start label, the session dates list (`1ª` in pale ink weight 500), a deep-cocoa hint box, and a WhatsApp CTA prefilled with the plan.

### Process Line
Four steps, each a 13px hollow taupe-ringed circle on a hairline running across the gutters, with a Playfair title and a light description. Below 900px it turns into a vertical line on the left.

### Navigation
A fixed header, 76px tall (64px on mobile), with the wordmark on the left and the nav right after it. Links are uppercase 0.74rem / 0.16em with an underline that grows from the left (scaleX, 0.35s). A small primary "Agendar" sits at the far right. The header is transparent over the hero and turns solid (95% porcelain, blur, hairline) once the hero is less than 90% visible. At 1180px and below, an outlined "Menu" button opens a full-width porcelain drawer with 18px hairline-divided rows that ends with "Agendar avaliação". Escape closes it. At 900px and below, the header is solid peach.

### Floating Mobile CTA
A full-width primary button with a WhatsApp icon (16px inset, above the safe area), shown only at 900px and below. It slides up (translateY 160% to 0, 0.45s) once the visitor has scrolled past the booking panel, and hides again while the closing section is in view.

### Motion grammar
GSAP and ScrollTrigger with Lenis (lerp 0.11) for smooth scroll and anchor scrolling with a -96px offset. Easing is expo throughout (`cubic-bezier(.16, 1, .3, 1)` in CSS). On load, the hero image wipes in from the right (clip-path, 1.6s) and settles from 1.08 to 1 scale, then the headline lines rise in a stagger (60%, 0.12s apart), followed by the lead, actions, trust items and social links. Each `[data-foto]` reveals as a bottom-up curtain (1.3s, arches keep their rounded top), the image zooms out from 1.3 to 1.1, then drifts plus or minus 4% with scroll. The dark photo band scrubs from 1.22 to 1 scale. Section H2s rise from behind a clip line. No other element animates in. `prefers-reduced-motion` skips every GSAP move and reduces CSS transitions to 0.01ms.

### Re-skin checklist (placeholder content per client)
- `:root` colours in `assets/css/style.css`, plus the hard-coded values listed under Colors and `theme-color` in `index.html`.
- `CONFIG` at the top of `assets/js/main.js`: `whatsapp` (placeholder `5511900000000`), `fuso`, `horario` (opening hours per weekday). Also check the comparator data `T` and the laser intervals, which are clinical copy.
- `index.html`: clinic name and wordmark, address (`Rua Exemplo, 000`), phone and JSON-LD (`MedicalClinic`, `FAQPage`), canonical and OG URLs, team names and registrations (`CRM-SP 000000 · RQE 00000`, `CRBM 00000`, `COREN-SP 000000`), technical lead, CNPJ, Instagram and Maps links, and the demo disclaimer line in the footer.
- Images in `assets/img/`: the hero raster (desktop and mobile crops) and the laser photo are AI-generated, and the rest are Unsplash stock. Each has a `.json` provenance sidecar. A new hero must keep flat empty paper on the left for the text, and `pessego` must be resampled from it.

## Do's and Don'ts

### Do:
- **Do** set every section H2 in Playfair 400 with exactly one italic phrase in taupe (pale blush on cocoa).
- **Do** keep cocoa as the only filled action colour, and route every CTA to WhatsApp with a prefilled message.
- **Do** put portrait photography in the arch frame (`999px 999px 4px 4px`), and give it the curtain reveal.
- **Do** divide lists, accordions, tables and timelines with 1px `linha` hairlines instead of boxing them.
- **Do** draw icons as inline SVG at a single thin stroke (1.2 to 1.4) with round caps, in `currentColor`.
- **Do** alternate porcelain and sand between sections, and open and close the page on peach paper.
- **Do** use tabular numbers for durations, dates, session counts and registration numbers.

### Don't:
- **Don't** reintroduce the rejected green-and-yellow modernist palette.
- **Don't** add text entrances beyond the hero intro and the section-title rise. Body copy, cards and lists appear without animation.
- **Don't** use hard offset shadows or heavy borders. Shadows stay soft, cocoa-tinted and negative-spread, and only on floating elements.
- **Don't** bold or weight up display type. Hierarchy comes from size and the italic phrase.
- **Don't** add uppercase eyebrow labels above section headlines. Uppercase tracking is for buttons, nav and form labels.
- **Don't** change `pessego` without regenerating or resampling the hero raster. The paper and the colour must match.
