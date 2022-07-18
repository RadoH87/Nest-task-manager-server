<h1 align="center">🔥 Task-Manager-Backend 🔥</h1>
<hr/>

### Project currently in progress 👷‍♂️

## WHAT YOU CAN DO WITH IT?
<hr/>

- You can add/remove tasks.
- You can create User account.
- You can login and register.
- As a admin you can manage all users and tasks.
<br/>

## 🚀PURPOSE OF CREATING THE APP🚀

I made this APP to learn Nest.js and typeORM Databases. This application helped me understand and deepen my knowledge of how powerful Nest js is and how quickly you can build a fantastic backend.
<br/>

## TECH STACK:

<div align="center">
<a href="https://dev.mysql.com/doc/" target="_blank">
<img src=https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white style="margin-bottom: 5px;" />
</a>
<a href="https://nestjs.com/" target="_blank">
<img src=https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white style="margin-bottom: 5px;" />
</a>
<a href="https://www.typescriptlang.org/docs/" target="_blank">
<img src=https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white style="margin-bottom: 5px;" />
</a>
<a href="https://jwt.io/introduction" target="_blank">
<img src=https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white style="margin-bottom: 5px;" />
</a>
<a href="https://typeorm.io/" target="_blank">
<img  src="https://camo.githubusercontent.com/5654be8d2a6cdf01e9cf64214cd107a5c8de5f97bc930d816f153771c01a0151/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f747970656f726d2e737667" alt="typeorm" data-canonical-src="https://cdn.svgporn.com/logos/typeorm.svg" style="width: 40px;" style="height:30px;" />
</a> 
</div>  
<br/>
<br/>

## TODO:
- deployment and migration DB
- forgot password - send email with code to reset password.
- finish password hashing process then comper the email, to let users login to prevent holding plain data   password in DB.
- Snapshot testing with Jest.
- Testing coverage report.
- Endpoint testing.
<br/>
<br/>
  
## NestJs DataBase Configuration

Provide MySQL Parameters
in .env file accordingly :

```bash
DATABASE_HOST
DATABASE_PORT
DATABASE_USERNANE
DATABASE_PASSWORD
DATABASE_NAME
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

