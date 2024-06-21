<div align="center">
  <i><h1>⚛️ RVTGB</h1></i>
</div>

> ℹ️ RVTGB stands for **React Vite TypeScript Generouted Biome**.

# About
This starter template is a minimal setup to get React working with:
- ⚡ [Vite](https://vitejs.dev)
- 🔷 [TypeScript](https://typescriptlang.org)
- 📁 [Generouted](https://github.com/oedotme/generouted) — For the file-based routing
- 📝 [Biome](https://biomejs.dev) — Code formatter and linter

Also some additional development tools:
- 🔤 [Commitlint](https://commitlint.js.org) — Make sure the commit messages are well formatted
- 🐶 [Husky](https://typicode.github.io/husky) — A git hooks
- 📋 [Lint Staged](https://github.com/lint-staged/lint-staged) — Running some scripts before committing

> 💡 Check out [this template](https://github.com/up2dul/rvtb) instead if you prefer to use the same template without any routing library installed.

# Getting Started

## Clone this template
Clone this template using one of the following methods:

### 1. Use this repository as a template
Click the "**Use this template**" button on the top of this page to create a new repository based on this template.

![image](https://github.com/up2dul/rvtgb/assets/36098718/2e0c39cb-ec4e-4d69-a94c-c4ebde805487)

> **Disclosure**: by using this repository as a template, there will be an attribution on your repository.

### 2. Clone this repository
```bash
git clone https://github.com/up2dul/rvtgb.git

# or if you have SSH keys setup
git clone git@github.com:up2dul/rvtgb.git
```

### 3. Using degit
[degit](https://github.com/Rich-Harris/degit) is a tool that allows you to quickly create a new repository based on an existing one.

```bash
npx degit up2dul/rvtgb my-new-project
```

## Usage
> Requires [Node.js](https://nodejs.org) `>=18.x`. And [pnpm](https://pnpm.io) `>=8.x` is recommended as the package manager.

### Install dependencies
Make sure you have already in the project directory.
```bash
pnpm install
```

### Run the development server
Start the development server by running the following command, and the application will be available at [http://localhost:5173](http://localhost:5173).
```bash
pnpm dev
```

# Additional informations
- Absolute paths aliases with `~`. Edit the `vite.config.ts` and `tsconfig.json` files if you want to change the aliases.
- The `src/pages` directory is the default directory for the pages, check out the [Generouted](https://github.com/oedotme/generouted) documentation for more details.
- This project is using Biome as the code formatter and linter instead of ESLint with Prettier. Edit the `biome.json` to change the configuration based on your needs, by checking out the [Biome](https://biomejs.dev) for more details.
