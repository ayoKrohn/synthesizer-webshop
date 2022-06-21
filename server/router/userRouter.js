import { Router } from "express";
import { db } from "../db/createConn.js";
import bcrypt, { genSalt } from "bcrypt";

const saltRounds = 10;
const router = Router();

// -- User Data
router.get("/api/users/profile", async (req, res) => {
    if (req.session.loggedIn) {
        let user = await db.get("SELECT * FROM customers WHERE email = ?", [ req.session.email ]);
        res.send(user);
    } else {
        res.send("Acces denied!")
    }
});

// -- LOGIN
router.post("/api/users/login", async (req, res) => {
    
    const { email, password } = req.body;

    if (!(email && password)) {
        return res.status(400).send("Both email and password are required");
    }   

    //const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        let foundUser = await db.get("SELECT * FROM customers WHERE email = ?", [ email ]);
        console.log(foundUser);
        const comparedPassword = await bcrypt.compare(password, foundUser.password);
    
        if (comparedPassword && !req.session.loggedIn) { 
        req.session.loggedIn = true;
        req.session.email = foundUser.email;
        return res.status(200).send("Login succes!");
        }

        else if (req.session.loggedIn) {
        return res.send("You are already logged in!");    
        }
    }
    
    catch {
        return res.status(404).send("Incorrect email or password!")
    }    
    
});



// -- SIGNUP 
router.post("/api/users/signup", async (req, res) => {
    
    const { email, password } = req.body;


    //check if required input is there
    if (!(email && password)) {
        return res.status(400).send("Both email and password are required");
    }

    const emailExists = await db.get("SELECT * FROM customers WHERE email = ?", [ email ]);

    //check if email exists
    if (emailExists) {
        return res.status(404).send("Email already exists. Try to log in instead.")
    }
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const { newUser } = await db.run(`INSERT INTO customers (email, password) VALUES (?,?)`, [email, hashedPassword]);
        return res.status(201).send("User created succesfully!");
        
    }
    catch {
        return res.status(500).send("Something went wrong");
    }
});

router.post("/api/users/logout", (req, res) =>{
    if(req.session.loggedIn){ 
      req.session.loggedIn = false;
    } return res.send("User is logged out");
});

router.get("/api/users/status", (req, res) => {
    if (req.session.loggedIn) {
        return res.send("DU er logget super meget ind"); //req.session.loggedIn);

    } else {
    return res.send("Baaaaa"); //req.session.loggedIn);
    }
})

export default router;