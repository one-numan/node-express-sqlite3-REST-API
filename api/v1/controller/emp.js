const db_code = require("../db/db_code");
function empGet() {
  "Get the Dara";
  data = { apiV1: "get" };
  return data;
}
async function empGetAll(req, res) {
  try {
    data = await db_code.db_getAll("employee_V1", "*");
    console.log(typeof data);
    console.log("I Get It");
    return await res.send({ j: data });
  } catch (error) {
    console.log(error);
    return res.send({ k: "Issue " });
  }
}

async function listUsers(req, res) {
  try {
    const users = await db_code.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
exports.empGet = empGet;
exports.empGetAll = empGetAll;
exports.listUsers = listUsers;
