/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
const user = {
id: 101,
name: "Ravi",
preferences: {
theme: "dark",
language: "en"
}
};

🎯 Task
    1. Create a shallow copy of user
    2. Change:
i. name in the copied object
ii. preferences.theme in the copied object
iii .Log both original and copied objects
iv. Observe what changes and what doesn’t
*/
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};
let copyUser = { ...user };
copyUser.name = "Sravanya";
copyUser.preferences.theme = "white";
copyUser.preferences.language = "hin";
console.log(user); //{id:101,name:Ravi,preferences:{theme:"white",lang:"hin"}}
console.log(copyUser); //{id:101,name:"sravanya",preferences:{theme:"white",lang:"hin"}}
