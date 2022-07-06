# react-ts-boilerplate

Boilerplate with default configuration react typescript project based on vite.

## Features

1. Eslint
2. Prettier
3. [Husky](#husky)
4. [Environments variables](#environments-variables)
5. Unit tests

## Husky

- `pre-commit` - before commit automatically lint your code using eslint and prettier and run unit tests
- `pre-push` - before push automatically lint your code, run unit tests and check branch convention naming based on regex `'(feat|fix)\/.{1,30}$'` e.g. `feat/boilerplate`
- `commit-msg` - before commit automatically checking your commit name based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) documentation

## Environments variables

For development mode

```
cp .env .env.local
```

For production mode

```
cp .env.production .env.production.local
```
