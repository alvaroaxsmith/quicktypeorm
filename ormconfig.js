module.exports = {
  "type": "postgres",
  "url": "postgres://postgres:docker@localhost:5433/postgres",
  "entities": [
    "src/models/**/*.ts"
 ],
 "migrations": [
  "src/migrations/**/*.ts"
],
 "cli":{
  "migrationsDir": [
    "src/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
