const role = 'Host'
const person = 'JH'

// const team = {
//     role: person,  
// }
// team[role] = person
 
// computed properties
const role2 = 'Director'
const person2 = "JC"
// team[role2] = person2

const team = {
    [role]: person,
    [role2]: person2
}

