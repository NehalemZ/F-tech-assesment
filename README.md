## F-tech-assesment

A webpage that submits a batch form

## Getting started
Make sure you downloaded all related repository
To start the main page:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
suggest npm run dev

The page will run on http://localhost:3000

To start on Docker, run Docker and use command: 

```bash
docker build -t docker-next .

docker run docker-next -p 3000:3000 -v /app/node_modules -v .:/app
```

# For PostgresSQL 

In this case I'm using the remote vercel storage, so this way may not useful locally:

```bash
npx prisma studio
```

Environment variables loaded from .env

Prisma schema loaded from prisma\schema.prisma

Prisma Studio is up on http://localhost:5555

## Currently Done
frontend page has finished

batch data created

dockfile added

submittion logic implement

Implemented Prisma as ORM for querying the PostgreSQL database.

Defined database schema using Prisma's schema file.

Dockerfile and Docker compose file has added.

# Existing problems

Cannot find proper svg file for logo, so a cilp of screenshot is used instead, may cause some color difference.

Issues occurred when initializing Docker on my PC, so test use of docker is missed in current condition.

# Possible future action

There are no error catching on batch uploading, considering future implement of input data check.

Test running the project in Docker

Test Docker compose
