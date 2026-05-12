let user: { name: string; id: number };
user = { name: "Anjana", id: 1234 };

user.name = "Nanjana"; // OK
user.id = 4321; // OK

//user.name = null; // Error!
//user.id = "1234"; // Error!
//user.color = "blue"; // Error!
