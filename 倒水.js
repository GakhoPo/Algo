//用4升和7升倒出5升的水
function waterfilling(con1, con2, target) {
    if (con1 > con2) [con1, con2] = [con2, con1];
    let remain = con2 - con1;
    let flag = con2 - con1;
    while (true) {
        if (remain > con1) {
            remain = remain - con1;
            console.log(`7升倒入4升杯子，7升杯子剩余${remain}升水`);
        } else if (remain < con1) {
            remain += con2;
            console.log(`将7升杯里的水倒入4升杯，将7升盛满`);
        }
        if (remain == target) {
            console.log(`得到5升水`);
            break;
        }
        if (flag === remain) {
            console.log(`倒水失败`);
            break;
        }
    }
}

waterfilling(4, 7, 5);
