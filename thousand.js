const num = 13123903243;

function format1(num) {
    //let reg = /\d{1,3}(?=((\d{3})+$))/g;
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + "").replace(reg, "$&,");
}

console.log(`format1: ${format1(num)}`);

function format2(num) {
    num = num + ""; //数字转字符串
    let str = ""; //字符串累加
    for (let i = num.length - 1; i >= 0; i--) {
        if (i < 2) {
            while (i >= 0) {
                str += num[i--];
            }
            break;
        }
        let temp = 3;
        while (temp--) {
            str += num[i--];
        }
        i++;
        str += ",";
    }
    return str.split("").reverse().join(""); //字符串=>数组=>反转=>字符串
}
console.log(`format2: ${format2(num)}`);

//方法三：slice+while循环
function format3(num) {
    var arr = [],
        str = num + "",
        count = str.length;

    while (count >= 3) {
        arr.unshift(str.slice(count - 3, count));
        count -= 3;
    }

    // 如果是不是3的倍数就另外追加到上去
    str.length % 3 && arr.unshift(str.slice(0, str.length % 3));

    return arr.toString();
}
console.log(`format3: ${format3(num)}`);

//方法四：reduce版
function format4(num) {
    var str = num + "";
    // ["8", "7", "6", "5", "4", "3", "2", "1"]
    return str
        .split("")
        .reverse()
        .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ",") + prev;
        });
}
console.log(`format4: ${format4(num)}`);
