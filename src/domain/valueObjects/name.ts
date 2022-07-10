export class Name {

    constructor(name: string) {
        this.value = name;
        if (this.value == "") {
            throw new Error('O campo nome é obrigatório.');
        }

        if (this.value.length < 3) {
            throw new Error('Nome deve ter mais de 3 caracteres.');
        }
    }

    public value: string;
}