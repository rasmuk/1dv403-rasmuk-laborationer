"use strict";

var makePerson = function(persArr){
    var result = {};
    result.averageAge = Math.round(average(persArr.map(age)));
    result.minAge = minAge(persArr.map(age));
    result.maxAge = maxAge(persArr.map(age));

    var nameArr = [];
    nameArr = persArr.map(names);
    
    nameArr.sort(function (a, b) {
        return a.localeCompare(b);
    });
    
    var tmp = nameArr.toString().replace(/'/g, ', ');
    var stringOfNames = tmp.replace(/,/g, ', ');
    result.names = stringOfNames;

    return result;
}

function average(array){
    function plus(a, b){ return a + b}
    return array.reduce(plus) / array.length;
}

function minAge(array){
    function min(a, b){ return Math.min(a,b)}
    return array.reduce(min);
}

function maxAge(array){
    function max(a, b){ return Math.max(a,b)}
    return array.reduce(max);
}

function age(p){ return p.age;}

function names(p){ return p.name;}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);



/* Med loopar:

    var result = {};
    var indata = [];
    var nameArr = [];
    indata = persArr;
    var minAge, maxAge, sumAge, averageAge;
    for(var i=0; i < indata.length; i++){
        if(i == 0){
            minAge = indata[0].age;
            maxAge = indata[0].age;
            sumAge = indata[0].age;
           nameArr[0] = indata[0].name;
        } else{
            sumAge += indata[i].age;
            nameArr[i] = indata[i].name;
            if (indata[i].age < minAge){
                minAge = indata[i].age;
            }
            if (indata[i].age > maxAge){
                maxAge = indata[i].age;
            }
        }
    }
    averageAge = Math.round(sumAge / indata.length);
    
    nameArr.sort(function (a, b) {
        return a.localeCompare(b);
    });
    
    var names = "";
    for(var k = 0; k < nameArr.length; k++){
        names += nameArr[k];
        if (k < nameArr.length - 1){
            names += ", ";
        }
    }
    
    result.minAge = minAge;
    result.maxAge = maxAge;
    result.averageAge = averageAge;
    result.names = names;
    return result;
*/