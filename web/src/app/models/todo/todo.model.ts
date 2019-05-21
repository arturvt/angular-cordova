import { TodoBuilder } from './todoBuilder';

export class Todo {
    title: string;
    content: string;
    created: Date;

    constructor(todoBuilder: TodoBuilder) {
        this.content = todoBuilder.content;
        this.title = todoBuilder.title;
        this.created = todoBuilder.creation;
    }
}
