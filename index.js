import express from "express";

// app config
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("api working");
});
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

export default app;
