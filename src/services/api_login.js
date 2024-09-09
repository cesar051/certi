const express = require('express');
const mssql = require('mssql'); // Assuming you're using mssql for SQL Server
const bcrypt = require('bcrypt'); // For secure password hashing

const app = express();

// Database connection configuration (replace with your credentials)
const config = {
  user: 'adminapps@proyectosapps',
  password: 'Colombia2024**',
  server: 'tcp:proyectosapps.database.windows.net,1433',
  database: 'safiro'
};

// Connect to database
async function connectToDb() {
  try {
    await mssql.connect(config);
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
}

connectToDb(); // Connect on startup

app.post('/services/api_login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Fetch user by email
    const user = await sql.query(`SELECT * FROM wa_usuarios  WHERE correo = '${email}'`);

    if (user.recordset.length === 0) {
      // Email not found, send failure response
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 2. Compare password hashes securely
    const isPasswordValid = await bcrypt.compare(password, user.recordset[0].password);

    if (!isPasswordValid) {
      // Invalid password, send failure response
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 3. Login successful, send success response (optional data)
    res.json({ message: 'Login successful!', user: { /* user data you want to send */ } });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));