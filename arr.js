const test = [
    ["5", "6"],
    ["0", "1"],
    ["1", "4"],
    ["5", "4"],
    ["1", "2"],
    ["4", "0"]
  ];

function arrMaxFnc(a) {

  const b = [];

for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < a[0].length; j++) {
      b.push(a[i][j])
    };
}
  
const c =b.reduce((m,n,index,arr) => {
    m[n] = ++m[n] || 1;
    return m
}, {});

const maxKeyValue = obj => {
    return Object.keys(obj).filter(x => {
         return obj[x] == Math.max.apply(null, Object.values(obj));
   });
};

const d = maxKeyValue(c);

 return d
}

console.log(arrMaxFnc(test))