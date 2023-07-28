import { ToDo } from "./to-do.service";

// Singleton
export class List {
    private static _instance: List;
    private static toDos : ToDo[];

    private constructor(toDos : ToDo[]) {
        List.toDos = toDos;
    }

    public static Instance(toDos : ToDo[]) {
        return this._instance || (this._instance = new this(toDos));
    }

    public static getList () {
        return this.toDos;
    }

    public static getTodo(id : number) : ToDo {
        let index = this.getIndex(id);
        return this.toDos[index];
    }

    public static remove (id : number) : void{
        this.toDos = this.toDos
            .filter(t => t.id !== id)
        console.log("removing");
    }

    public static edit (todo : ToDo) : void {
        let index = this.getIndex(todo.id);
        this.toDos[index] = todo;
    }

    public static add(todo : ToDo) : void {
        let lastId = this.toDos[this.toDos.length - 1].id;
        todo.id = lastId + 1;
        this.toDos.push(todo);
    }

    private static getIndex(id : number) {
        let index = this.toDos
            .findIndex(t => t.id === id);
        return index;
    }
    
}

const ListInstance = List.Instance;