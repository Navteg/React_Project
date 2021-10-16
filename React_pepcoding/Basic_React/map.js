let arr = [1, 2, 3];

let narr = [];

// for(let i = 0; i < arr.length; i++) {
// 	narr[i] = 2 * arr[i];
// }

// using map it will return value 
// for every element
narr = arr.map((value) => {
	return 2 * value;
})

console.log(narr);