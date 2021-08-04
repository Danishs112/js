"use strict";
let names = document.getElementById('name');
let age = document.getElementById('age');
let btn = document.getElementById('btn');
let show = document.getElementById('sort');
let cont = document.getElementById('container');
var ul = document.createElement('ul');
document.getElementById('myList').appendChild(ul);
let  studentData = [];

btn.addEventListener('click', () => {

    let studentObject = {
        name: names.value,
        age: parseInt(age.value)
    };
    studentData.push(studentObject);

    localStorage.setItem('student', JSON.stringify(studentData));
  
});

window.onload = function () {
    let student = localStorage.getItem('student');
    student = JSON.parse(student);
    if (student) {
        studentData.push(...student)
    }

}

function display(studentData) {
    let count = 1;
    ul.innerHTML = "";
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = "";
    studentData.forEach(function (element) {
        li.innerHTML += count + "." + " " + element.name + " " + element.age + "<br>";
        count += 1;
    });
}

function sorting(){
    //console.log(studentData);
    studentData=studentData.sort((a, b) => parseInt(a['age'], 10) - parseInt(b['age'], 10));
    display(studentData);
}
