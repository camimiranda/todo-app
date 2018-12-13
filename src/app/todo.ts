export class Todo {
    id: number;
    title: string;
    description: string;
    complete: boolean = false;
    constructor(title, description?){
        let aux = {
            title: title,
            description: description
        }
        Object.assign(this, aux);
    }
}
