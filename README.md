# Bits' Bill Pay

Build a complete, production-ready meme coin website for:

$BITS

Narrative:

THE DOG THAT PAYS ITS OWN BILLS.

$BITS is a community meme inspired by Bits, OpenMind's robot dog, and the real Circle × OpenMind demonstration where Bits used USDC and an agentic commerce system to perform a machine-to-machine payment to recharge itself. This website must clearly distinguish the community meme from Circle/OpenMind and must never claim that $BITS is an official Circle or OpenMind token.

The website should feel:

Funny
Viral
Memecoin-native
Futuristic
Cyberpunk
Premium
Playful
Highly visual
Extremely responsive
Fast
Mobile-first
Built for Crypto Twitter / X culture

Do NOT make it look like a serious corporate fintech website.

It should feel like a viral internet meme project built around a robot dog that pays its own bills with USDC.

1. BRAND IDENTITY
Name

$BITS

Main tagline

THE DOG THAT PAYS ITS OWN BILLS.

Secondary slogans

Use these throughout the site as small humorous micro-copy:

I DON'T BARK. I PAY.

NO OWNER. NO LEASH. JUST USDC.

GOOD BOY. GOOD PAYMENT.

REAL DOGS NEED FOOD. BITS NEEDS USDC.

HE DOESN'T ASK FOR MONEY. HE HAS A WALLET.

WHEN YOUR DOG PAYS ITS OWN BILLS.

Do not overload the website with text.

The primary focus must always remain on:

BITS + dog + USDC + memes.

2. IMPORTANT DISCLAIMER

This is critical.

Do NOT state:

"$BITS is a Circle token"
"$BITS is an OpenMind token"
"Official Circle meme"
"Official OpenMind token"
"Jeremy Allaire launched $BITS"
"Circle created $BITS"

Instead, use a small disclaimer in the footer:

$BITS is an independent community meme inspired by Bits, OpenMind's robot dog and the Circle × OpenMind autonomous payment demonstration. $BITS is not affiliated with, endorsed by, or issued by Circle or OpenMind.

Keep it visually subtle but readable.

3. ASSETS

The project includes two original image assets supplied by the user.

USE THE ORIGINAL IMAGE FILES DIRECTLY.

Asset 1 — Logo

Use the supplied $BITS logo as:

Main logo
Header logo
Hero logo
Footer logo
Favicon
Apple touch icon
Open Graph image
Twitter/X card image
Social preview image
Asset 2 — Banner

Use the supplied $BITS 3:1 banner as:

Hero background / hero visual
Social media visual where appropriate
History section visual where appropriate
VERY IMPORTANT

Do NOT convert the image assets into JSON.

Do NOT create base64 versions.

Do NOT recreate the images with CSS.

Do NOT replace the images with generated SVGs.

Do NOT use placeholders.

Import the actual original image files directly into the project.

Example:

src/assets/bits-logo.png
src/assets/bits-banner.png

Use the actual imported image files.

4. FAVICON + OG IMAGE

Use the original $BITS logo asset for:

Favicon
favicon
apple-touch-icon
Open Graph

Use the original logo or the supplied banner depending on the required OG aspect ratio.

Set:

og:title = "$BITS — The Dog That Pays Its Own Bills"
og:description = "I don't bark. I pay with USDC."
og:type = "website"

Twitter/X card:

summary_large_image

Use the supplied original $BITS banner.

5. HEADER

Create a sticky futuristic navigation.

Left:

$BITS logo

Navigation:

HOME
HISTORY
MEMES
COMMUNITY

Right:

BUY $BITS

Button should link to:

https://radardex.pro

Open in a new tab.

Use a subtle animated glow.

Mobile navigation should collapse into a clean hamburger menu.

6. HERO SECTION

This is the most important section.

Make it immediately funny and visually impressive.

Use the supplied 3:1 $BITS banner prominently.

Hero headline:

$BITS

Under it:

THE DOG THAT PAYS ITS OWN BILLS.

Then:

I DON'T BARK. I PAY WITH USDC.

Buttons:

BUY $BITS

Link:

https://radardex.pro
COPY CA

Display:

COMING SOON

When clicked:

If CA is COMING SOON, show a small toast:
"CA is coming soon, good boy 🐕"

