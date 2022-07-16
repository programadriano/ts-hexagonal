import { User } from "../entities/user";

export interface IUserRepository {
    get(): Array<User>;
    save(user: User): string;
}