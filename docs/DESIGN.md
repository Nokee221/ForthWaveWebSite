# FourthWave Design System

> This document is the visual source of truth for the project.
> Check it before making any visual change. Anything not yet decided is marked **To Be Defined**.

---

## Visual Direction: Clean Premium + Futuristic Motion

**Core concept:** A serious, premium digital agency experience with a modern technological edge.

FourthWave should feel:

- Serious
- Premium
- Modern
- Confident
- Technologically capable
- Creative without being chaotic
- Minimal without feeling empty

The target balance is approximately:

**80% Clean Premium / 20% Futuristic / Interactive**

The futuristic character should come primarily from motion, interaction, gradients and subtle visual effects — not from excessive neon, cyberpunk aesthetics or visual clutter.

---

## Color Direction

Primary accent: **purple**.

### Purple palette

- `#7C3AED`
- `#8B5CF6`
- `#A855F7`
- `#C084FC`

### Primary gradient

```css
linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #C084FC 100%)
```

### Button gradient

Primary buttons use a darker, purple-only gradient so white text keeps sufficient contrast:

```css
linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)
```

The primary gradient stays in use for gradient text, Hero/background effects, ambient glow and decorative elements.

### Light mode

| Role             | Value     |
| ---------------- | --------- |
| Background       | `#FFFFFF` |
| Soft background  | `#FAFAFA` |
| Surface          | `#F7F7F8` |
| Elevated surface | `#FFFFFF` |
| Primary text     | `#111113` |
| Secondary text   | `#5F6068` |
| Border           | `#E8E8EC` |
| Accent           | `#7C3AED` |

### Dark mode

| Role             | Value     |
| ---------------- | --------- |
| Background       | `#09090B` |
| Soft background  | `#0F0F12` |
| Surface          | `#15151A` |
| Elevated surface | `#1B1B22` |
| Primary text     | `#F7F7F8` |
| Secondary text   | `#A5A5AE` |
| Border           | `#27272F` |
| Accent           | `#A855F7` |

Dark mode must be intentionally designed, not simply inverted.

Do not use pure black as the main dark background.

The accent is the solid purple used for links, focus rings and text selection. It differs per theme so it stays legible on each background. Text placed on an accent or gradient fill is white in both themes.

---

## Typography

Preferred font: **Manrope**

Use `next/font/google`.

Typography should be:

- Modern
- Professional
- Highly readable
- Strong at large sizes
- Suitable for light and dark mode

Hero heading target:

- Desktop approximately `64px–88px`
- Weight `700–800`
- Tight line-height

Display font: **Space Grotesk**, also loaded with `next/font/google`. It is used for the Hero headline only; every other heading and all body text stay in Manrope. The implemented Hero headline goes beyond the target above: see the type scale and the Hero section.

Section headings approximately:

- `42px–64px`

Body:

- `16px–18px`

Use responsive/fluid typography where appropriate.

### Type scale

Headings scale fluidly with the viewport between a mobile and a desktop size.

| Style      | Mobile | Desktop | Line height | Letter spacing |
| ---------- | ------ | ------- | ----------- | -------------- |
| Hero       | `48px` | `100px` | `0.98`      | `-0.045em`     |
| Heading    | `32px` | `64px`  | `1.1`       | `-0.02em`      |
| Subheading | `24px` | `32px`  | `1.2`       | `-0.01em`      |
| Lead       | `18px` | `18px`  | `1.6`       | normal         |
| Body       | `16px` | `16px`  | `1.6`       | normal         |

The desktop size is reached at a viewport width of roughly `1440px`.

---

## Layout

Recommended maximum content width:

`1200px–1280px`

The implemented maximum content width is `1280px`, with side padding of `24px` on mobile and `40px` from tablet up.

Use generous whitespace and strong alignment.

