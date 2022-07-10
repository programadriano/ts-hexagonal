import { Name } from "../valueObjects/name";

export class User {

    /**
     *
     */
    constructor(name: string) {
        this.Name = new Name(name);
    }

    getName(): string {
        return this.Name.value;
    }

    private Name: Name;
}