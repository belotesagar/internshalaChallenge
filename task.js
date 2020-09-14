//Assignment submitted by Sagar B Belote.
//email:sagarbelotes@gmail.com.
//contact number:8698928826.
//problem while understanding 3rd condition: when I am trying to code for add missing days with value based on pre+next days value and then theirs mean is the value of missing 
//day that time I didn't get an idea of how you showed there a value because if I get an idea you have taking a mean of pre+next days value and the taking mean of both but if we 
//see in 3rd condition I found it is not logically correct. if I get to know how you are replacing thu=8 and fri=10 (this 2 are missing days in the second input dictionary 
//output).definitely I will write code for this condition too but I want a clear idea about it.
//please see console.log if you watching output.in dictionary variable final output is stored.

//input dictionary 1:
var D = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2
}
//input dictionary 2:
// var D = {
//     '2020-01-01': 4,
//     '2020-01-04': 8,
//     '2020-01-05': 2,
//     '2020-01-06': -6,
//     '2020-01-07': 2
// }

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
solution(D, days);
//below methods have nested functions every method in thos function have its own unique working.i have tried to use less methods to achieve result in this program.
function solution(D, days) {
    var dictionary = {};
    var previousValue = 0;
    var inputDays = [];
    var isValidDictionary = true;
    //loop below is making array of key(YYYY-MM-DD) after converting it in current week day based on key(YYYY-MM-DD),we can use it later for validation.
    for (var x in D) {
        var d = new Date(x);
        var dayinObject = d.getDay();
        var day = days[dayinObject];
        inputDays.push(day);
    }

    validateDictionary(D);

    function validateDictionary(D) {
        //this function validates our input dictionary and return error(opens dialog box) when key or value cross the limits.
        Object.entries(D).forEach(([key, val]) => {
            var startDateLimit = new Date(0).getTime();; //JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated). 
            var EndDateLimit = new Date("2100-01-01").getTime();
            var currentDate = new Date(key).getTime();
            try {
                if ((currentDate < startDateLimit) || (currentDate > EndDateLimit)) throw "invalid key found in input cant proceed,please provide input in dictionary between 1970-01-01 to 2100-01-01";
                if ((val < -1000000) || (val > 1000000)) throw "invalid value found in input cant proceed,please provide key input dictionary between -1000000 to 1000000";
            } catch (err) {
                alert(err);
                isValidDictionary = false;
            }
        });
    }

    if ((inputDays.includes("Mon") === true) && (inputDays.includes("Sun") === true) && (isValidDictionary === true)) {

        Object.entries(D).forEach(([key, val]) => {
            var d = new Date(key);
            var dayFromDate = d.getDay();
            var day = days[dayFromDate];
            if (dictionary[day] !== undefined) {
                console.log(day + " " + "is allready present here with value");
                previousValue = dictionary[day];
                console.log("previousValue", previousValue);
                updateValue(previousValue);
            }
            if (dictionary[day] == undefined) {
                updateValue(previousValue);
            }
            //if we have same day with diierent value then this function make addition of that days value and return sum and add it in dictionary with its key(e.g Mon:2+3 i.e Mon=5)
            function updateValue(previousValue) {
                if (days.includes(day) === true) {
                    dictionary[day] = val + previousValue;
                }
            }

        });
    }
    //below try catch code block is used to check if dictionary contains at least mon and sun,if not available it will throw error.
    try {
        if (inputDays.includes("Mon") !== true) throw "input dictionary will have at least Mon";
        if (inputDays.includes("Sun") !== true) throw "input dictionary will have at least Sun";
    } catch (err) {
        alert(err);
    }
    console.log("dictionary:", dictionary); //expected dictionary output
    var missingDays = [];
    if (dictionary !== undefined) {
        //below code block is used to finf out missing days in input dictionary.
        for (var missingValue = 0; missingValue < days.length; missingValue++) {
            if ((dictionary.hasOwnProperty(days[missingValue]) == true)) {
                continue;
            } else {
                missingDays.push(days[missingValue]);
            }

        }

    }
    console.log("missing days from dictionary:", missingDays); //this array returns missing days from input dictionary.

}