Suggested spacing scale:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120, 160`

Border radius:

- Small: `8px`
- Medium: `12px`
- Large: `16px`
- XL: `24px`
- Pill: `999px`

Section vertical padding (top and bottom):

- Mobile: `80px`
- Tablet: `120px`
- Desktop: `160px`

### Shadows

| Level  | Light mode                                                                 | Dark mode                                                                  |
| ------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Small  | `0 1px 2px rgb(17 17 19 / 0.05)`                                           | `0 1px 2px rgb(0 0 0 / 0.4)`                                               |
| Medium | `0 4px 16px -4px rgb(17 17 19 / 0.08), 0 1px 2px rgb(17 17 19 / 0.04)`     | `0 4px 16px -4px rgb(0 0 0 / 0.5), 0 0 0 1px rgb(255 255 255 / 0.03)`      |
| Large  | `0 16px 48px -12px rgb(17 17 19 / 0.12), 0 2px 6px rgb(17 17 19 / 0.04)`   | `0 16px 48px -12px rgb(0 0 0 / 0.6), 0 0 0 1px rgb(255 255 255 / 0.04)`    |

Dark-mode shadows are deeper and add a faint light edge, because a soft shadow alone is barely visible on a near-black background.

---

## Buttons

Primary buttons:

- Purple gradient
- White text
- Premium/tactile feel
- Subtle hover interaction
- Optional subtle glow
- A `1px` inner highlight along the top edge (white at 24%), for a more tactile edge

Secondary buttons:

Light:

- White/transparent
- Dark text
- Subtle border

Dark:

- Transparent/dark surface
- White text
- Subtle border

Avoid exaggerated button animations.

### Button specification

| Property | Value                                        |
| -------- | -------------------------------------------- |
| Radius   | Pill (`999px`)                               |
| Heights  | Medium `44px`, Large `52px`                  |
| Padding  | Medium `24px`, Large `32px` (left and right) |
| Text     | Medium `14px`, Large `16px`, weight `600`    |

Interaction:

- Primary hover: lifts `2px` and gains the purple glow.
- Secondary hover: lifts `1px`, the border darkens and the background fills with the surface color.
- Press: settles back down and scales to `0.97`.
- Transitions use the fast duration and standard easing.

---

## Cards

Cards should be used only when they provide meaningful grouping.

Use:

- Clean surfaces
- Subtle borders
- Controlled shadows
- Medium/large radius
- Small hover movement
- Optional purple accents

Avoid excessive nested cards.

### Media panels

Image-led panels, used for the four services in "What We Do":

- Always dark, in both light and dark themes, so photographs and the text over them read the same everywhere.
- XL radius (`24px`), no border, no shadow.
- The photograph fills the panel; a bottom-up dark gradient keeps the text readable.
- Text is white: title in the Subheading style, one sentence of description, one secondary button.
- Hover: the photograph zooms to `105%` over the slow duration and a soft purple light rises from the bottom-left corner.
- Layout on desktop is two rows of unequal widths (7/5 columns, then 5/7) with `20px` gaps; two equal columns on tablet; one column on mobile.

### Browser mockups

Used to present website projects in the Web Development portfolio:

- **Window.** A minimal browser window: three neutral dots, a small address bar with a lock mark, one faint "new tab" mark, and a `16:10` page area. Large radius on mobile, XL from tablet up; hairline border and the large shadow. It follows the page theme (light frame on light, dark frame on dark) and has no working browser controls.
- **Featured project.** The window spans the full content width over a restrained purple light, with the project's label, title and category on the left beneath it and the description and button on the right.
- **Secondary project.** Text on the left (one third), and on the right a tinted panel (soft background, XL radius, hairline border, purple light in its top corner) with the window rising out of its lower edge, so the window has no bottom border. Below desktop the panel comes first and the text follows.
- **Page content.** The real screenshot when its file exists, cropped from the top by default. Until then, a demo website drawn in code, if one is defined, or a neutral "coming soon" note. Demo websites have their own fictional brand palettes and fonts, scale with the window, and are longer than one screen.
- **Labels.** Demo projects carry a "Demo" pill beside the project label, and their category says "demo concept".
- **Entrance.** The featured window rises `24px` and scales from `0.98` while its page is uncovered from the top down; the label and title follow at `240ms` and the description and button at `320ms`. The secondary panel wipes up from its lower edge, its window rises inside it, and its text follows the same stagger. Small parts of a demo website (a caption, the product shots) settle in last.
- **Hover (projects that can be opened).** The featured window lifts `6px` and the secondary one `8px`; the border takes a hint of the accent color and the purple light brightens. A demo page scrolls up slowly inside its window to show there is more below; a real screenshot zooms to `102%`. A "View project" tag with an arrow fades in at the lower right corner, also on keyboard focus. With reduced motion the page does not scroll.

### Phone mockups

Used to present apps in the Mobile Development portfolio:

- A generic smartphone with a `9:19.5` screen, a thin bezel and a small front-camera pill. No manufacturer details. The body is dark in both themes, with the large shadow.
- Each app is shown on two phones. On mobile only the main phone is shown.
- Featured app: text on the left; on the right a large main phone with a second, smaller screen behind it and lower, over a soft purple light.
- Secondary app: mirrored, with two equal phones side by side at stepped heights and the text on the right.
- The section sits on the soft background so it reads as a separate chapter from Web Development.
- Entrance: the phones rise and scale from `0.98`, the second after the first.
- Hover: the phones lift `8px` (the featured app's second phone moves `8px` outward instead) and the purple light brightens.
- A screen shows the real screenshot when its file exists. Until then it shows a demo screen drawn in code, if one is defined, or a neutral "coming soon" note.

Demo projects are fictional and exist only to preview the layout. They carry a small "Demo" label on the page and in the dialog.

### Video showcase

Used in the Video Editing portfolio:

- The section follows the page theme. The video screen itself, and the modal it opens, are dark in both themes so the focus stays on the footage.
- One large `16:9` preview spans the content width: XL radius, hairline border, no shadow, a soft purple light behind it.
- A round play button sits in the centre (`64px` on mobile, `80px` from tablet up): translucent white with a thin border. A small label, the title and one line of detail sit bottom-left over a dark gradient.
- The preview loops silently. It shows, in order of preference: an animated GIF, a short muted looping clip, the poster image, or an animated placeholder.
- The animated placeholder: two soft purple lights drifting slowly on a near-black frame, a thin lens flare, corner marks, the words "Video showreel · placeholder", and an editing timeline with a playhead crossing it every `9s`.
- Entrance: the preview opens from the centre outward, like curtains, over `1100ms`.
- Hover: the picture zooms to `103%` and lifts `2px`, the border takes the accent color, and the play button grows to `110%`, fills with the accent and gains the glow.
- Clicking opens the player in the modal. The video is only loaded then. It does not start by itself: it waits with the browser's own controls, so sound never plays unasked. It is stopped and released on close.
- Further videos, when there are any, appear as smaller previews in a row beneath.

### Client logos

- A single quiet row under the video, separated by a hairline: six across on desktop, three on tablet, two on mobile. No boxes around the logos.
- Logos are shown at up to `40px` tall, in grayscale at 60% opacity, returning to full color on hover.
- An entry without a logo file is shown as its name in bold, widely spaced capitals in the secondary text color.
- While any entry is marked as a demo, a small pill reads "Demo examples — not confirmed clients".

### Digital Marketing

A motion-led presentation of the service rather than a portfolio. It sits on the soft background and has five parts, top to bottom:

- **Introduction and canvas.** Text on the left with the headline revealed line by line and one line in the purple gradient. On the right, a `5:4` "canvas" drawn in CSS: a dot grid, the word "Idea" in the gradient at very large size, a few shapes, a small post preview, a color palette chip and a label. A thin gradient line draws itself across it over `1600ms`. Shapes bob `6px` on slow loops; on desktop the shapes and the previews shift up to `8px` and `18px` with the pointer.
- **Concept designs.** Three visuals drawn in code, in a row of unequal widths and proportions (`4:5`, `5:4`, `3:4`): a social post, a display ad and a brand board. Each is labelled "Concept design" and opens a modal with the visual enlarged, a "Concept design — not client work" pill, a description and three points on what it explores. Hover: lifts `6px`, zooms to `104%`, accent border and glow, arrow moves.
- **Workflow.** Strategy, Create, Grow: three stages on a hairline, each with a purple dot. A gradient line draws along the hairline over `1400ms` and the stages follow `220ms` apart. Horizontal on desktop; on mobile the line runs vertically down the left.
- **Services.** A short heading beside a two-column list of four services divided by hairlines, each with a small outlined icon tile. Hover: the tile fills with the accent and lifts `2px`.
- **Closing call to action.** Centered heading with the last word in the gradient, one line of text and the primary button, over a restrained purple light.

Concept designs are fictional, including any names and headlines inside them, and are never presented as client work.

### Team

A team of equals, presented editorially rather than as a row of cards. It follows the page theme: near-black in dark mode, white in light mode.

**Core rule: equal people, equal portraits.** All four portraits have exactly the same size, `3:4` shape, frame, hover behaviour and label typography on any given screen. Nobody is larger, first among others, or lit differently. Asymmetry comes only from position.

- **Desktop.** The heading sits top left with the supporting text bottom-aligned to its right. Beneath, the four identical portraits hang in one row from a hairline rule, each on a thin vertical line of a different length (`40`, `120`, `72` and `152px`) with a small purple dot where it meets the rule, so the row rises and falls like a wave. One soft purple light sits behind the whole row.
- **Tablet and mobile.** Two columns of identical portraits, with the right column set `56px` lower. The hanging lines are not shown.
- **Portraits.** Large-radius frames with a hairline border, never circles. The photo is cropped with a per-person focal point. Without a photo, the frame shows the person's initials very large and faint on a neutral surface, with the note "Portrait coming soon".
- **Labels.** Under each portrait, always visible and identical in style: a purple index number, the name in bold, and the role as a small uppercase label.
- **Entrance.** The headline is revealed line by line. Each hanging line grows downward, then its portrait is uncovered from the top while the photo settles from `105%`; the four follow one another `110ms` apart, left to right, and each name appears `260ms` after its portrait.
- **Hover and focus.** The photo zooms to `104%` with slightly more contrast, the foot of the photo darkens, a "View profile" cue with an arrow rises in, a purple line is drawn along the bottom edge, and the name takes the accent color. On touch screens the cue is always visible.
- **Profile modal.** Opens from any portrait. On desktop it has two columns: portrait, index, name, role and Previous / Next on the left (this column stays in view while scrolling); the profile on the right. Only sections with content are shown: about, experience and education as timelines, skills as pills, selected projects, certifications. A profile with no details shows a single "coming soon" line and a faint sketch of the sections to come. Left and right arrow keys move between profiles and wrap around. On mobile it is full screen and stacked.

### Contact

The final invitation, on the soft background.

- **Layout.** Two columns on desktop: the heading (second line in the purple gradient) and supporting text on the left, staying in view while the form scrolls; the form on the right on an elevated surface with the XL radius, a hairline border, the medium shadow and a restrained purple light behind it. One column below desktop.
- **Fields.** Full name, email, company or brand (optional), service (a select) and project details. Two columns inside the form on wider screens; the text area spans both.
- **Controls.** `48px` tall, medium radius, hairline border on the page background. Focus: the border takes the accent color with a soft `4px` accent ring. Labels are always visible above the control; required fields carry a purple asterisk and optional ones the word "Optional".
- **Errors.** Shown under a field once the visitor has left it, or after a submit attempt: the border turns to the error color and a message appears with an icon, so color is never the only signal. Error color: `#DC2626` in light, `#F87171` in dark.
- **Submit.** The large primary button with an arrow. While sending it is disabled and shows a spinner and "Sending…".
- **Outcome.** On confirmed success the form is replaced by a check mark in a gradient circle, "Message received." and a button to send another. On failure a bordered notice appears above the button and everything typed is kept.
- **Entrance.** The heading is revealed line by line; the form surface rises and settles from `0.98`, and its fields follow `70ms` apart.

