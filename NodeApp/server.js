const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
const { google } = require('googleapis');
const fs = require('fs');
const { METHODS } = require('http');

// Initialize the Express app
const app = express();

require('dotenv').config()

app.use(express.json());

const corsOptions = {
  origin : "http://localhost:5177",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Google API credentials
const credentials = JSON.parse(fs.readFileSync(process.env.GOOGLE_APP_CREDENTIALS));
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });
// Google Sheets information

// Submit to Google Sheets function
const submitToGoogleSheets = async (data) => {
  const authClient = await auth;  // Make sure this is used for authentication
  const request = {
      auth: authClient,
      spreadsheetId: '1FQ_Pwa3MJ521Ar5zDT_p3UZpQoXdZb30LoRUaWtKbN8', // Replace with your spreadsheet ID
      range: 'Sheet1!A:E', // The range where data should be appended
      valueInputOption: 'USER_ENTERED',
      resource: {
          values: [
              [data.firstname, data.lastname, data.email, data.contactnumber, data.query]
          ]
      }
  };

  try {
      const result = await sheets.spreadsheets.values.append(request);
      console.log(`${result.data.updates.updatedCells} cells appended.`);
  } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
  }
};


app.post('/submit-inquiry', async (req, res) => {
  const { firstname, lastname, email, contactnumber, query } = req.body;

  if (!firstname || !lastname || !email || !contactnumber || !query) {
      return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
      // Append data to Google Sheets
      await submitToGoogleSheets({ firstname, lastname, email, contactnumber, query });
      res.status(200).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
      console.error('Failed to submit inquiry:', error);
      res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

const LeavetoGoogleSheets = async (data) => {
  const authClient = await auth;  // Make sure this is used for authentication
  const request = {
      auth: authClient,
      spreadsheetId: '1ebLpwpuo8kI4rw2F2e5DHQA0qbUmxmmLdtRhZ9HGOKY', // Replace with your spreadsheet ID
      range: 'Sheet1!A:H', // The range where data should be appended
      valueInputOption: 'USER_ENTERED',
      resource: {
          values: [
              [data.firstname, data.lastname, data.studentcontact, data.parentfirstname, data.parentcontact, data.place, data.fromdate, data.todate]
          ]
      }
  };

  try {
      const result = await sheets.spreadsheets.values.append(request);
      console.log(`${result.data.updates.updatedCells} cells appended.`);
  } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
  }
};

app.post('/submit-leave', async (req, res) => {
  const { firstname, lastname, studentcontact, parentfirstname, parentcontact, place, fromdate, todate } = req.body;

  if (!firstname || !lastname || !studentcontact || !parentfirstname || !parentcontact || !place || !fromdate || !todate) {
      return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
      // Append data to Google Sheets
      await LeavetoGoogleSheets({ firstname, lastname, studentcontact, parentfirstname, parentcontact, place, fromdate, todate });
      res.status(200).json({ message: 'Leave submitted successfully!' });
  } catch (error) {
      console.error('Failed to submit Leave:', error);
      res.status(500).json({ error: 'Failed to submit Leave' });
  }
});

const admissiontoGoogleSheets = async (data) => {
    const authClient = await auth;  // Make sure this is used for authentication
    const request = {
        auth: authClient,
        spreadsheetId: '1jByBDyvOBjsMljRPS1b0dSNNx2g9l-rHv5xqWUpLgiY', // Replace with your spreadsheet ID
        range: 'Sheet1!A:K', // The range where data should be appended
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                [data.firstname, data.lastname, data.middlename, data.address, data.adhaarnumber, data.age, data.contactnumber, data.email, data.parentfirstname, data.parentage, data.parentoccupation]
            ]
        }
    };
  
    try {
        const result = await sheets.spreadsheets.values.append(request);
        console.log(`${result.data.updates.updatedCells} cells appended.`);
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        throw error;
    }
  };

app.post('/submit-admission', async (req, res) => {
    const { firstname, lastname, middlename, address, adhaarnumber, age, contactnumber, email, parentfirstname, parentage, parentoccupation } = req.body;
  
    if (!firstname || !lastname || !middlename || !address || !adhaarnumber || !age || !contactnumber || !email || !parentfirstname || !parentage || !parentoccupation) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }
  
    try {
        // Append data to Google Sheets
        await admissiontoGoogleSheets({ firstname, lastname, middlename, address, adhaarnumber, age, contactnumber, email, parentfirstname, parentage, parentoccupation });
        res.status(200).json({ message: 'Admission data submitted successfully!' });
    } catch (error) {
        console.error('Failed to submit admission data:', error);
        res.status(500).json({ error: 'Failed to submit admission data' });
    }
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1SDVzzxCudxheOTF3xbWlFyTK1IC0d9RHSip0kViy9oU",
        range: "Sheet1!A:B", // Assuming Email is in column A and Password is in column B
      });
  
      const rows = response.data.values || [];
  
      // Check if email and password match
      const isValidUser = rows.some(
        (row) => row[0] === email && row[1] === password
      );
  
      if (isValidUser) {
        res.status(200).send({ success: true, message: "Login successful!" });
      } else {
        res.status(401).send({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: "Server error" });
    }
  });

  app.get("/api/students", async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1jByBDyvOBjsMljRPS1b0dSNNx2g9l-rHv5xqWUpLgiY",
        range: "Sheet1!A2:L", // Adjust the range based on your spreadsheet structure
      });
  
      const rows = response.data.values;
  
      if (!rows || rows.length === 0) {
        return res.status(404).json({ message: "No data found in the sheet." });
      }
  
      // Map rows to structured data
      const students = rows.map((row) => ({ // Add an ID column in the sheet or generate one
        firstname: row[0],
        middlename: row[1],
        lastname: row[2],
        address: row[3],
        aadhar: row[4],
        age: row[5],
        contact: row[6],
        email: row[7],
        parentFirstname: row[8],
        parentAge: row[9],
        parentOccupation: row[10],
      }));
  
      res.json(students);
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
