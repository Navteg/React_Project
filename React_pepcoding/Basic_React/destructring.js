let arr = ["Hi", "I", "Am", "Navteg"];

// normal method to access value
// let a  = arr[0];
// let b = arr[1];


// desctructring, it a convinient way to access 
// element from array or object

// let[a, b, c, d] = arr;

// by giving comma we can skip particular value
// let[a, b, , d] = arr;

// we can give extra value also
// let[a, b, c, d, extra = "Bhalla"] = arr;

// console.log(a, b, c, d, extra);


/* How desctructring works in Object */
let obj = {
	name : "Navteg",
	country : "India",
	pincode : 496001
}

// let name = obj.name;
// let place = obj.country;


// name of variable is same as key
// let{name, country, pincode} = obj;

// Here we can change the name of variable
let{name : fname, country, pincode} = obj;

console.log(fname, country, pincode);


