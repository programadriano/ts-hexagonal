import "reflect-metadata";
import { container } from 'tsyringe'
import { UserRepository } from "../../repository/userRepository";

container.register(
    "IUserRepository", {
    useClass: UserRepository
})
