var MN = (s) => {
    //if (s.length === 1 && s === "M") return "21";
    //if (s.length === 1 && s === "N") return "12";
    let res = new Array(s.length + 1).fill(null);
    for (let i = 0; i < res.length; i++) {
        res[i] = i + 1;
    }
    const len = s.length;
    let index = 0;
    var reverse = (arr, left, right) => {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        //console.log(arr);
    };
    let count = 0;
    while (index < len) {
        if (s[index] === "M") count++;
        else {
            reverse(res, index - count, index);
            count = 0;
        }
        if (index === len - 1 && s[index] === "M") {
            reverse(res, index + 1 - count, index + 1);
            break;
        }
        index++;
    }
    return res.join("");
};
console.log(MN("M"));
console.log(MN("N"));
console.log(MN("MMNMMNNM"));
console.log(MN("MNMN"));
console.log(MN("NNMMM"));
