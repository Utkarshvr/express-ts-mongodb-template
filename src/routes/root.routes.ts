import { Router, json } from "express";

const rootRoute = Router();

rootRoute.use(json());

rootRoute.get("/", (req, res) => {
  res.json("Welcome to the Portfolio API");
});

export default rootRoute;
