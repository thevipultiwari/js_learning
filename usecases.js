// Object properties
let user = {};
let id = Symbol("id");

user[id] = 12345;
user.id = "string id";

console.log(user[id]);
console.log(user.id);

for (let key in user) {
  console.log(key);
  console.log(user.id);
  console.log(user[key]);
}
// for (let i = 0; i < user.length; i++){
//     console.log(i);
//   console.log(user.i);
//   console.log(user[i]);
// }
big1 = 10n;
console.log(big1 + big1);
