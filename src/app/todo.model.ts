export class Todo {
    id: number;
    title: string;
    description: string;
    complete: Boolean = false;
    constructor(title, description) {
      // tslint:disable-next-line:prefer-const
      let aux = {
        title: title,
        description: description
        };
      Object.assign(this, aux);
    }
}
