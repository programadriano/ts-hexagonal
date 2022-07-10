import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/ports/IUserRepository";

export class UserRepository implements IUserRepository {

    save(user: User) {
        console.log(`Usuario: ${user.getName()}`)
    }

}