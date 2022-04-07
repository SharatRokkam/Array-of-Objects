// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 

// 1. Traditional for() loop 
// let names = [];
// for (let index = 0; index < studentRecords.length; index++){
//      names.push(studentRecords[index].name.toUpperCase());
// }
// console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]

// 2. for(...of) 
// let names = []
// for (const student of studentRecords) {
//     names.push(student.name.toUpperCase());
// }
// console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]
// // 3. forEach()
// let names = []
// studentRecords.forEach( student => {
//      names.push(student.name.toUpperCase());
// })
// console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]


// let names = studentRecords.map( stu => stu.name.toUpperCase());



// Question 2
// "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// let studentRecords = [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
// let names = studentRecords.filter(stu => stu.marks > 50);

// Question 3
// Retrieve the details of students who scored more than 50 marks and have id greater than 120.

// let studentRecords = [{name: 'John', id: 123, marks : 98 },
//                       {name: 'Wick', id: 115, marks : 75 }];
// let names = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)

// Question 4
// This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
// {name: 'Baba', id: 101, marks : 23 },
// {name: 'yaga', id: 200, marks : 45 },
// {name: 'Wick', id: 115, marks : 75 } ];

// var stud= studentRecords.map(function(stu)
//     {
//             if(stu.marks<50)
//             {
//                 stu.marks += 15;
//             }
//             return stu;
//     }).filter(stu => stu.marks>50).reduce((acc ,curr) => acc + curr.marks,0);

//     console.log(stud);    // LoG :233

//Question 5: This time we are required to print the sum of marks of the students with id > 120.

// let totalMarks = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
// console.log(totalMarks); // logs: 143"


// Question 6
// function myFunction(){
//     let getvalue = document.getElementById("dropdown").value;
//     document.getElementById("p").innerHTML = "The selected value is : " +getvalue;
// };

// Question 7
// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

// let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
// console.log(totalMarks);// logs: 241