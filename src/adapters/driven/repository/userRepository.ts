import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/ports/IUserRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export class UserRepository implements IUserRepository {

    async get(): Promise<Array<any>> {
        const users = await prisma.user.findMany({});
        console.log(users);

        return users;
    }

    async save(user: User): Promise<string> {

      var result = await prisma.user.create({
            data: {
                name: user.getName()
            },
        })

        console.log(result);

        return `Usuario  ${user.getName()} criado com sucesso!`;
    }


}

