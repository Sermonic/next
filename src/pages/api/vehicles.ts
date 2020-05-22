import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import sqlite from "sqlite";
import { verify } from "jsonwebtoken";
import { secret } from "../../../api/secret";

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  {
    verify(req.cookies.auth!, secret, async function (err, decoded) {
      if (!err && decoded) {
        return await fn(req, res);
      }

      res.status(401).json({ message: "Sorry you are not authenticated" });
    });
  }
};

export default authenticated(async function authenticatedgetAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");
  const vehicles = await db.all("select * from vehicle");

  res.json(vehicles);
});
