// pages/api/proxy.ts

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { path } = req.query;

    if (typeof path !== "string") {
      return res.status(400).send("Bad Request");
    }

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/?path=${path}`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => res.status(500).send(error));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