### Footer

Closes the page on the page background, separated from Contact by a hairline.

- **Top row.** Three groups: the wordmark with a one-sentence description; navigation in two short lists (Services, Company); and "Follow us".
- **Social.** Instagram, TikTok and YouTube as three full-width rows, `64px` tall, divided by hairlines, each with the platform's icon and name in bold. A configured profile is a link with an arrow; hover shifts the row `8px`, lifts the icon `2px` and takes the accent color. A profile without a URL is shown in the secondary color with a "Coming soon" pill and is not a link.
- **Navigation links.** Hover takes the accent color and draws a thin gradient line underneath.
- **Closing wordmark.** FOURTHWAVE in the primary gradient across the full width of the page (`14.6vw`), followed by the copyright line with the current year.
- **Motion.** One entrance reveal for the top row; nothing moves continuously.

### Section watermarks

Every section after the Hero has one word set very large behind its foot, in the text color at about 3.5% opacity, so it is only just visible: SERVICES, WEB, MOBILE, VIDEO, MARKETING, PEOPLE and CONTACT. The word is centered, runs slightly off the bottom edge and sits behind all content. Longer words are set smaller so each spans a similar width. The Hero has none.

### Section boundaries

Every section after the Hero starts with the same marker at its top edge: a hairline across the content width in the border color, with a `64px` purple gradient segment at its left end. The Mobile Development section also uses the soft background so the page alternates as it scrolls. The Hero itself is unchanged.

