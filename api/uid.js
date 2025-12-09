export default function handler(req, res) {
  const { user } = req.query;

  if (!user) {
    return res.status(400).json({
      status: false,
      message: "No UID provided",
    });
  }

  res.status(200).json({
    status: true,
    uid: user,
    message: "BD TCP API Working!"
  });
}
