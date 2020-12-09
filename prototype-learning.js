function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.log = function() {
    console.log(this.name + ', age: ' + this.age);
}

var nick = new Person('nick', 18);

function call(obj, methodName) {
    var realMethodOwner = obj;

    while(realMethodOwner && !realMethodOwner.hasOwnProperty(methodName)) {
        realMethodOwner = realMethodOwner.__proto__;
    }

    if (!realMethodOwner) {
        throw 'method not found';
    } else {
        realMethodOwner[methodName].apply(obj);
    }

}

call(nick, 'log');
call(nick, 'not_exit');