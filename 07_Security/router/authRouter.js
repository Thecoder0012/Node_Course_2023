import { Router } from "express";
const router = Router();

router.get("/auth/logout",(req,res,next) => {
    res.send({})
});

router.post("/auth/login",(req,res,next) => {
    res.send({})
})



export default router