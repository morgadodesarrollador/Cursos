import { Args, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './model/category';

//resuelve el modelo Category
@Resolver(() => Category) 
export class CategoryResolver {

    constructor (private readonly categoryService: CategoryService) {

    }
    //--- tipo raiz Query --- accion: categories() ---- Object Type: Category
    @Query(() => [Category])
    async categories(){
       return await this.categoryService.getMany()
    }
    //--- tipo raiz Query --- accion: category() ---- Object Type: Category
    @Query(() => Category) 
    //pasamos los argumentos   usando el decorador de atributos @Args --> id es el input
    async category(
        @Args('id') 
        id:string,)
    {
        return await this.categoryService.get(id)
    }
}
