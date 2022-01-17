export interface IBook {
    id: string,
    title: string,
    name: string
}

export class Book implements IBook {
    id: string;
    name: string;
    title: string;

    source(id: string) {
        this.id = id;
        this.title = "title";
        this.name = "name";
        return this
    }

    target() {
        return this.title
    }
}
