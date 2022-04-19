import { Router } from "express";
import { db } from "../db/createConn.js";

const router = Router();

 
//Test method
//TODO post method with db.get specific customer values
router.get("/api/auth", async (req, res) => {
    const customers = await db.all("SELECT * FROM customers");
    res.send({data: customers});
});


export default router;