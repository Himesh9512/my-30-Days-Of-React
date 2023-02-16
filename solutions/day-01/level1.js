//1.Declare an empty array
const emptyArray = Array();

//2.Declare an array with more than 5 number of elements
const arr = [1, 12, 23, 34, 45];

//3.Find the length of your array
const arrLength = arr.length;

//4.Get the first item, the middle item and the last item of the array
const arrFirstItem = arr[0];
const arrMidItem = arr[Math.round(arrLength / 2)];
const arrLastItem = arr[arrLength - 1];

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["Hello", 3, true, { greet: "Hello guys" }, false, 46];
const mixedDataTypesLength = mixedDataTypes.length;

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7.Print the array using console.log()
console.log(itCompanies);

//8.Print the number of companies in the array
console.log(itCompanies.length);

//9.Print the first company,middle and last company
console.log(
	itCompanies[0],
	itCompanies[Math.floor(itCompanies.length / 2)],
	itCompanies[itCompanies.length - 1]
);

//10.Print out each company
itCompanies.map((company) => console.log(company));

//11.Change each company name to uppercase one by one and print them out
itCompanies.map((company) => console.log(company.toUpperCase()));

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentance = itCompanies.join(",");
console.log(sentance);

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.indexOf("Apple") === -1 ? "company is not found" : itCompanies.indexOf("Apple");

//14.Filter out companies which have more than one 'o' without the filter method
const filteredArray = [];
itCompanies.forEach((company) => {
	company.match(new RegExp(`.*o.*o.*`)) !== null ? filteredArray.push(company) : "";
});
console.log(filteredArray);

//15.Sort the array using sort() method
itCompanies.sort();

//16.Reverse the array using reverse() method
itCompanies.reverse();

//17.Slice out the first 3 companies from the array
itCompanies.slice(0, 3);

//18.Slice out the last 3 companies from the array
itCompanies.slice(-3);

//19.Slice out the middle IT company or companies from the array
itCompanies.slice(3, 4);

//20.Remove the first IT company from the array
itCompanies.shift();

//21.Remove the middle IT company or companies from array
itCompanies.splice(4, 1);

//22.Remove the last IT company from array
itCompanies.pop();

//23.Remove all IT companies
itCompanies = [];
