import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

const Users = [{ id: "1", firstName: "vinayak", lastName: "Gouda", age: "27", address:"Honnvar" }];

app.post("/createUser", (req, res) => {
  try {
    const { id, firstName, lastName, age, address } = req.body;

    Users.push({ id: id, firstName: firstName, lastName: lastName, age: age, address:address });
    res.json({
      UserInfo: Users,
      message: "User Created Successfully...",
    });
  } catch (err) {
    console.log("error...",err)
    res.json({
      Error: err,
      message: "user creation failed.....",
    });
  }
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
