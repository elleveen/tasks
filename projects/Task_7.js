// Генерируем случайное число от 1 до 12 для месяца
const month = Math.floor(Math.random() * 12) + 1;

const year = 2024;

function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "весна";
    } else if (month >= 6 && month <= 8) {
        return "лето";
    } else if (month >= 9 && month <= 11) {
        return "осень";
    } else {
        return "зима";
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const season = getSeason(month);

const leapYear = isLeapYear(year);

console.log(`Месяц ${month} находится в поре года: ${season}`);
console.log(`Год ${year} ${leapYear ? "является" : "не является"} високосным.`);