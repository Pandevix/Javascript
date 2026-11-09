let users = [
{ name: "Rahul", age: 20 },
{ name: "Priya", age: 22 }
]


const selectedUsers = users.find((user) => {
    if(user.name === "Priya"){
        return user
    }
});

console.log(selectedUsers);
