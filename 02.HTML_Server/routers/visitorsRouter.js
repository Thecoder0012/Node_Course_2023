import { Router } from "express";
const router = Router();

router.get("/visitor", (req, res, next) => {
  res.send({ message: "This is the visitor router" });
});


export default router;