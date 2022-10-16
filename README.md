### Trpc API

A trpc starter API KIT developed with TRPC, Typescript, Prisma, Express and Postgres.

## Getting Started

### Prerequisites

- Node.js 14+ (Npm, Yarn)
- Postgres
- Prisma
- Docker installed on your machine

### Installation

1. Clone the repo

```sh
git clone https://github.com/E-wave112/trpc-api.git
```

2. Install NPM packages

```sh
yarn 
```

3. Create a .env file in the root directory and add the following

```sh
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE?schema=public"
TRPC_SECRET="YOUR_SECRET"
PORT=7000
```

4. Start the docker container for our database

```sh
docker-compose up -d
```

5. Run the migrations

```sh
npx prisma migrate dev --name <your migration name here> --preview-feature
```

6. Start the server

```sh
yarn dev:server
```

Access the API at http://localhost:7000 and trpc playground at http://localhost:7000/api/trpc-playground

