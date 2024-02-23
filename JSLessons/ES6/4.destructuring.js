const college = {
    name : 'DTU',
    est : '1941',
    isPvt : false
};

// let n_name = college.name;
// let n_est = college.est;
// let n_isPvt = college.isPvt;

// console.log(n_name);
// console.log(n_est);
// console.log(n_isPvt);

//object destructuring 
let {name,est,isPvt}=college;
console.log(name,est,isPvt);

//array destructing
const arr_new = ['two','thousand','twenty','four'];
let [value1,value2,value3]=arr_new;
console.log(value1,value2,value3);