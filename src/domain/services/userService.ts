import { injectable, inject } from "tsyringe";
import { User } from "../entities/user";
import { IUserRepository } from "../ports/IUserRepository";

@injectable()
export class UserService {

    constructor(@inject("IUserRepository") private _userRepository: IUserRepository) { }
    async get(): Promise<Array<any>> {
        return await this._userRepository.get();
    }

    async save(user: User): Promise<String> {
        return await this._userRepository.save(user);
    }

}