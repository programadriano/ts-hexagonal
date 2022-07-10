import { injectable, inject } from "tsyringe";
import { User } from "../entities/user";
import { IUserRepository } from "../ports/IUserRepository";

@injectable()
export class UserService {

    constructor(@inject("IUserRepository") private _userRepository: IUserRepository) { }

    save(user: User) {
        this._userRepository.save(user);
    }

}