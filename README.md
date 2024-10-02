# Elemental Game

## Setup
```bash
npm install -g pnpm
pnpm install
```
- [PixiJS Devtools](https://chromewebstore.google.com/detail/pixijs-devtools/aamddddknhcagpehecnhphigffljadon)

## Develop

```bash
pnpm site dev
# or
pnpm app dev
```

### https on localhost

For it need install [mkcert](https://github.com/FiloSottile/mkcert)

```bash
pnpm mkcert
pnpm app dev
```

## QA

```bash
pnpm --recursive format
pnpm --recursive lint
```

## Build & release

### Check pre-release

```bash
pnpm start
```

### Release

```bash
pnpm release
```
