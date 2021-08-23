type User = {
    name: string;
    gender?: string;
    age: number;
};

interface Customer {
    (user: string, age: number): void;
}

const user1: User = {
    name: "John",
    age: 20,
};
console.log(user1.name);
const user2: Customer = function (user, age) {
    console.log(`${user} is at ${age} years old`);
};
user2("Pu", 25);
export {};
