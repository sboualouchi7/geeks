const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

const isPassedEx = students.filter(std=>std.isPassed == true)
console.log(isPassedEx)

const qry = students
    .filter(std=>std.isPassed == true)
    .map(usr=> `Good job ${usr.name} yous passed the course in ${usr.course}`)
console.log(qry)