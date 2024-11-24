'use strict';
const element=document.getElementById("target")
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
let htmlContent="";
for (let i=0; i<students.length ; i++){
  htmlContent+=`<option value="${students[i].id}">${students[i].name}</option>`
}
element.innerHTML=htmlContent