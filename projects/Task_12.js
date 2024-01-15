class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker1 = new Worker('Яна', 'Цист', 200, 22);
console.log(worker1.name, worker1.surname,':',worker1.getSalary());

let worker2 = new Worker('Ед', 'Ширен', 250, 20);
console.log(worker2.name, worker2.surname,':', worker2.getSalary());