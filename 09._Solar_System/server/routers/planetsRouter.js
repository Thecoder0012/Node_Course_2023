import { Router } from "express";
const router = Router();

import db from "../databases/connection.js";

router.get("/planets", async (req, res, next) => {
    const test = await db.all("SELECT * FROM planets;");
    console.log(test);
    res.send({test: test});
});

export default router;