### Project details dialog

Opens when a published project is clicked:

- Centered panel up to `1024px` wide with the XL radius over a dimmed page; full screen on mobile.
- For websites: the project in a browser window on the surface color, then a "Demo project" pill and the category where they apply, the title, description, and only the details that exist (role, technologies, link to the live website). A demo website is shown as two views, the first screen and further down the page.
- For apps, the layout is portrait: a phone mockup on the left (on top on mobile) and the text beside it.
- When a project has several images, small thumbnails under the image switch between them; the selected one has the accent border.
- Opens by fading in, rising `16px` and scaling from `0.97` over the normal duration while the page behind dims; closes the same way in reverse.
- Closes with the close button, the Escape key, or a click outside the panel.

---

## Gradients and Glow

Gradients should create emphasis, not noise.

Use them for:

- Hero
- CTA
- Important text
- Image blending
- Ambient background glow
- Selected interactive states

Glow should feel like ambient lighting, not neon.

### Glow strength

| Theme | Glow color                |
| ----- | ------------------------- |
| Light | `rgb(124 58 237 / 0.22)`  |
| Dark  | `rgb(168 85 247 / 0.32)`  |

As a shadow, the glow is `0 8px 32px -8px` in the glow color.

---

## Hero

The Hero will eventually be:

Left:

