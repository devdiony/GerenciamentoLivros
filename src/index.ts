import express from 'express'
import dotenv from 'dotenv'
import authRouters from './router/routes'
import {PrismaClient} from '@prisma/client'

dotenv.config()

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json()); // Para processar o body das requisições
app.use('/api', authRouters) //Utilizando Router

//Função para Popular o banco de dados
async function popularBancoDeDados() {
  try {
    await prisma.livro.createMany({
      data: [
        { titulo: 'A Arte da Guerra', autor: 'Sun Tzu', anoPublicacao: -500, genero: 'Estratégia' },
        { titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', anoPublicacao: 1532, genero: 'Filosofia Política' },
        { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', anoPublicacao: 1937, genero: 'Fantasia' },
        { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', anoPublicacao: 1954, genero: 'Fantasia' },
        { titulo: 'O Silmarillion', autor: 'J.R.R. Tolkien', anoPublicacao: 1977, genero: 'Fantasia' },
      ],
      //skipDuplicates: true, // Evita erros se os livros já existirem
    });
    console.log('Banco de dados populado com sucesso!');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
}

//Chama função que alimenta o banco de dados
(async () => {
  await popularBancoDeDados();
})();

//Endpoint de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de gerenciamento de livros!');
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


