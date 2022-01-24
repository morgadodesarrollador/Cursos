import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            //para tener la captura de los datos a través de la url de graphql
            introspection: true,
            //genera automáticamente el fichero schema de graphql -->api-schema.gql
            autoSchemaFile: join(process.cwd(), 'src/core/graphql/api-schema.gql'),
        })
    ]
})
export class GraphqlModule {}
