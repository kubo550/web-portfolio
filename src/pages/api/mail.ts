import { NextApiRequest, NextApiResponse } from "next";
import { isValid, sendMail } from "utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    console.log("405");
    return res.status(405).send(false);
  }

  const mail = req.body;
  if (!isValid(mail)) {
    console.log("401");
    return res.status(401).send(false);
  }

  try {
    await sendMail(mail);
    return res.status(200).send(true);
  } catch (e) {
    return res.status(500).send(false);
  }
}
