import bcrypt from "bcryptjs";

const users = [
  {
    name: "Manisankar Mondol",
    email: "manisankarmondol8@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sandip Pal",
    email: "pal2184@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bivash Majumder",
    email: "majumder1248@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
