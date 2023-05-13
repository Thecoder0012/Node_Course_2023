import { Router } from "express";
const router = Router();

router.get("/guards", (req, res, next) => {
  res.send({ message: "This is the guards router" });
});

export default router;