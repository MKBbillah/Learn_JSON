//https://jsonlint.com/
//string
//number
//object
//array
//boolean
//null

var person = {
  name: "Rahim",
  age: 25,
  hometown: "Dhaka",
  married: false,
  dob: 1995,
  test_null: null,
  test_undefined: undefined, 
   greet: function() {
    console.log('Hello ${this.name}')
   }
}
person.greet();

var person_json = JSON.stringify(person);
console.log(person_json);
