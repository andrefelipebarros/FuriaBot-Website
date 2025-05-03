# FURIA CS\:GO Bot – Landing Page Next.js

![FURIA Logo](https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png?20221021154128)


Uma landing page simples em **Next.js** para apresentar os bots de acompanhamento de partidas da FURIA Esports (CS\:GO) no **Telegram** e no **Discord**.

---

## 📋 Sumário (PT‑BR)

* [Sobre o Projeto](#-sobre-o-projeto)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias](#-tecnologias)
* [Pré-requisitos](#-pré-requisitos)
* [Instalação](#-instalação)
* [Executando Localmente](#-executando-localmente)
* [Deploy](#-deploy)
* [Estrutura de Pastas](#-estrutura-de-pastas)
* [Contribuição](#-contribuição)
* [Licença](#-licença)

---

## 🔍 Sobre o Projeto

Este repositório contém uma landing page criada com **Next.js** e **Tailwind CSS**, que apresenta os bots (beta) oficiais da FURIA Esports para acompanhar partidas de CS\:GO via Telegram e Discord.

O site oferece:

* Destaque de funcionalidades (alertas de partidas, estatísticas de jogadores, resultados ao vivo)
* Descrição detalhada de cada plataforma (Telegram e Discord)
* Navegação multilíngue usando rota dinâmica `[lang]` e dicionários JSON

---

## ⚙️ Funcionalidades


1. **Suporte multilíngue** (via rota dinâmica `[lang]` e arquivos em `/dictionaries`)
2. **Links diretos** para:

   * Bot Telegram (`https://t.me/FuriaEsports_bot`)
   * Adicionar bot ao Discord (`https://discord.com/oauth2/authorize?client_id=1368187160427102330&permissions=8&integration_type=0&scope=bot`)

---

## 🚀 Tecnologias

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide‑React](https://lucide.dev/) (ícones)
* JavaScript / TypeScript

---

## 🛠️ Pré-requisitos

* Node.js ≥ 16.x
* pnpm instalado globalmente: `npm install -g pnpm`

---

## 🔧 Instalação

1. Clone este repositório

   ```bash
   git clone https://github.com/seu-usuario/furia-csgo-bot-landing.git
   cd furia-csgo-bot-landing
   ```

2. Instale as dependências (apenas **pnpm**):

   ```bash
   pnpm install
   ```

3. (Opcional) Crie arquivo de variáveis de ambiente

   ```bash
   cp .env.example .env.local
   ```

---

## 📦 Executando Localmente

Para rodar em modo de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:3000/pt-BR](http://localhost:3000/pt-BR) ou `/en` para teste de idioma.

---

## 🗂️ Estrutura de Pastas

```
/ (raiz)
├── .next/
├── app/
│   ├── components/
│   ├── [lang]/           ← Rota dinâmica para tradução
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx          ← Redireciona para `/pt-BR` ou `/en`
├── components/
│   └── Navbar.tsx
├── dictionaries/          ← Arquivos de tradução JSON
│   ├── en.json
│   └── pt-BR.json
├── hooks/
├── lib/
│   └── dictionaries.ts    ← Função `getDictionary(lang)`
├── public/
│   ├── furia-bot-interface.png
│   ├── furia-discord-stats.png
│   └── stylized-furia-logo.png
├── styles/
│   └── globals.css
├── .env.example
├── next.config.mjs
├── package.json
└── tailwind.config.ts
```

---

## 🤝 Contribuição

1. Fork este repositório
2. Crie uma branch feature: `git checkout -b feature/nome-da-feature`
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`
4. Envie para a branch principal: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

# FURIA CS\:GO Bot – Landing Page Next.js (ENGLISH)

A simple **Next.js** landing page showcasing FURIA Esports CS\:GO match‑tracking bots on **Telegram** and **Discord**.

## 📋 Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Requirements](#requirements)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Deployment](#deployment)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)

---

## Project Overview

This repo hosts a **Next.js** + **Tailwind CSS** landing page for FURIA Esports CS\:GO bots on Telegram and Discord.

It includes:

* Highlighted features (match alerts, player stats, live results)
* Platform-specific details for Telegram & Discord
* Multilingual routing via dynamic `[lang]` folders and JSON dictionaries

---

## Features

1. **Match Alerts**
2. **Player Statistics**
3. **Live Results**
4. **i18n Support** through dynamic `[lang]` routing and `/dictionaries` JSON files
5. **Direct links** to:

   * Telegram Bot (`https://t.me/FuriaEsports_bot`)
   * Add to Discord

---

## Tech Stack

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide‑React](https://lucide.dev/) for icons
* JavaScript / TypeScript

---

## Requirements

* Node.js ≥ 16.x
* pnpm installed globally: `npm install -g pnpm`

---

## Installation

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/furia-csgo-bot-landing.git
   cd furia-csgo-bot-landing
   ```

2. Install dependencies (using **pnpm** only):

   ```bash
   pnpm install
   ```

3. (Optional) Copy environment variables

   ```bash
   cp .env.example .env.local
   ```

---

## Running Locally

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) or `/pt-BR` to test languages.

---


## Folder Structure

```
/ (root)
├── .next/
├── app/
│   ├── components/
│   ├── [lang]/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navbar.tsx
├── dictionaries/
│   ├── en.json
│   └── pt-BR.json
├── hooks/
├── lib/
│   └── dictionaries.ts
├── public/
│   ├── furia-bot-interface.png
│   ├── furia-discord-stats.png
│   └── stylized-furia-logo.png
├── styles/
│   └── globals.css
├── .env.example
├── next.config.mjs
├── package.json
└── tailwind.config.ts
```

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---
