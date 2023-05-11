const oracledb = require('oracledb');
const getcontent = async (req, res) => {
  try {
    const connection = oracledb.createConnection({
      host: 'localhost',
      user: 'yash',
      password: 'yash@2026',
      database: 'yash',
      authSwitchHandler: function ({pluginName, pluginData}, cb) {
        if (pluginName === 'oracledb_native_password') {
          const password = 'yash@2026';
          const token = oracledb.auth.generateToken(password);
          return cb(null, token);
        }
        return cb(new Error('Unsupported auth plugin'));
      }
    });
    connection.connect();
    const selectQuery = `SELECT * FROM message ORDER BY timestamp`;
    connection.query(selectQuery, (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(typeof results);
        res.status(201).json(results);
      }
    });
    connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { getcontent };
