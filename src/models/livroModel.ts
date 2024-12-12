import { UUID } from "crypto";

// Define a interface para o modelo Livro
interface Livro {
    id: string; // Identificador único (UUID)
    titulo: string; // Título do livro
    autor: string; // Nome do autor
    anoPublicacao: number; // Ano de publicação
    genero: string; // Gênero literário
}

// Array para armazenar livros (se necessário, por exemplo, para um mock)
let livros: Livro[] = [];

// Exporta a interface e o array
export { Livro, livros };
