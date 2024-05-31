const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = "./db.json";

const readData = () => {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

app.get("/todos", (req, res) => {
  const data = readData();
  res.json(data.todos);
});

app.get("/news", (req, res) => {
  const data = readData();
  res.json(data.news);
});

app.post("/todos", (req, res) => {
  const data = readData();
  const newTodo = { ...req.body, id: Date.now() };
  data.todos.push(newTodo);
  writeData(data);
  res.json(newTodo);
});

app.patch("/todos/:id", (req, res) => {
  const data = readData();
  const todo = data.todos.find((todo) => todo.id == req.params.id);
  if (todo) {
    Object.assign(todo, req.body);
    writeData(data);
    res.json(todo);
  } else {
    res.status(404).send({ message: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  let data = readData();
  data.todos = data.todos.filter((todo) => todo.id != req.params.id);
  writeData(data);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
