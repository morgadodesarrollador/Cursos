import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
async function main (){
    await prisma.category.create({
        data: {
            name:'categoria de ejemplo',
            questions: {
                create: [
                    {
                        content: 'contenido de la pregunta1 '
                    },
                    {
                        content: 'contenido de la pregunta2 '
                    }
                ]
            }
        }
    })
    //await prisma.category.deleteMany();
    //await prisma.category.create({
    //    data:{
    //        name: 'categoria ejemplo'
    //    }
    //})
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })

