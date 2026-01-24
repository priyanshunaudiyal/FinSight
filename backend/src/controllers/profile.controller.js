import prisma from "../db.js";

export async function getProfile(req, res) {
  res.json({ user: req.user });
}

export async function updateProfile(req, res) {
  const { firstName, lastName } = req.body;

  const updatedUser = await prisma.user.update({
    where: { id: req.user.id },
    data: {
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  });

  res.json({ user: updatedUser });
}
