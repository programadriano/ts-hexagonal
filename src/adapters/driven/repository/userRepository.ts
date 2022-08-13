import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/ports/IUserRepository";


export class UserRepository implements IUserRepository {

    private _user = new Array<User>();

    get(): Array<User> {
        return this._user;
    }

    save(user: User): string {
        this._user.push(user);
        return `Usuario: ${user.getName()}`;
    }

}