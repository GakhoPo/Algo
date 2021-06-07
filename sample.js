var RockPaperScissors = (s, rules) => {
    if (!s.length) return null;
    const len = s.length;
    const mid = len / 2;
    let s1 = "",
        s2 = "";
    const win = {};
    rules.forEach((item) => map[item]);

    for (let i = 0; i < len; i += 2) {
        s1 += s[i];
        s2 += s[i + 1];
    }
    let count1 = 0,
        count2 = 0;
    //console.log(s1, s2);
    // let s1 = s.slice(0, mid + 1);
    // let s2 = s.slice(mid + 1);
    var judge = (n1, n2) => {
        if (n1 === n2) return "DRAW";
        if (rule[n1] === n2) {
            count2++;
            return `A WINS`;
        } else {
            count1++;
            return `B WINS`;
        }
    };
    for (let i = 0; i <= mid; i++) {
        console.log(judge(s1[i], s2[i]));
    }
    return count1 > count2
        ? "A WINS TOURNAMENT"
        : count1 === count2
        ? "DRAW"
        : "B WINS TOURNAMENT";
};

console.log(RockPaperScissors("RRRSSRSPPPPSRP"));
