
import { Router } from "express";
import { db } from "../db/createConn.js";

const router = Router();

router.get("/api/synths", async (req, res) => {
    const synths = await db.all("SELECT * FROM synths");

    res.send({ data: synths });
});


export default router;