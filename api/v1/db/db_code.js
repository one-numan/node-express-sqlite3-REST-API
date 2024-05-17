const { open } = require("sqlite");
const sqlite = require("sqlite3").verbose();

/** `@DB_FILE_NAME` : Path of SQLite3 Database File*/
const DB_FILE_NAME = "./api/v1/db/db.sqlite3";

async function db_check() {
  const db = await new sqlite.Database("db.sqlite3", (err) => {
    if (err) {
      console.error(`Here is an Error ${err}`);
      return false;
    } else {
      console.log("Connected");
      return true;
    }
  });
}

async function db_check2() {
  return open({
    filename: DB_FILE_NAME,
    driver: sqlite.Database,
  });
}

async function getUsers() {
  const db = await db_check2();
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

function db_close() {
  const db = new sqlite.Database("db.sqlite3", (err) => {
    if (err) {
      console.log(`Database Error in Connection Close ${err}`);
    } else {
      console.log("Database Connection Closed");
    }
  });
}

/**
 * Getting Employee Entries from DB
 * @param {*} table_name
 * @param {*} columns
 * @param {*} where
 * @param {*} extra
 * @param {*} limit
 * @param {*} offset
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
      console.log("Connected");
      const query_str = `SELECT ${columns} FROM ${table_name} LIMIT ${limit}`;
      const datac = await db.all(query_str);
      console.log(datac);
      console.log(typeof datac);
      return await datac;
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

  const db = await db_check2();
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

async function db_insertOne(table_name = "") {
  //Check DB Connection

  const db = await db_check2();
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
