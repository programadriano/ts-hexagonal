export class Name {

    constructor(name: string) {
        this.value = name;
        if (this.value == "") {
            validate('O campo nome é obrigatório.');
        }

        if (this.value.length < 3) {
            validate('Nome deve ter mais de 3 caracteres.');
        }
    }

    public value: string;
}

const validate = (message: string) => {
    throw new Error(message)
}