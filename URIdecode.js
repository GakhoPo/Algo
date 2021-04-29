let url =
    "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

function parseParam(url) {
    let test = url.slice(url.indexOf("?") + 1);
    let splitTest = test.split("&");
    let res = {};
    splitTest.forEach((item) => {
        if (!/=/.test(item)) res[item] = true;
        else {
            let [key, value] = item.split("=");
            value = decodeURIComponent(value);
            value = /^\d+$/.test(value) ? parseFloat(value) : value;
            if (res[key]) res[key] = [].concat(res[key], value);
            else res[key] = value;
        }
    });
    return res;
}

console.log(parseParam(url));
//{ user: 'anonymous', id: [ '123', '456' ], city: '北京', enabled: true }