Do not copy fake data.

7. HERO INTERACTION

Make the hero fun.

Add subtle:

Floating USDC coins
Small particles
Dog paw particles
Neon blue glow
Charging animation
Tiny payment confirmation animation

When the user hovers over the dog:

Display:

GOOD BOY. GOOD PAYMENT.

When clicking the dog:

Display random funny messages:

PAYMENT CONFIRMED.
BITS HAS PAID THE BILL.
NO HUMAN REQUIRED.
GOOD BOY.
USDC SENT.
HE'S GOT HIS OWN WALLET.

Keep animations lightweight.

8. MEME STATEMENT SECTION

Create a huge typography section.

Dark background.

Large text:

REAL DOGS NEED FOOD.

Then animate:

BITS NEEDS USDC.

Then:

NO OWNER.

NO LEASH.

JUST USDC.

Use the $BITS mascot in the background.

This should feel like a meme poster rather than a normal website section.

9. "WHAT IS BITS?" SECTION

Title:

WHAT IS BITS?

Keep it short.

Copy:

Bits is OpenMind's robot dog.

In a real Circle × OpenMind demonstration, Bits used USDC and an agentic commerce system to perform a machine-to-machine payment and recharge itself.

A robot dog literally paid its own bill.

This claim must be linked directly to the official Circle X post.

Create a button:

VERIFY THE ORIGINAL POST →

Link to:

https://x.com/circle/status/2023759340079927315

This is the most important proof link on the website.

10. $BITS HISTORY

Create a dedicated section:

$BITS HISTORY

Subtitle:

FROM ROBOT DOG TO INTERNET MEME.

Use a vertical timeline.

The timeline should be visually interactive.

HISTORY — EVENT 01
THE AUTONOMOUS PAYMENT IDEA

Explain that Circle had already been exploring autonomous payments using USDC and programmable wallets before the Bits demonstration.

Do NOT claim this was specifically about Bits.

Use it as background:

Circle had already been building infrastructure for autonomous USDC payments, laying the groundwork for machines and AI agents to transact programmatically.

Include a proof link to the relevant Circle developer material.

HISTORY — EVENT 02
CIRCLE × OPENMIND

Date:

FEBRUARY 17, 2026

Headline:

THE DOG ARRIVED.

Description:

Circle and OpenMind demonstrated autonomous AI transactions onchain using Bits, OpenMind's robot dog.

Then show an embedded X post.

11. REAL X EMBED

This is extremely important.

Do NOT create a fake tweet card.

Use the official X embed.

Embed this exact post:

https://x.com/circle/status/2023759340079927315

Official account:

@circle

The page must use the official X/Twitter embed mechanism where possible.

Load the official X embed script:

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Then embed the tweet using the official blockquote format.

Example structure:

<blockquote class="twitter-tweet">
  <a href="https://x.com/circle/status/2023759340079927315"></a>
</blockquote>

Then:

window.twttr?.widgets.load()

The embedded post must remain clickable so visitors can open the original X post.

Do not screenshot the tweet.

Do not recreate the tweet as HTML.

The visitor must be able to click through to X and verify it themselves.

12. OFFICIAL CIRCLE PROOF CARD

Next to the embed, create a small proof panel:

OFFICIAL PROOF

Posted by

@circle

Date

February 17, 2026

Subject

Bits × OpenMind × USDC

Then:

VIEW ORIGINAL ON X →

Link:

https://x.com/circle/status/2023759340079927315

Add a small verified-style visual indicator, but do NOT fake an X verification badge.

13. OPENMIND PROOF

Add another history card.

Title:

OPENMIND CONFIRMS IT

Text:

OpenMind also published its own post about the collaboration and autonomous robot payments.

Embed the official OpenMind X post:

https://x.com/openmind_agi/status/2023803927960187005

Official account:

@openmind_agi

Button:

VIEW ORIGINAL →

Link to the exact X post.

This provides independent confirmation from both sides of the collaboration.

14. THE ACTUAL DEMONSTRATION

Create a dramatic section titled:

HE PAID HIS OWN BILL.

Visual flow:

BITS
↓
LOW BATTERY
↓
FIND CHARGER
↓
USDC PAYMENT
↓
PAYMENT CONFIRMED
↓
RECHARGING
↓
GOOD BOY

