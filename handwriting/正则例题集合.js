//给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

function containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str);
}

const str = "rattler";

console.log(containsRepeatingLetter(str));

//判断是否符合指定格式
// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型
function matchesPattern(str) {
    return /^(\d{3}-){2}\d{4}$/.test(str);
}
