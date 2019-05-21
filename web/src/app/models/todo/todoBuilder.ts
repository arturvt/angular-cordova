import { Todo } from './todo.model';

export class TodoBuilder {
    readonly creation = new Date();
    title: string;
    content: string;

    constructor(){}

    setTitle(title: string): TodoBuilder {
        this.title = title;
        return this;
    }

    setContent(content: string): TodoBuilder {
        this.content = content;
        return this;
    }

    build(): Todo {
        return new Todo(this);
    }

}
