import { db } from "./createConn.js";

const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS customers;");
    db.exec("DROP TABLE IF EXISTS synths;");
}

// CUSTOMERS
db.exec(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(40), email VARCHAR(40), password VARCHAR(20) 
);`);

// SYNTHS
db.exec(`CREATE TABLE IF NOT EXISTS synths (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName VARCHAR(100), price DOUBLE, 
    description VARCHAR(300)
);`);

// Seed my database
if (deleteMode) {
    db.run(`INSERT INTO customers (username, email, password) VALUES ('Molly', 'molle@mail.dk', '1234')`);
    db.run(`INSERT INTO customers (username, email, password) VALUES ('Rikke', 'rikkep@mail.dk', 'musse89')`);
    db.run(`INSERT INTO customers (username, email, password) VALUES ('Bigdaddy', 'straffer@mail.dk', 'idiot')`);

    db.run(`INSERT INTO synths (productName, price, description) VALUES ('Moog Matriarch', 13.999, 'Analogue sound generation with the classic Moog sound')`);
    db.run(`INSERT INTO synths (productName, price, description) VALUES ('Behringer DeepMind 12', 5.599, '4 FX engines powered by tc electronic and Klark Teknik')`);
    db.run(`INSERT INTO synths (productName, price, description) VALUES ('Arturia MicroFreak', 2.499, 'Digital oscillator with synthesis methods like Karplus Strong, Harmonic OSC, Superwave and Texturer
    ')`);
}


db.close();
