import { people } from "../people.js";
// function age_greater_than30(data){
//     let employees=[];
//     for(let emp of data){
//         if(emp.age>30 && emp.profession==="Engineer"){
//             employees.push(emp.name);
//         }
//     }
//     return employees;
// }
// console.log(age_greater_than30(people));
function age_greater_than30(data){
    return data.filter(emp=>
        emp.age>30 && emp.profession==="Engineer"
    ).map(emp=>emp.name);
    
    
}
console.log(age_greater_than30(people));