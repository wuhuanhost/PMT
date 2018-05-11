const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const dbPath = path.resolve(__dirname, "../", "../", "public", "data", 'db.json');
const adapter = new FileSync(dbPath)
const db = low(adapter)
module.exports = db;