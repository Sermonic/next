const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
  const db = await sqlite.open({
    filename: "db.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: "last" });

  const faq = await db.all("select * from FAQ order by createDate desc");
  console.log("All FAQ", JSON.stringify(faq, null, 2));

  const cars = await db.all("select * from Car");
  console.log("All Cars", JSON.stringify(cars, null, 2));
}

setup();
