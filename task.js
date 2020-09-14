//Assignment submitted by Sagar B Belote.
//email:sagarbelotes@gmail.com
//contact number:8698928826
//please look readme file because when i am trying to

var D = {
    '2020-01-01': 4, //wed
    '2020-01-02': 4, //Thu 
    '2020-01-03': 6, //fri
    '2020-01-04': 8, //sat
    '2020-01-05': 2, //sun
    '2020-01-06': -6, //mon
    '2020-01-07': 2, //tue
    '2020-01-08': -1000000 //wed
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
    var isValidDictionary = true;
    for (var x in D) {

        console.log("x:", x);
        var d = new Date(x);
        var dayinObject = d.getDay();
        console.log("dayinObject:", dayinObject);
        var day = days[dayinObject];
        console.log("day:", day);
        inputDays.push(day);

    }

    validateDictionary(D);

    function validateDictionary(D) {

        Object.entries(D).forEach(([key, val]) => {
            console.log("key of D:", key);
            console.log("val of D:", val);
            var startDateLimit = new Date(0).getTime();; //JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated). 
            console.log("val of startDateLimit:", startDateLimit);
            var EndDateLimit = new Date("2100-01-01").getTime();
            console.log("val of EndDateLimit:", EndDateLimit);
            var currentDate = new Date(key).getTime();
            console.log("val of currentDate:", currentDate);
            try {
                if ((currentDate < startDateLimit) || (currentDate > EndDateLimit)) throw "invalid key found in input cant proceed,please provide input in dictionary between 1970-01-01 to 2100-01-01";
                if ((val < -1000000) || (val > 1000000)) throw "invalid value found in input cant proceed,please provide key input dictionary between -1000000 to 1000000";
                // else if (((val > -1000000) && (val < 1000000)) || ((currentDate < startDateLimit) && (currentDate < EndDateLimit))) {
                //     isValidDictionary = true;
                // }
            } catch (err) {
                alert(err);
                isValidDictionary = false;
            }
        });
    }

    console.log("inputDays:", inputDays);

    if ((inputDays.includes("Mon") === true) && (inputDays.includes("Sun") === true) && (isValidDictionary === true)) {

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
    try {
        if (inputDays.includes("Mon") !== true) throw "input dictionary will have at least Mon";
        if (inputDays.includes("Sun") !== true) throw "input dictionary will have at least Sun";
    } catch (err) {
        alert(err);
    }
    // document.getElementById("demo").innerHTML = dictionary;
    console.log("dictionary:", dictionary); //expected dictionary output
}