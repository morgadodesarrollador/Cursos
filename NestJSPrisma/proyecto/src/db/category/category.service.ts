import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor (private readonly dataPrisma: PrismaService){    }
    //son los métodos de la API generada por prisma
    async getMany() {
       return await this.dataPrisma.category.findMany();
        
    }
    async get() {
        return;
    }
    async create() {
        return;
    }
    async update() {
        return;
    }
    async delete() {
        return;
    }

}
