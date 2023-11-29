import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { model, Date, Quantity, LicenseLv, Comment, serialnum } = req.body

  const result = await prisma.BatchForm.create({
    data: {
        model: model ,
        date: Date + "T00:00:00Z",
        quantity: parseInt(Quantity),
        licenselv: parseInt(LicenseLv),
        comment: Comment,
        serialnum: serialnum,
    },
  })

  res.json(result)
}
