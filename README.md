Atividade: N2 Arquitetura e Desenho de Software
Nome: Gerenciamento de Livros - CRUD com express, Prisma e SQLite
Aluno: Diony Tarso Ferreira Filho.
API REST para Gerenciamento de Livros com Node.js, Express e Prisma

Breve descrição do projeto: API para gerenciar livros de uma biblioteca.
Tecnologias utilizadas: Node.js com Express.js para a API e Prisma ORM com SQLite para o banco de dados.
Endpoints da API:

Listar todos os livros:
Método HTTP: GET
Rota: /api/livros
Funcionalidade: Retorna uma lista com todos os livros cadastrados.
Buscar livro por ID:
Método HTTP: GET
Rota: /api/livros/:id
Funcionalidade: Retorna o livro com o ID especificado.
Cadastrar novo livro:
Método HTTP: POST
Rota: /api/livros
Funcionalidade: Cadastra um novo livro com os dados fornecidos.
Atualizar livro:
Método HTTP: PUT
Rota: /api/livros/:id
Funcionalidade: Atualiza os dados do livro com o ID especificado.
Excluir livro:
Método HTTP: DELETE
Rota: /api/livros/:id
Funcionalidade: Exclui o livro com o ID especificado.
Prisma com SQLite:

O que é o Prisma: ORM (Object-Relational Mapper) que facilita a interação com o banco de dados.
Vantagens do Prisma:
Define o esquema do banco de dados em um único arquivo (schema.prisma).
Gera o código do cliente para interagir com o banco de dados (Prisma Client).
Simplifica as operações de CRUD (Create, Read, Update, Delete).
SQLite: Banco de dados leve e sem servidor, ideal para projetos simples e desenvolvimento.
Demonstração do schema.prisma: Mostrar o modelo Livro e os seus campos.
Funcionalidades da API:

Cadastrar livros com título, autor, ano de publicação e gênero.
Listar todos os livros cadastrados.
Buscar livros por ID.
Atualizar os dados de livros existentes.
Excluir livros do banco de dados
