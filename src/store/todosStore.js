import { makeAutoObservable } from "mobx";
import fetchTodos from "../api/fetchTodos";



class Todos {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTodos() {
        console.log(this);
        try {
            const data = await fetchTodos();
            this.todos = [...data];
        } catch (err) {
            console.log(err);
        }
    }
}

export default new Todos();