import "reflect-metadata";
import { describe, beforeEach, test, expect, jest, it } from '@jest/globals'
import { User } from '../src/domain/entities/user';


describe("Test create user - error", () => {
    it('should throw an error user cant be empty', async () => {
        expect(() => new User("")).toThrow('O campo nome é obrigatório.');
    })

    it('should throw an error user needs has more 3 characters', () => {
        expect(() => new User("Th")).toThrowError('Nome deve ter mais de 3 caracteres.');
    })
});
