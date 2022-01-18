import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './db/category/category.module';

@Module({
  imports: [CoreModule, CategoryModule],

})
export class AppModule {}
