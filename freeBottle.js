let n = 30;

function freeBottles(n) {
    let num = Math.floor(n / 2);
    function changeBottles(emptyBottles, caps) {
        if(emptyBottles < 2 && caps < 4) return 0;
        let newNum = Math.floor(emptyBottles / 2) + Math.floor(caps / 4);
        emptyBottles = newNum + emptyBottles % 2;
        caps = newNum + caps % 4;
        return newNum + changeBottles(emptyBottles, caps);
    }
    return num + changeBottles(num, num);
}

console.log(freeBottles(n));