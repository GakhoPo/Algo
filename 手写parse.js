const str1 = "[ 1, 2, [[3], [4, 5 ,6,[]]]]";
const str = "[ 11, [23], 3 ]";

function newParse(str) {
    var i = 0;
    function parseJudge() {
        while (str[i] === " ") i++;
        if (str[i] === "[") {
            return parseArray();
        } else {
            return parseValue();
        }
    }

    function parseArray() {
        i++;
        var result = [];
        while (str[i] !== "]") {
            result.push(parseJudge());
            if (str[i] === ",") i++;
        }
        i++;
        return result;
    }

    function parseValue() {
        let num = "";
        while (str[i] >= 0 && str[i] <= 9) {
            num += str[i++];
        }

        return parseInt(num);
    }
    return parseJudge();
}
console.log(newParse(str1));
console.log(newParse(str1));
