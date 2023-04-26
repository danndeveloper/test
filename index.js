const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

let notes = [
  { id: 1, content: "HTML is easys", important: true },
  { id: 2, content: "Browser can execute only JavaScript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("api/notes", (request, response) => {
  response.json(notes);
});
app.post("/api/notes", (request, response) => {
  console.log("hi");
  const note = request.body;
  console.log(note);
  response.json(note);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  console.log("error");
  if (note) {
    response.json();
  } else {
    response.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
