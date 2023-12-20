var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var cookieParser = require("cookie-parser");
var userRoutes = require("./routes/user");
var postRoutes = require("./routes/post");
var commentRoutes = require("./routes/comment");
var authRoutes = require("./routes/auth");
var cors = require("cors");

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://social-media-client-pp5p.onrender.com', // Replace with your frontend's URL
  credentials: true, // Enable passing cookies, authorization headers, etc.
}));

app.use(express.json()); // for the app to parse json files
app.use(cookieParser());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.get("/",(req,res)=>{res.status(200).json("Server Running")})

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// error handling middleware
// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || "Something went wrong";
//     return res.status(status).json({
//         success : false,
//         status,
//         message
//     })
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log("server running");
});



