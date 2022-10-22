import express, { json, urlencoded } from "express";
import cors from "cors"; // get MongoDB driver connection
import { connectToServer } from "./mongo/conn.js";

import userRoutes from "./routes/authRoutes.js";
import clubRoutes from "./routes/clubRoutes.js";
import officeBearerRoutes from "./routes/officeBearerRoutes.js";
import suTeamRoutes from "./routes/suTeamRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import aboutRoutes from "./routes/AboutRoutes.js";
import nssRoutes from "./routes/nssStaffRoutes.js";
import generalRoutes from "./routes/Club/GeneralRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(json());
app.use(urlencoded());

app.use("/api/upload", uploadRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/office-bearers", officeBearerRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/suteam", suTeamRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/nssncc", nssRoutes);

app.use("/api/club/general", generalRoutes);

app.get("/", async (req, res) => {
  res.send("Welcome to the SU CMS API");
});

// perform a database connection when the server starts
connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
