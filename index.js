//1
const largest = (...args) => Math.max(...args);
const smallest = (...args) => Math.min(...args);

largest(1, 2, 4, -1, 10); // 10
smallest(1, 2, 4, -1, 10); // -1

//2
const transform = (arr) => arr.map((num) => () => num);

const newArray = transform([10, 20, 30, 40, 50]);

newArray[0](); // 10
newArray[3](); // 40

//3
const recurs = (...args) => {
    if (args.length === 0) return 0;
    return (args.length === 1) ? args[0] : args[0] + recurs(...args.slice(1));
};

recurs(1, 2, 3, 4, 5); // 15

//4
const countDown = (num) => {
    let a = num;
    const id = setInterval(() => {
        console.log(a);
        a--;
        if (a < 0) clearInterval(id);
    }, 1000);
};

countDown(5);

//5
Function.prototype.myBind = function() {
    var func = this;
    var args = [].slice.call(arguments, 1);
    var context = arguments[0];

    return function() {
        return func.apply(context, args.concat([].slice.call(arguments)))
    }
}

function addPropToNumber(number) {
    return this.prop + number;
}

var bound = addPropToNumber.myBind({ prop: 9 });

bound(1); // 10