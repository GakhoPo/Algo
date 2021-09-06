let str1 = "[123,2,3,[4,5, [61]]]";

const str2arr = (str) => {
    const n = str.length;
    if (!n) return [];
    let index = 0;
    const judge = () => {
        const c = str[index];
        if (c === "[") {
            return copyarr();
        } else if (c >= "0" && c <= "9") {
            return copyvalue();
        } else throw new Error("Invalid input");
    };
    const copyvalue = () => {
        let value = 0;
        while (str[index] >= "0" && str[index] <= "9" && index < n) {
            value = value * 10 + +str[index];
            index++;
        }
        return value;
    };
    const copyarr = () => {
        const arr1 = [];
        index++;
        while (str[index] !== "]") {
            const c = str[index];
            if (c === " ") index++;
            else if (c === ",") {
                index++;
            } else arr1.push(judge());
        }
        index++;
        return arr1;
    };
    const res = judge();
    return res;
};

let simres = str2arr(str1);
console.log(simres, simres instanceof Array);
