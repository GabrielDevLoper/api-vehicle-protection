# Sistema para uma empresa de proteção veicular.

### Para testar as rotas com os endpoints prontos, irei deixar na raiz do projeto um arquivo para ser importado no insomnia(software que usei para testar as rotas).

Passos para executar este projeto, siga os passos a seguir:

1. Execute os comando `npm i ou yarn`, para baixar as dependências da aplicação.
2. Configure as credencias do banco e da aplicação na .env
3. Execute os comando `npm run dev ou yarn dev`, para deixar a aplicação rodando.
4. Execute os comando `npm run test ou yarn test`, para executar os testes.

Passos para executar o projeto utilizando o docker, siga os passos a seguir:

1. Configure a variavel na .env
2. DB_HOST=postgres
4. Execute o comando `docker-compose up -d`, para baixar as imagens e levantar os containers do banco e da api.
5. Para acessar os endpoints da aplicação acessar a url: `http://localhost:3333`

Techs que foram utilizadas para o desenvolvimento desta aplicação

1. Typescript
2. HapiJS
3. TypeORM
4. PostgresSQL
5. Jest
6. hapi/boom 


Implementar feature:

1. Autentição dos clientes com JWT
2. Todos os usuários(clientes e terceiros) precisam ter documentos associados as suas contas.
3. Validar os campos do request ao enviar uma requisição UTILIZAR JOI.

