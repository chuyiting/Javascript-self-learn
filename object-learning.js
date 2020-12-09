var object = {
    foo: 1, // Key can bre identifiers
    "bar": "some string", // Key can be strings
    baz: {

    }
};

// Accessing Properties

// Dot notation
console.log(object.foo);

// bracket notation
console.log(object["foo"]);; // the property name is specified as string
console.log(object["f" + "oo"]); 
console.log(object["!@#.()"]); // bracket notation allows more flexibility for the name of the property


//nested properties

var object= {
    baz: {
        foo: {
            bar: 5
        }
    },
    sum: function(foo, bar) {
        return foo + bar;
    }
};

console.log(object.baz.foo.bar);
console.log(object["baz"]["foo"]["bar"]);
console.log(object["baz"].foo["bar"]); // a mix

console.log(object["sum"](1, 2));

// add property and method
object.baz = function() {
    return "hello from baz()";
}

// delete property
delete object.bar

// check if a property exists: 'propertyName' in objectName
console.log('bar' in object)

// iterate over properties: Key: the "key" would be iterated in the form of "String"
for (let key in object) {
    console.log(object[key]); 
}

for (const key in object) {
    console.log(object[key]); 
}

// Declare method in object

// normal way
let person = {
    greet: function () {
        console.log('good morning!');
    }
}

// shorthand
let person2 = {
    greet() {
        console.log('good morning!');
    }
}

// get object prototype property 

// Key: An object can be the Prototype of another object
// Key: [[Prototype]] is a entry to write the Prototype => internal property!!!

console.log(Object.getPrototypeOf(object)); // get the [[Prototype]]
console.log(object["__proto__"]);
console.log(object.__proto__ === Object.prototype);
console.log('=========')
console.log('prototype' in object);

var proto = {
    describe: function () {
        return ''
    }
}

// get function prototype. Note that function [[prototype]] is assigned to all instances of ojected created by the function

let f = function () {
    this.a = 1;
    this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

function Foo(name) {
    this.name = name;
}

var b = new Foo('b');
var a = new Foo('a');




