// switch case
let dayOfWeek = "Wednesday";
let schedule;

switch (dayOfWeek) {
  case "Monday":
    schedule = "Math Class";
  case "Wednesday":
    schedule = "History Class";
  case "Friday":
    schedule = "Science Class";
    break;
  default:
    schedule = "No class";
}
console.log(dayOfWeek);
console.log(schedule);
console.log(`On ${dayOfWeek},you have ${schedule}`);
