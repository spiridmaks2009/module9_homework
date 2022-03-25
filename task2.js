const jsonString = '{' +
    ' "list": [' +
    '  {' +
    '   "name": "Petr",' +
    '   "age": "20",' +
    '   "prof": "mechanic"' +
    '  },' +
    '  {' +
    '   "name": "Vova",' +
    '   "age": "60",' +
    '   "prof": "pilot"' +
    '  }' +
    ' ]' +
    '}';

const jsonList = JSON.parse(jsonString);
const resultList = [];

jsonList.list.forEach(function(item) {
    const person = {
        name: item.name,
        age: item.age,
        prof: item.prof
    }

    resultList.push(person);
})

console.log("list", resultList);