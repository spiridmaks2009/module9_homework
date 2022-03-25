const parser = new DOMParser();

const xmlString =
    '<list>' +
    '  <student>' +
    '    <name lang="en">' +
    '      <first>Ivan</first>' +
    '      <second>Ivanov</second>' +
    '    </name>' +
    '    <age>35</age>' +
    '    <prof>teacher</prof>' +
    '  </student>' +
    '  <student>' +
    '    <name lang="ru">' +
    '      <first>Петр</first>' +
    '      <second>Петров</second>' +
    '    </name>' +
    '    <age>58</age>' +
    '    <prof>driver</prof>' +
    '  </student>' +
    '</list>';

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodeList = listNode.querySelectorAll("student");

const students = [];

for (let i=0; i<studentNodeList.length; i++) {
    const studentNode = studentNodeList.item(i);
    const nameNode = studentNode.querySelector("name");
    const first = nameNode.querySelector("first");
    const second = nameNode.querySelector("second");
    const lang = nameNode.getAttribute("lang");
    const age = studentNode.querySelector("age");
    const prof = studentNode.querySelector("prof");

    const student = {
        name: first.textContent + ' ' + second.textContent,
        lang: lang,
        age: age.textContent,
        prof: prof.textContent
    };

    students.push(student);
}

const list = {
    list: students
}

console.log('list', list);