function father() {
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

function son() {
    if (father()) return true;
}
console.log(son());
//console.log(father());
