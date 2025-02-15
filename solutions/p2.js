import { people } from "../people.js";

function avg_salaries(data) {
    let result = {};

    data.forEach(emp => {
        if (!result[emp.profession]) {
            result[emp.profession] = { totalSalary: 0, count: 0 };
        }
        result[emp.profession].totalSalary += emp.salary;
        result[emp.profession].count += 1;
    },{});

    let avg_sal = Object.entries(result).map(([profession, { totalSalary, count }]) => {
        let avg = Math.round(totalSalary / count);
        return { profession, avg };
    });

    return avg_sal;
}

console.log(avg_salaries(people));
