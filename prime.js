let num = 13;

let fact = 0;

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        fact++;
    }
}

if (fact == 2) {
        console.log(num, "is a prime");
    } else {
        console.log(num, "is not a prime");
    }

