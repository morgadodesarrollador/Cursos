import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    async getMany() {
        return [{
            id: '111',
            createdAt: new Date(),
            updatedAt: new Date(),
            name: 'Categoria 1 de Prueba'
        },
        {
            id: '222',
            createdAt: new Date(),
            updatedAt: new Date(),
            name: 'Categoria 2 de Prueba'
        }
    ];
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
