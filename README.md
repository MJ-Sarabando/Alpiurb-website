# Alpiurb — Website Institucional

Site institucional da [Alpiurb](https://www.alpiurb.pt), empresa especializada em reabilitação, manutenção e inspeção de fachadas por acesso por cordas.

## Stack

- **[Next.js](https://nextjs.org) 16** (App Router) — framework principal
- **[Sanity](https://www.sanity.io) v5** — CMS headless (Studio disponível em `/studio`)
- **[Resend](https://resend.com)** — envio de emails via formulário de contacto
- **[Tailwind CSS](https://tailwindcss.com) v4** — estilos
- **[cookies-next](https://github.com/andreizanik/cookies-next)** — gestão de consentimento de cookies
- **[Lucide React](https://lucide.dev)** — ícones
- **TypeScript**

## Componentes

| Componente | Descrição |
|---|---|
| `Navbar` | Barra de navegação |
| `Hero` | Secção principal com fotografia e CTA |
| `Features` | Destaques / pontos-chave da empresa |
| `Services` | Serviços oferecidos (dados via Sanity) |
| `Gallery` | Galeria de fotografias de obra |
| `Testimonies` | Testemunhos de clientes |
| `CTA` | Chamada para ação |
| `Contact` | Formulário de contacto (envia email via Resend) |
| `Footer` | Rodapé |
| `CookieBanner` | Aviso de cookies (RGPD) |

## Schemas Sanity

- `service` — serviços da empresa
- `statistic` — estatísticas / números de destaque
- `member` — membros da equipa

## Variáveis de Ambiente

Cria um ficheiro `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=
```

## Correr Localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) no browser.

O Sanity Studio está disponível em [http://localhost:3000/studio](http://localhost:3000/studio).

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run start    # servidor de produção
npm run lint     # linting
```

## Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com). É necessário que as variáveis de ambiente estejam configuradas nas definições do projeto na Vercel.
