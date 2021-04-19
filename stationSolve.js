let k = 3;
let m = [1, 2, 3, 5, 7, 10, 11, 14];

function stationSlove(k, m) {
    m.sort((a, b) => a - b);
    let res = 0;
    let station = [];
    for(let i = 0; i < k; i++) station.push(m[i]);
    for(let i = 0; i < m.length; i++) {
        
    }
    return res * 1.25;
}

console.log(stationSlove(k, m));