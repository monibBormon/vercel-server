import cors from "cors";
import "dotenv/config";
import express from "express";
// import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://tasty-dash.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// database connection
// connectDB();

// api endpoint
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads")); // we can access the image at images/image_name now
app.use("/api/user", "Test");
app.use("/api/cart", "tst");
app.use("/api/order", "tst");

app.get("/", (req, res) => {
  res.send("api working");
});
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

export default app;
