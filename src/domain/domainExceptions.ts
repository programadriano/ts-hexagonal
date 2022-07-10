export class DomainException implements Error {
    name: string;
    message: string;
    stack?: string;

    /**
     *
     */
    constructor(message: string) {
        throw new Error(message);

    }


}

