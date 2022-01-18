import { Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './model/category';

@Resolver(() => Category)
export class CategoryResolver {

    constructor (private readonly categoryService: CategoryService) {

    }
    //resuelve un array de categorias
    @Query(() => [Category])
    async categories(){
       return await this.categoryService.getMany()
    }
}
