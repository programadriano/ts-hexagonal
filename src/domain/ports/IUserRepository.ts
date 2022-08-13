import { User } from "../entities/user";

export interface IUserRepository {
    get(): Promise<Array<any>>;
    save(user: User): Promise<string>;
}