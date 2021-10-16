let arr = ["apple", "orange", "mango", "watermelon"];
let narr = []

// In this it will only return 
// those value which matches the condition
narr = arr.filter(function(value) {
	return value.length > 6;
})

console.log(narr);