- Large headline
- Supporting text
- Two CTA buttons

Right:

- Large image/visual
- Purple ambient gradient
- Interactive motion

The image should visually merge into the background rather than look like a rectangular image placed beside text.

The exact copy and final composition will be designed separately.

### Implemented Hero

Direction: bold, premium, editorial. The headline is the main moment.

- **Headline.** Space Grotesk, three lines. The opening lines are regular weight (`400`) in the text color; the closing line is bold (`700`) in the primary gradient. The contrast in weight and color carries the emphasis, so only one line is highlighted.
- **Text column.** Up to `640px` wide on desktop; the supporting paragraph up to `480px`.
- **Buttons.** Two large buttons, each with an arrow that moves `4px` on hover. They stack at full width on mobile.
- **Descriptor.** One quiet line under the buttons, `WEB · MOBILE · VIDEO · DIGITAL`, in the small uppercase label style (`12px`, semibold, `0.16em` tracking, secondary color) with accent-colored dots.
- **Scroll cue.** `SCROLL TO EXPLORE` beside a `40px` hairline with an accent segment travelling down it on a `2.4s` loop. It links to the next section and is shown only on desktop screens at least `832px` tall, where there is room for it.
- **Height.** The Hero fills exactly one screen on phones, laptops and desktops.
- **Entrance order.** The photograph leads (from `0ms`), then the eyebrow (`220ms`), the headline line by line (`320ms`, `120ms` apart, each rising from behind a clip), the supporting text (`740ms`), the buttons (`860ms`, `90ms` apart), the descriptor (`1060ms`) and the scroll cue (`1250ms`).

---

## Motion

Motion is an important part of FourthWave.

The goal is:

**Interactive, smooth and intentional.**

Not:

**Everything moves constantly.**

Potential motion:

- Scroll reveals
- Staggered entrances
- Parallax
- Hover interactions
- Cursor-responsive effects
- Image reveals
- Gradient movement
- Micro-interactions
- Theme transitions

Every animation must have a purpose.

Respect `prefers-reduced-motion`.

Performance is part of the design.

### Motion tokens

| Duration | Value   |
| -------- | ------- |
| Fast     | `150ms` |
| Normal   | `300ms` |
| Slow     | `600ms` |

| Easing     | Value                            |
| ---------- | -------------------------------- |
| Standard   | `cubic-bezier(0.2, 0, 0, 1)`     |
| Emphasized | `cubic-bezier(0.16, 1, 0.3, 1)`  |

### Scroll reveals

Content below the first screen animates in once, when about 15% of it has scrolled into view:

- Text fades in and rises `20px`.
- Media panels wipe in from an edge over `1000ms` with the emphasized easing, while the photograph settles from a `105%` zoom. Neighbouring panels use different edges and start `120ms` apart.

Anything already on screen when the page loads is shown without animation, and nothing is hidden if JavaScript is unavailable.

When the visitor has requested reduced motion, animations and transitions are effectively disabled site-wide and smooth scrolling is turned off.

---

## Responsive

Design intentionally for:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile is not simply a scaled-down desktop.

Hero on mobile should become:

**Text → Buttons → Visual**

Interactive effects should be simplified where appropriate.

---

## Navigation

The Header should eventually be:

- Minimal
- Premium
- Clean
- Easy to understand

Possible behavior:

Top:

- Transparent / integrated into Hero

While scrolling:

- Subtle background
- Optional backdrop blur
- Subtle border

The exact Header design will be defined separately.

---

## What FourthWave Should NOT Look Like

Avoid:

- Generic SaaS template
- Generic AI agency template
- Cyberpunk
- Excessive neon
- Excessive glassmorphism
- Excessive rounded cards
- Purple everywhere
- Constant animation
- Random 3D objects
- Stock-photo-heavy layouts
- Overloaded navigation
- Excessive gradients
- Poor contrast
- Slow animations
- Visual clutter

The site should feel futuristic without trying too hard to look futuristic.