Use animated arrows.

Use the supplied $BITS assets.

Add humorous UI:

BATTERY: 4%

Then:

PAYMENT REQUIRED

Then:

USDC SENT ✓

Then:

CHARGING...

Then:

100%

Finally:

GOOD BOY. 🐕
15. "WHY $BITS?" SECTION

Make this intentionally meme-like.

Three cards:

🐕 THE DOG

He doesn't need a human to swipe the card.

💵 THE MONEY

He pays with USDC.

🤖 THE FUTURE

Machines are learning how to transact.

Then a huge statement:

THE INTERNET GOT A DOG WITH A WALLET.
16. MEME WALL

Create a section:

BITS MEME MODE

Use the supplied images to create a gallery.

Cards:

$BITS
GOOD BOY
PAYMENT CONFIRMED
NO OWNER
NO LEASH
JUST USDC

Add hover effects.

Do not make it look like an NFT gallery.

Make it feel like a Crypto Twitter meme board.

17. FUNNY INTERACTIVE TERMINAL

Add a fake terminal panel:

BITS TERMINAL v1.0

> checking balance...

USDC BALANCE: $69.42

> charging station detected

> payment required

> sending USDC...

PAYMENT CONFIRMED ✓

> charging...

BATTERY: 100%

> good boy.

Make it animated line-by-line.

Add a button:

RUN BITS

When clicked, replay the terminal animation.

18. COMMUNITY SECTION

Title:

JOIN THE PACK 🐕

Copy:

The internet's first dog with a wallet.

Social media:

X ONLY

Do NOT add:

Discord
Facebook
Instagram
TikTok
LinkedIn

Only X.

Use a large X button.

If an X username is not provided yet, use a placeholder variable:

X_HANDLE

Do not invent a username.

19. BUY SECTION

Large CTA:

READY TO FEED THE DOG?

Subtitle:

He doesn't need dog food. He needs USDC.

Button:

BUY $BITS

Link:

https://radardex.pro

Open in new tab.

Add a small disclaimer:

Trading link provided by the community.

Do not imply RadarDex is affiliated with Circle or OpenMind.

20. CONTRACT ADDRESS

Create a dedicated card:

CONTRACT ADDRESS

Display:

COMING SOON

Button:

COPY CA

Since there is no CA yet:

Disable actual clipboard copy
Clicking should display:

"CA isn't born yet. Good things take time. 🐕"

When the CA is later added, make the component automatically support clipboard copying.

Use a single config variable:

const CONTRACT_ADDRESS = "COMING SOON";
21. FOOTER

Minimal.

Large $BITS logo.

Text:

THE DOG THAT PAYS ITS OWN BILLS.

Links:

Home
History
X
Buy

Then disclaimer:

$BITS is an independent community meme inspired by Bits, OpenMind's robot dog and the Circle × OpenMind autonomous payment demonstration. $BITS is not affiliated with, endorsed by, or issued by Circle or OpenMind.

Copyright:

© 2026 $BITS
22. DESIGN SYSTEM
Colors

Primary:

#0066FF
#008CFF
#00BFFF

Secondary:

#FFFFFF
#05070D
#0A1020

Use deep black/blue backgrounds.

Use bright electric blue for:

Buttons
Borders
Glow
Hover
Important text

Use white for typography.

23. TYPOGRAPHY

Use a bold modern display font.

Recommended:

Space Grotesk
Inter
Orbitron

Headlines should be extremely bold.

Memecoin typography should feel:

LOUD + FUN + PREMIUM

Avoid corporate typography.

24. ANIMATION

Use:

Framer Motion
CSS animations
subtle parallax
floating particles
neon glow
hover scaling
scroll reveal
animated counters
terminal typing effect
charging animation

Do NOT make animations excessive.

Performance is important.

Respect:

prefers-reduced-motion
25. RESPONSIVE DESIGN

Desktop:

Full cinematic hero
Large banner
Timeline
X embeds side-by-side

Tablet:

Two-column layouts where possible

Mobile:

Single column
Hero banner remains readable
$BITS logo remains dominant
X embeds full width
Timeline becomes vertical
Buttons become full width

Make sure the supplied 3:1 banner crops gracefully on mobile.

