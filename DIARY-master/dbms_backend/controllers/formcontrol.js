const oracledb = require('oracledb');

const addcontent = async (req, res) => {
  try { 
    console.log(req.body);
    const { content } = req.body;
    const message = {
      content
    }

    console.log(message);
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

    const insertQuery = 'INSERT INTO message VALUES (?, CURRENT_TIMESTAMP)';

    connection.query(insertQuery, [
      message.content
    ], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(results);
        res.send(results);
      }
    });

    connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { addcontent };
