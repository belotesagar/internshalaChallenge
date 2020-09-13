console.log("hello world");

var D = {
    '2020-01-01': 4, //wed
    '2020-01-02': 4, //Thu 
    '2020-01-03': 6, //fri
    '2020-01-04': 8, //sat
    '2020-01-05': 2, //sun
    '2020-01-06': -6, //mon
    '2020-01-07': 2, //tue
    '2020-01-08': -2 //wed
}
var output = {
    'Mon': -6,
    'Tue': 2,
    'Wed': 2,
    'Thu': 4,
    'Fri': 6,
    'Sat': 8,
    'Sun': 2
}

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("days:", days);
solution(D, days);

function solution(D, days) {
    var dictionary = {};
    var previousValue = 0;
    var inputDays = [];
    for (var x in D) {
        
        console.log("x:", x);
        var d = new Date(x);
        var dayinObject = d.getDay();
        console.log("dayinObject:", dayinObject);
        var day = days[dayinObject];
        console.log("day:", day);
        inputDays.push(day);
    }
    console.log("inputDays:", inputDays);

    if ((inputDays.includes("Mon") === true) && (inputDays.includes("Sun") === true)) {

        Object.entries(D).forEach(([key, val]) => {
            console.log("key:", key);
            console.log("val:", val);
            var d = new Date(key);
            var dayFromDate = d.getDay();
            console.log("dayFromDate:", dayFromDate);

            var day = days[dayFromDate];
            console.log("day:", day);
            if (dictionary[day] !== undefined) {
                console.log(day + " " + "is allready present here with value");
                previousValue = dictionary[day];
                console.log("previousValue", previousValue);
                updateValue(previousValue);
            }
            if (dictionary[day] == undefined) {
                // previousValue = 0;
                updateValue(previousValue);

            }

            function updateValue(previousValue) {
                if (days.includes(day) === true) {
                    dictionary[day] = val + previousValue;
                }
            }

        });
    }

    console.log("dictionary:", dictionary);
}