Do not destroy the mascot's face or $BITS typography when cropping.

26. TECH STACK

Use:

React
TypeScript
Vite
Tailwind CSS
Framer Motion
Lucide React

Use clean component architecture.

Suggested structure:

src/
├── assets/
│   ├── bits-logo.png
│   └── bits-banner.png
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MemeStatement.tsx
│   ├── WhatIsBits.tsx
│   ├── BitsHistory.tsx
│   ├── XProof.tsx
│   ├── PaymentDemo.tsx
│   ├── MemeWall.tsx
│   ├── BitsTerminal.tsx
│   ├── Community.tsx
│   ├── BuySection.tsx
│   ├── ContractCard.tsx
│   └── Footer.tsx
│
├── config/
│   └── project.ts
│
└── App.tsx
27. PROJECT CONFIG

Centralize configuration:

export const project = {
  name: "$BITS",

  tagline: "THE DOG THAT PAYS ITS OWN BILLS.",

  contractAddress: "COMING SOON",

  buyUrl: "https://radardex.pro",

  xUrl: "X_HANDLE",

  circleProof:
    "https://x.com/circle/status/2023759340079927315",

  openMindProof:
    "https://x.com/openmind_agi/status/2023803927960187005",
};

This makes future updates easy.

28. SEO

Title:

$BITS — The Dog That Pays Its Own Bills

Description:

$BITS — the meme inspired by Bits, the robot dog that used USDC to pay for its own recharge.

Keywords:

BITS
$BITS
Bits robot dog
OpenMind Bits
Circle Bits
USDC robot
USDC AI
agentic economy
robot dog crypto
AI agents
machine payments

Do not claim official affiliation.

29. OG IMAGE

Use the supplied original $BITS banner as the OG image.

Make sure metadata contains:

<meta property="og:title" content="$BITS — The Dog That Pays Its Own Bills" />

<meta
  property="og:description"
  content="I don't bark. I pay with USDC."
/>

<meta property="og:image" content="..." />

<meta name="twitter:card" content="summary_large_image" />

<meta
  name="twitter:title"
  content="$BITS — The Dog That Pays Its Own Bills"
/>
30. CRITICAL CONTENT RULE

The website's history must separate facts from meme narrative.

VERIFIED FACTS
Bits is an OpenMind robot dog.
Circle and OpenMind collaborated on autonomous AI transactions.
Circle's official X post explicitly mentions Bits.
Bits used USDC.
The demonstration involved machine-to-machine nanopayments.
The payment was used to recharge Bits.
MEME
$BITS
"The dog that pays its own bills."
"I don't bark. I pay."
"No owner. No leash. Just USDC."

Make the distinction clear.

31. X EMBED REQUIREMENT

This is NON-NEGOTIABLE.

The History page must contain real embedded X posts, not screenshots.

At minimum:

Official Circle
https://x.com/circle/status/2023759340079927315
Official OpenMind
https://x.com/openmind_agi/status/2023803927960187005

Both should be clickable and open the original X post.

The website visitor must be able to independently verify the source.

The official Circle post is the strongest primary proof because it explicitly identifies Bits and describes the USDC autonomous payment demonstration.

32. FINAL UX GOAL

When someone opens the website, the reaction should be:

"WAIT… THIS DOG ACTUALLY PAID FOR ITS OWN CHARGING?"

Then:

"Holy shit, there's an actual Circle X post proving it."

Then:

"$BITS is the meme."

The website should therefore tell a simple story:

DOG

↓

USDC

↓

AUTONOMOUS PAYMENT

↓

SELF-CHARGING

↓

MEME

↓

$BITS
Important implementation note

For the assets you supplied, use the actual original PNG files directly in the project. Do not transform them into JSON or recreate them. The logo should be used for favicon/branding, while the 3:1 artwork should be used as the hero/banner asset.

Also, because Circle's own brand guidelines say its logos should use approved assets without alteration, avoid modifying Circle/USDC logos from your artwork or presenting them as official $BITS branding.

The strongest proof to feature prominently is the official Circle X post: Circle — Bits × OpenMind official X post

And the independent OpenMind post: OpenMind — official X post

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c09cce08-6cf2-4d86-867d-b873ceef497e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
