import express from "express";
import authRouter from "./routes/auth.routes";
import { Response, Request } from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use("/auth", authRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Subscription Tracker API!");
});
export default app;
