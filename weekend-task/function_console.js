/* 1. Determine the free variables of the function g() below:

var a = 1;

function f() {
    var b = 2;

    return function g() {
        var c = 3;
        console.log(a, b, c);
    }
}

f()(); */

//  a, b are the free variables of the function g().


/* 2. What does the following code log?

var a = 10;

function f1() {
    console.log(a);
}

function f2() {
    var a = 20;
    f1();
} */

10


/* 3. What does the following code log?

var a = 10;

(function () {
    function f1() {
        console.log(a);
    }

    function f2() {
        var a = 20;
        f1();
    }

    f2();
})(); */

10


/* 4. What does the following code log?

var x = 10;
(function () {
    function f() {
        console.log(x);
    }

    function g() {
        var x = 20;
        f();
    }

    g();
}); */

// () 10


/* 5. What does the following code log?

var a = 10;

function f1() {
    var a = 20;

    return function () {
        console.log(a);
    }
}

var f2 = f1();
f2(); */

20


/* 6. What does the following code log?

var a = 10;

function f1() {
    return function () {
        console.log(a);
    }
}

var f2 = f1();
f2(); */

10


/* 8. What does the following code log?

var a = 1;

function f1() {
    var b = 2;
    function f2() {
        console.log(a, b);
    }

    return f2;
}

var f2 = f1();
var b = 3;

function f3() {
    a = 5;
    f2();
}

f3(); */

// 5 2


/* 9. What will log to console the following code snippet:   


(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // What is logged?
    })(1);
})(0); */

0

/* 10. What does the following code log?

function createIncrement() {
    let count = 0; 

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged? */

0