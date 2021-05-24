## Teste para estágio de desenvolvedor back-end na Voxus

[Link do projeto zipado no Google Drive](googledrive.com/link)

[Quadro do projeto no Trello](https://bit.ly/2TfwkV1)

Database model:
<h1>
  <img alt="Database Model" title="db-model" src=".github/db.png" width="300px" />
</h1>

### Project installation guide/details:

- Create a PostgreSQL database and put the credentials in the .env file (fill the other 4 variables there as well).

- Before perfoming any I/O operation in the database, execute the command below in your db console.
(This will provide functions to the database to generate the uuids):
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

- You can find the Insomnia requests collection inside the .github folder.

- Run yarn in your terminal to install the dependencies.

- Run yarn knex migrate:latest to create the tables in the database.

- Run yarn knex seed:run to create the seeds in the database.
