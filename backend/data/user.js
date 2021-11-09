import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Vinh Phuc",
    email: "phuc@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Minh Quan",
    email: "quan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
