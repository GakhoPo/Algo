const arr1 = ["a1", "a2", "a3", "a4"];
const arr2 = ["b1", "b2", "b3", "b4"];
const arr3 = ["c1", "c2", "c3", "c4"];
const arr = [arr1, arr2, arr3];
console.log(arr[0][0]);
const mergeArr = (arr) => {
    if (!arr.length || !arr[0].length) return [];
    const len = arr.length,
        n = arr[0].length;
    const res = [];
    const dfs = (index = 0, temp = []) => {
        if (index === len) {
            res.push(temp.slice());
            return;
        }
        for (let i = 0; i < n; i++) {
            temp.push(arr[index][i]);
            dfs(index + 1, temp);
            temp.pop();
        }
    };
    dfs();
    return res;
};

console.log(mergeArr(arr));
