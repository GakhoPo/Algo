const str1 = "[ 1, 2, [[3], [4, 5 ,6,[]]]]";
const str = "[ 1, [23], 3 ]";

function newParse(str) {
    try {
        var i = 0;
        str = str.replace(/\s+/g, "");
        function judge() {
            while (str[i] === " ") i++;
            if (str[i] === "[") return parseArr();
            else if (str[i] >= 0 && str[i] <= 9) return parseNum();
            else throw new Error("invalid array");
        }
        function parseArr() {
            var res = [];
            i++;
            //if (str[i] === ",")
            while (str[i] !== "]") {
                res.push(judge());
                if (str[i] === ",") i++;
            }
            i++;
            return res;
        }

        function parseNum() {
            let num = "";
            while (str[i] >= 0 && str[i] <= 9) {
                num += str[i];
                i++;
            }
            return parseInt(num);
        }
        return judge();
    } catch (e) {
        console.log(e);
    }
}
console.log(newParse(str1));
console.log(newParse(str));
