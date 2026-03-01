let students = [
    {name: "Nanditha", marks: 98},
    {name: "Vishal", marks: 78},
    {name: "Ashwini", marks: 88},
]

let marks = students.map((s)=>s.marks);
let totalMarks = students.filter((s)=>s.marks>=40);
console.log(totalMarks)