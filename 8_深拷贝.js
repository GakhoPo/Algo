// 定义检测数据类型的功能函数
const checkedType = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1);
};

// 实现深度克隆对象或者数组
const deepClone = (target) => {
    // 判断拷贝的数据类型
    // 初始化变量 result 成为最终数据
    let result,
        targetType = checkedType(target);
    if (targetType === "Object") {
        result = {};
    } else if (targetType === "Array") {
        result = [];
    } else {
        return target;
    }

    // 遍历目标数据
    for (let i in target) {
        // 获取遍历数据结构的每一项值
        let value = target[i];
        // 判断目标结构里的每一项值是否存在对象或者数组
        if (checkedType(value) === "Object" || checkedType(value) === "Array") {
            // 如果对象或者数组中还嵌套了对象或者数组，那么继续遍历
            result[i] = deepClone(value);
        } else {
            // 否则直接赋值
            result[i] = value;
        }
    }

    // 返回最终值
    return result;
};
console.log(checkedType([1, 2, 3]));
