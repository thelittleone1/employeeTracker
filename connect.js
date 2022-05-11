// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log("Error, did not connect to database");
  });
  