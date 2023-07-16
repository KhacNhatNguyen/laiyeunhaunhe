// 1
const person = {
    firstName : "John",
    lastName : "Doe",
}

// a 
person[middleName]="Alex"
console.log(person)

// b 
person["lastName"]
console.log(person[lastName])

// 2
let myDog = {
    name : "Goki",
    legs : 4,
    friends : "Adee",
};

// a
myDog["name"]="Husky" 
     console.log(myDog)
// b
myDog["color"]="Black"
console.log(myDog)
//c
delete myDog.friends
console.log(myDog)

// 3
var year = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
// a
for ( var i = 0 ; year.length; i ++ ){
    if (i%2=== 0)
           console.log(year[i])
}
// b 
for ( var i = 0 ; year.length; i ++ ){
    if (i%2!== 0)
           console.log(year[i])
}
// c
for ( var i = 0 ; year.length; i ++ ){
    if (i%4=== 0)
           console.log(year[i])
}       

// 4
var array= [xoài,mận,đào]
array[1]="vải",
array[2]="nhãn",
     console.log(array)

