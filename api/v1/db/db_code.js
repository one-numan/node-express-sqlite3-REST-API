const { open } = require("sqlite");
const sqlite = require("sqlite3").verbose();

/** `@DB_FILE_NAME` : Path of SQLite3 Database File*/
const DB_FILE_NAME = "./api/v1/db/db.sqlite3";

/**
 * Check Database Connection
 * @returns {Object} {Db_file , driver_name}
 */
async function db_check() {
  return open({
    filename: DB_FILE_NAME,
    driver: sqlite.Database,
  });
}

/**
 * Getting All Employee Data
 * @returns {Object} |{ Return Data or Issue }
 */
async function getUsers() {
  const db = await db_check();
  // console.log(db);
  try {
    d = await db.all("SELECT * FROM employee_V1 LIMIT 10");
    console.log(d);
    return d;
  } catch (err) {
    return { issue: err };
  } finally {
    await db.close();
  }
}

/**
 * Getting Employee Entries from DB
 * @param {String} table_name
 * @param {String,Array}  columns
 * @param {String} where
 * @param {String} extra
 * @param {String} limit
 * @param {String} offset
 */
// Getting All DataBase Query With Limit 10 Offset 0
async function db_getAll(
  table_name,
  columns = "*",
  where = "",
  extra = "",
  limit = "10",
  offset = "0"
) {
  //Check DB Connection
  const db = await new sqlite.Database(DB_FILE_NAME, async (err) => {
    if (err) {
      console.error(`Here is an Error ${err}`);
      return false;
    } else {
      try {
        console.log("Connected | DB_Get_All");
        const query_str = `SELECT ${columns} FROM ${table_name} LIMIT ${limit}`;
        const rows_data = await db.all(query_str);
        // console.log(rows_data);
        // console.log(typeof rows_data);
        return await rows_data;
      } catch (e) {
        console.log(`Something Went Wrong ${e}`);
      } finally {
        db.close();
        console.log(`DB's Operation Done`);
      }
    }
  });
}

/**
 * Fetching One Entries from Database
 * @param {String} table_name
 * @param {integer} id
 * @param {String,Arrray} columns
 * @returns data or any Error
 */
async function db_getone(table_name, id, columns = "*") {
  //Check DB Connection

  const db = await db_check();
  // console.log(db);
  try {
    const data = await db.get(`SELECT * FROM ${table_name} WHERE id = ${id} `);
    // console.log(d);
    console.log("Data Fetch | Done SuccessFully");
    return data;
  } catch (err) {
    return { issue: err };
  } finally {
    await db.close();
  }
}

/**
 * DB Insert One Entries
 * @param {String} table_name
 * @returns {Boolean} If No Error Return True | If Error Return False
 */
async function db_insertOne(table_name = "") {
  //Check DB Connection

  const db = await db_check();
  // console.log(db);
  try {
    d = await db.run(`SELECT * FROM ${table_name} WHERE id = ${id} `);
    console.log(d);
    return d;
  } catch (err) {
    return { issue: err };
  } finally {
    await db.close();
  }
}
exports.db_getAll = db_getAll;
exports.getUsers = getUsers;
exports.db_getone = db_getone;

module.exports = { db_getAll, db_getone, db_check, db_insertOne };
