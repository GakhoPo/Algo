const str = "[123,2,3,[4,5]]";
function str2arr(str) {
    return eval(str);
}
function str2arr2(str) {
    return JSON.parse(str);
}

console.log(str2arr2(str));
console.log(str2arr2(str) instanceof Array);

let str2 = "-important-num-alias-";
function splitstr(str2) {
    let res = "";
    let temp = str2.split("-");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].length >= 4)
            temp[i] =
                temp[i][0] +
                +(temp[i].length - 2) +
                temp[i][temp[i].length - 1];
    }
    //return temp;
    res = temp.join("-");
    return res;
}
console.log(splitstr(str2));

function splitstr2(str2) {
    let temp = str2.split("-");
    let res = temp.map((item) => {
        if (item.length >= 4)
            return item[0] + (item.length - 2) + item[item.length - 1];
        else return item;
    });
    return res.join("-");
}
console.log(`splitstr2: ${splitstr2(str2)}`);
