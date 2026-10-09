# FourthWave

The FourthWave company website. Project documentation lives in [docs/PROJECT.md](docs/PROJECT.md).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Contact form email

The contact form posts to `/api/contact`, which sends the message by email
through [Resend](https://resend.com). It needs three server-only environment
variables: copy `.env.example` to `.env.local` and fill them in. Until they
are set, the form tells visitors the message could not be sent.
