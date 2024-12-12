import { Request,Response } from 'express';
// import {v4 as uuidv4 } from 'uuid'
import { Prisma, PrismaClient } from '@prisma/client'
import {ErrorRequest} from '../utils/TratamentoErros'

const prisma = new PrismaClient()

//**********************************************************************************************/
export const create = async (request: Request, response: Response) => {
    const {titulo, autor, anoPublicacao, genero} = request.body
    try {
        const result = await prisma.livro.create({
            data:{
                titulo: titulo,
                autor: autor,
                anoPublicacao: anoPublicacao,
                genero: genero
            }
        })
        response.status(201).send({
            message: 'Metodo HTTP: Livro criado com sucesso.',
            livro: result,
        })
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code);
            response.status(409).json({
                error: {
                        message: ErrorRequest.errorRequest(error.code),
                        field: error.meta,
                },
            });
        }
    }
};
//********************************************************************************************* */
export const researchAll = async (request: Request, response: Response) => {
    try {
        const result = await prisma.livro.findMany({})
        response.status(200).json(result)
        console.log(result)
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error: {
                        message: ErrorRequest.errorRequest(error.code),
                        field: error.meta
                },
            });
        }
    }
};
//********************************************************************************************* */
export const researchId = async (request: Request, response: Response) => {
    const id = request.params.id
    try {
        const result = await prisma.livro.findUnique({
            where:{
                id: Number(id)
            },
        });
        if (!result){
            response.status(404).json({message: 'Livro Não Encontrado'});
        } else {
            response.status(200).json(result);

        }

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error: {
                        message: ErrorRequest.errorRequest(error.code),
                        field: error.meta
                },
            });
        }
    }
};
//********************************************************************************************* */
export const update = async (request: Request, response: Response) => {
    const id = request.params.id
    const {titulo, autor, anoPublicacao, genero} = request.body;

    try {
        const result = await prisma.livro.update({
            where:{ id: Number(id)},
            data :{
                titulo : titulo,
                autor : autor,
                anoPublicacao : anoPublicacao,
                genero : genero
            },
        });
        console.log(result)
        response.status(200).json(result)
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code)
            response.status(409).json({
                error: {
                        message: ErrorRequest.errorRequest(error.code),
                        field: error.meta
                },
            });
        }
    } 
};
//********************************************************************************************* */
export const deleted = async (request: Request, response: Response) => {
    const id = request.params.id
    try {
        const result = await prisma.livro.delete({
            where : {id: Number(id) },
        });
        response.status(200).json({
            message: 'Livro deletado com sucesso',
            livro: result,
        });
    
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            console.log(error.code);
            response.status(409).json({
                error: {
                        message: ErrorRequest.errorRequest(error.code),
                        field: error.meta,
                },
            });
        }
    } 
    
};