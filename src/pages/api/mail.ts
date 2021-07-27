import { NextApiRequest, NextApiResponse } from "next";
import { isValid } from "utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mail = req.body;
  if (!isValid(mail)) {
    return res.status(401);
  }

  console.log(mail);
}
