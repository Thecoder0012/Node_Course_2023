import {Router} from 'express';
const router = Router();

router.get("/tanks",(req,res,next) => {
    res.send({message: "This is the tanks router"});
});

export default router;