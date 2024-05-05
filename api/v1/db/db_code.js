// const { query } = require("express");

const { query } = require("express");

const sqlite = require("sqlite3").verbose();

const DB_FILE_NAME = "db.sqlite3";

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
  try {
    db = await new sqlite.Database(DB_FILE_NAME);
    return db;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getUsers() {
  const db = await db_check2();
  console.log(db);
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
      const query = `SELECT ${columns} FROM ${table_name} LIMIT ${limit}`;
      const datac = await db.all(query);
      // console.log(datac, "datac");

      return await datac;
      // db.all(query, async (err, rows) => {
      //   console.log(err, rows);
      //   if (err) {
      //     console.log(err);
      //     return await false;
      //   } else {
      //     console.log("Send Data", rows);
      //     return await rows;
      //   }
      // });
      // return true;
    }
  });
}

exports.db_getAll = db_getAll;
exports.getUsers = getUsers;
