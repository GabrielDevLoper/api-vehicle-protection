# Sistema para uma empresa de proteção veicular.

### Para testar as rotas com os endpoints prontos, irei deixar na raiz do projeto um arquivo para ser importado no insomnia.

Passos para executar este projeto, siga os passos a seguir:

1. Execute os comando `npm i ou yarn`
2. Configure as credencias do banco e da aplicação na .env
3. Execute os comando `npm run dev ou yarn dev`
4. Execute os comando `npm run test ou yarn test` para executar os testes.

Passos para executar o projeto utilizando o docker, siga os passos a seguir:

1. Configure a variavel na .env
2. DB_HOST=postgres
4. Execute o comando `docker-compose up -d`
5. Para acessar os endpoints da aplicação acessar a url: `http://localhost:3333`

Techs que foram utilizadas para o desenvolvimento desta aplicação

1. Typescript
2. HapiJS
3. TypeORM
4. PostgresSQL
5. Jest
6. hapi/boom 

