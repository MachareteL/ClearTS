// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
type Data = {
  name: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cliente = new PrismaClient();
  const result = await cliente.user.create({
    data: { email: "Macharetelucas@gmail.com", name: "Lucas" },
  });
  res.status(201).json({ name: result.name });
}
