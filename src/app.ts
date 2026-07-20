import express from "express";
import authRouter from "./routes/auth.routes"; 
import { Response,Request } from "express";
const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Subscription Tracker API!");
});
export default app;