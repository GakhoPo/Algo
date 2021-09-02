//dp: n * n, true, false,

function test(str) {
    const n = str.length;
    if (!n) return "";
    const dp = new Array(n).fill(false).map((_) => new Array(n).fill(false));
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        if (i < n - 1) {
            if (str[i] === str[i + 1]) dp[i][i + 1] = true;
        }
    }
    for (let i = 2; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (dp[j + 1] === dp[j + i - 1]) {
                if (str[j] === str[j + i]) {
                    dp[j][j + i] = true;
                    maxLen = Math.max(maxLen, i + 1);
                }
            }
        }
    }
    return maxLen;
}

const str = "ababa";
console.log(test(str));
