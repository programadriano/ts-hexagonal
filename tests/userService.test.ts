import "reflect-metadata";
import { describe, beforeEach, test, expect, jest, it } from '@jest/globals'
import { User } from '../src/domain/entities/user';
import { UserService } from '../src/domain/services/userService';


import { container } from 'tsyringe';
import { UserRepository } from "../src/adapters/driven/repository/userRepository";

container.register(
    "IUserRepository", {
    useClass: UserRepository
})


describe("Test create user - ok", () => {
    it('should create a new user', async () => {
        let userService = container.resolve(UserService);
        var createUser = await userService.save(new User("Thiago S Adriano"));
        expect(createUser).toEqual("Usuario  Thiago S Adriano criado com sucesso!")
    });
});