# F-tech-assesment

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

#For PostgresSQL 

In this case I'm using the remote vercel storage, so this way may not useful locally:

npx prisma studio

Environment variables loaded from .env

Prisma schema loaded from prisma\schema.prisma

Prisma Studio is up on http://localhost:5555

## Currently Done
frontend page has finished
batch data created
dockfile added
submittion logic

Implemented Prisma as ORM for querying the PostgreSQL database.

Defined database schema using Prisma's schema file.


## TO DO
Test running the project in Docker

Test Docker compose
