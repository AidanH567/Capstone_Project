import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser"; // Middleware to parse cookies
import cors from "cors";
import multer from "multer"; // Middleware to handle file uploads

const app = express();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../my-vite-project/upload/");
  },
  filename: function (req, file, cb) {
    // Append timestamp to the original filename for uniqueness
    cb(null, Date.now() + file.originalname);
  },
});

// Define CORS options
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // Enable sharing cookies
};

// Apply middleware
app.use(cors(corsOptions)); // Enable CORS
app.use(express.json());
app.use(cookieParser());

// Initialize Multer
const upload = multer({ storage });

// File upload endpoint
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// Mount API routes
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
