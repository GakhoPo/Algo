//用4升和7升倒出5升的水
function waterfilling(con1, con2, target) {
    if (con1 > con2) [con1, con2] = [con2, con1];
    let remain = con2 - con1;
    let flag = con2 - con1;
    console.log(`7升杯盛满，倒入4升杯，7升杯剩余${remain}升水，4升杯倒空`);
    while (true) {
        if (remain > con1) {
            remain = remain - con1;
            console.log(`7升杯倒入4升杯子，7升杯剩余${remain}升水，4升杯倒空`);
        } else if (remain < con1) {
            console.log(`剩余${remain}升水全部倒入4升桶，7升杯盛满`);
            remain += con2;
        }
        if (remain == target) {
            console.log(`得到5升水，倒水成功`);
            break;
        }
        if (flag === remain) {
            console.log(`倒水失败`);
            break;
        }
    }
}

waterfilling(4, 7, 5);
