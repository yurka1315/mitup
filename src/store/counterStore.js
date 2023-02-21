import { makeAutoObservable } from "mobx";

class Counter {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }
    decrease = () => {
        this.count = this.count - 1;
    };

    increase = () => {
        this.count = this.count + 1;
        console.log(this);
    };
}

export default new Counter();