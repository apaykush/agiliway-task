function freq(seq, x) {
    let temp = [];
    x = x.replace(/\W/g, '').toLowerCase();

    for (let i = 0; i < x.length; i++)
        (x.substr(i, seq).length == seq) ? temp.push(x.substr(i, seq)) : null;

    let set = new Set();
    temp.forEach(elem => set.add(elem));

    return Array.from(set).map(value => [value, temp.filter(str => str === value).length]).slice(0, 10);
}

let a = " abracadabra ";
console.log(freq(1, a));
