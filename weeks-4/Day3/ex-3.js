const users = { user1: 18273, user2: 92833, user3: 90315 }
//1
const usrs = Object.entries(users);
console.log(usrs)

//2 
const usrs2 = usrs.map(([k,v])=>[k,v*2])
console.log(usrs2)

