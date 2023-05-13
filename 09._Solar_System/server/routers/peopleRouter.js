import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";

router.post("/people", async (req, res) => {
  const { lastID } = await db.run(
    "INSERT INTO people (name, planet_id) VALUES (?, 3);",
    [req.body.name]
  );
  res.send({
    id: lastID,
    name: req.body.name,
  });
});

export default router;