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
    it('should create a new user', () => {
        let userService = container.resolve(UserService);
        var createUser = userService.save(new User("Thiago S Adriano"));
        expect(createUser).toEqual("Usuario: Thiago S Adriano")
    });
});


describe("Test create user - error", () => {

    it('should throw an error user cant be empty', () => {
        let userService = container.resolve(UserService);
        expect(() => userService.save(new User(""))).toThrowError('O campo nome é obrigatório.');

    })

    it('should throw an error user needs has more 3 characters', () => {
        let userService = container.resolve(UserService);
        expect(() => userService.save(new User("Th"))).toThrowError('Nome deve ter mais de 3 caracteres.');

    })

});
