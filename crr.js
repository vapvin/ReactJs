var obj = {};
function check(arr){
arr = arr.flat();
let max = 0;
for(let i of arr){
if(!obj[i]){
obj[i] = 0;
}
obj[i]++;
if(obj[i]>=max){
max = obj[i];
}
}
let r = new Set();
for(let i of arr){
	if(obj[i] == max){
		r.add(i);
	}
}
return JSON.stringify(Array.from(r));
}
console.log(
  check([[["5", "6"],["0", "1"],["1", "4"],["5", "4"],["1", "2"],["4", "0"]],[["123", "456"],["456", "789"],["100", "200"]]])
); //["1", "4"]

