# Express REST API Boilerplate
A quick starter project for building REST APIs using Node.js & Express

## Features

- **Environment variables**: using [custom-env](https://github.com/erisanolasheni/custom-env)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Linting**: with [ESLint](https://eslint.org), [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), [Prettier](https://prettier.io), [Node](https://www.npmjs.com/package/eslint-config-node) and [Security](https://github.com/nodesecurity/eslint-plugin-security)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Getting Started

Clone the repo and make it yours:

```bash
git clone --depth 1 https://gitlab.com/fernandusfero/nodesample.git
cd nodesample
rm -rf .git
```

## Install Dependency
- npm install

## Set your environment variables:

```bash
# Can use for Dev
- env/.env.dev

# Can use for Prod
- env/.env.prod

# Create your own Env and add your scripts to package.json
- cp env/.env.example env/.env
```

## Run your project:

```bash
# Run Dev
- npm run start:dev

# Run  Prod
- npm run start:prod
```

## Other Commands
Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix

# run prettier
npm run prettier

# fix prettier errors
npm run prettier:fix
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

VS Code: Install the ESLint & Prettier extension to have better experience.

## Husky & lint-staged

Stop ourselves from committing, if the codes have ESLint & Prettier issues.

Install dependencies when switching branches.

### Editor config

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

VS Code: Install the Editor config extension, also a global module if not working `npm i -g editorconfig` once done restart VS Code.

## Inspirations

 - [ hagopj13/node-express-boilerplate ](https://github.com/hagopj13/node-express-boilerplate)
 
## License

Licensed under the [MIT License](LICENSE).
