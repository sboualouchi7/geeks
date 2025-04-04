const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//1
const welcome = 
    users.map(usr => `hello ${usr.firstName}`)

console.log(welcome)

//2

const full = users.filter(usr=>usr.role === 'Full Stack Resident')
console.log(full)

//3
const firsF = users
    .filter(us=>us.role === 'Full Stack Resident')
    .map(us =>us.firstName)
console.log(firsF)