import { injectable, inject } from "tsyringe";
import { User } from "../entities/user";
import { IUserRepository } from "../ports/IUserRepository";

@injectable()
export class UserService {

    constructor(@inject("IUserRepository") private _userRepository: IUserRepository) { }
    get(): Array<User> {
        return this._userRepository.get();
    }

    save(user: User): String {
        return this._userRepository.save(user);
    }

}