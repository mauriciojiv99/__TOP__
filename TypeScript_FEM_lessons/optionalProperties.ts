let user: {
  id: number;
  username: string;
  fullname?: string;
};

user = { id: 1, username: "anjana" }; // OK

user = {
  id: 2,
  username: "nanjana",
  fullname: "Not Anjana",
}; // OK

delete user.fullname; // OK

//user = { username: "anjana" }; // Error!
