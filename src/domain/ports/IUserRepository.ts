import { User } from "../entities/user";

export interface IUserRepository {
    save(user: User);
}