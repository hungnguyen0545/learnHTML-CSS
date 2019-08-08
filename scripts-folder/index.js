var myvar = 12;

function total() {
    var myvar = 5;
    console.log(myvar);
}

total();
console.log(myvar);

var testArr = [1, 2, 3, 4, 5];

function nextinline(arr, number) {
    arr.push(number);
    return arr.pop();
}
console.log("before : " + JSON.stringify(testArr));
console.log(nextinline(testArr, 6));
console.log("After : " + JSON.stringify(testArr));


var testobj = '{"hung": "17520545", "hoang": "17520502","tri": "17521157"}';
var testarr = '[{"hung": "17520545","hoang": "17520502"}, {"tri": "17521157"},{"hoang": "17520502","tri": "17521157"}]'
var a = [
    { hung: "17520545", hoang: "17523131" },
    { tri: "121342123", hung: "214u294u1" },
]

var name = "hung"
testobj.huy = "17520076";
delete testobj.huy;
var Json = JSON.parse(testarr);
console.log(Json[0].tri);

var myJson = JSON.stringify(a);
console.log(myJson);
var trans = JSON.parse(myJson);
console.log(trans);