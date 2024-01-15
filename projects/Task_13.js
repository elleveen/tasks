class Worker {
    constructor(name, surname, rate, days) {
        let _name = name;
        let _surname = surname;
        let _rate = rate;
        let _days = days;

        this.getName = function() {
            return _name;
        };

        this.getSurname = function() {
            return _surname;
        };

        this.getRate = function() {
            return _rate;
        };
        this.getDays = function() {
            return _days;
        };
    }
}
const worker = new Worker("Ед", "Ширен", 200, 20);

console.log(worker.getName(), worker.getSurname(),worker.getRate(), worker.getDays() );
