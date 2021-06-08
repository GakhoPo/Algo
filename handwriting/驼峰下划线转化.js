const str1 = "testCaseForNameChange";
const str2 = "test_case_for_name_change";
// 驼峰转换下划线
function toLine(str) {
    const reg = /([A-Z])/g;
    return str.replace(reg, "_$1").toLowerCase();
}
console.log(`toLine: ${toLine(str1)}`);
// 下划线转换驼峰
function toHump(name) {
    return name.replace(/\_(\w)/g, (all, letter) => letter.toUpperCase());
}

// 测试
let a = "a_b2_345_c2345";
console.log(toHump(a));

let b = "aBdaNf";
console.log(`${toLine(b)}`);
