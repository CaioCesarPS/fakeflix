# Prisma Commands

## Generate Prisma Client (use only for development)
```bash
npx prisma db push
```

## Generate Prisma Client (use only for production, it will generate types)
```bash
npx prisma generate
```

## Create a new migration
```bash
npx prisma migrate dev --name <migration-name>
```

## Apply the migration
```bash
npx prisma migrate deploy
```

## Reset the database
```bash
npx prisma migrate reset
```

## Seed the database
```bash
npx prisma db seed
```
# DDD

## Domain

O que aquele código deve resolver

## Bounded Context

São contextos que são ligados de alguma maneira

## Core

Normalmente é onde está a business logic do negocio

## DAO - Data Access Object

É uma função que mapeia um objeto e acessa o banco de dados e retorna.

## Repository

Lida com entidades, um repository pode acessar chamar um DAO