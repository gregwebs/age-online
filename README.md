# age-online

A fully in-browser tool to encrypt and decrypt data with [age](https://age-encryption.org/).

All cryptography runs client-side via [typage](https://github.com/FiloSottile/typage/). No data leaves your browser.

## TODO

- [x] MVP: encrypting data
- [x] decrypting data
- [x] make it pretty
- [x] load a file by dragging it onto the plaintext input
- [ ] encrypt/decrypt files (download encrypted output as a file)
- [ ] use github keys (supported by `age`)

## Tech stack

- [Preact](https://preactjs.com/) + TypeScript
- [Vite](https://vitejs.dev/) (bundler)
- Deployed to [GitHub Pages](https://pages.github.com/)

## Development

```sh
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:5173` by default. If local TLS certificates (`*.pem`) are present in the project root, the server will use HTTPS automatically.

## Build

```sh
pnpm build
```

Output goes to `dist/`.

## Deployment

The app is deployed to GitHub Pages by the
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow on every
push to `main`. To enable it, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions** in the repository.

Because it is served from a project sub-path
(`https://<user>.github.io/age-online/`), the Vite `base` defaults to
`/age-online/` for production builds. When deploying elsewhere (e.g. a custom
domain or a fork with a different repo name), override it via the `BASE_PATH`
environment variable:

```sh
BASE_PATH=/ pnpm build
```
