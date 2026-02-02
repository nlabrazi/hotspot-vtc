# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#️-description">Description</a></li>
        <li><a href="#-planned-features">Planned Features</a></li>
        <li><a href="#️-built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#-getting-started">Getting Started</a>
      <ul>
        <li><a href="#-installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#-contributing">Contributing</a>
      <ul>
        <li><a href="#-license">License</a></li>
        <li><a href="#-contact">Contact</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
# 🚖 About The Project

<p align="center">
  <a href="https://hotspot-vtc.com">
    <img src="/app/assets/images/screenshot.png" alt="Screenshot" width="100%" height="400" />
  </a>
</p>

### ℹ️ Description

**Hotspot‑VTC** est une application (PWA) destinée aux chauffeurs VTC pour les aider à se positionner sur des **zones à fort potentiel** à Paris, en se basant sur des signaux comme les **événements** (concerts, spectacles…) et des informations publiques (phase 2 : trafic/transport), afin d’éviter les déplacements inutiles.

- 🗺️ Carte + heatmap par zones (cellules ~500m)
- 🔄 “Fake temps réel” : refresh auto (2 min) + bouton refresh (5 min)
- 🎯 Score 0–100 explicable (3 raisons)
- 👍/👎 Feedback chauffeur après arrivée en zone (cooldown 1h/zone)
- 🔐 Accès réservé aux comptes avec abonnement actif

---

## 🚀 Planned Features

- [x] MVP Paris : heatmap + top zones + détail zone
- [x] Auth + paywall (abonnement actif/inactif)
- [x] Score V1 (événements / distance / temps)
- [x] Feedback chauffeurs (thumbs up/down)
- [x] Résilience APIs (last-known-good + badge “données partielles”)
- [ ] Intégration données transport (SNCF/IDFM) (V2)
- [ ] Intégration plateformes (Uber/Bolt/Heetch…) (V2, uniquement via voies officielles)
- [ ] Packaging mobile via Capacitor (V1.5)
- [ ] Dash admin + analytics (V2)

---

### 🏗️ Built With

* [![Vue.js][Vue.js]][Vue-url]
* [![Nuxt.js][Nuxt.js]][Nuxt-url]
* [![TailwindCSS][TailwindCSS.js]][TailwindCSS-url]
* [![Docker][Docker.io]][Docker-url]
* [![PostgreSQL][PostgreSQL.js]][PostgreSQL-url]
* [![TypeScript][TypeScript.js]][TypeScript-url]
* [![Prisma][Prisma.io]][Prisma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# ✅ Getting Started

Ce projet utilise **Nuxt 3** (Vue 3), TailwindCSS, TypeScript, Prisma et PostgreSQL. Le développement local est pensé pour fonctionner via **Docker Compose**.

### 💻 Installation (Docker)

```bash
# 1. Clone le repo
git clone https://github.com/nlabrazi/hotspot-vtc.git
cd hotspot-vtc

# 2. Crée le .env depuis l’exemple
cp .env.example .env

# 3. Build + démarrage (Nuxt dev + Postgres)
docker compose up --build
```

- App : http://localhost:3000
- Postgres : localhost:6789

### 🔧 Prisma (migrations / seed)

```bash
# Ouvrir un shell dans le container app
docker compose exec app sh

# (1) Générer le client prisma (si nécessaire)
npx prisma generate

# (2) Créer une première migration (dev)
npx prisma migrate dev --name init

# (3) Lancer un seed (si vous en ajoutez un)
npx prisma db seed
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
# 🙌 Contributing

We welcome all contributions! 🛠️ Whether it's fixing a typo, improving documentation, or suggesting a new feature — **every little bit helps**.

To contribute:
1. 🍴 Fork the repo
2. 🔧 Create a feature branch (`git checkout -b feat/my-feature`)
3. 💬 Commit your changes (`git commit -m "feat: add my feature"`)
4. 🚀 Push to your fork (`git push origin feat/my-feature`)
5. 📨 Open a pull request

Thanks a lot for your support! 💙

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
### 📄 License

This project is licensed under the **MIT License** 📜.
You're free to use, modify, and distribute it — just remember to give credit 🤝.

See the full license in [`LICENSE.txt`](https://en.wikipedia.org/wiki/MIT_License) for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
### 📬 Contact

- 👤 [Linkedin][linkedin-url]
- 🐦 [@Nabil](https://twitter.com/Nabil71405502)
- 📧 na.labrazi@gmail.com
- 🔗 [Portfolio](https://nabil-labrazi.fr)
- 📁 [Project Repository](https://github.com/nlabrazi/hotspot-vtc)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/nlabrazi/hotspot-vtc.svg?style=for-the-badge
[contributors-url]: https://github.com/nlabrazi/hotspot-vtc/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nlabrazi/hotspot-vtc.svg?style=for-the-badge
[forks-url]: https://github.com/nlabrazi/hotspot-vtc/network/members
[stars-shield]: https://img.shields.io/github/stars/nlabrazi/hotspot-vtc.svg?style=for-the-badge
[stars-url]: https://github.com/nlabrazi/hotspot-vtc/stargazers
[issues-shield]: https://img.shields.io/github/issues/nlabrazi/hotspot-vtc.svg?style=for-the-badge
[issues-url]: https://github.com/nlabrazi/hotspot-vtc/issues
[license-shield]: https://img.shields.io/github/license/nlabrazi/hotspot-vtc.svg?style=for-the-badge
[license-url]: https://github.com/nlabrazi/hotspot-vtc/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nabil-labrazi

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Nuxt.js]: https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=fff
[Nuxt-url]: https://nuxt.com/
[TailwindCSS.js]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[TypeScript.js]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Docker.io]: https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[PostgreSQL.js]: https://img.shields.io/badge/postgresql-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Prisma.io]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
