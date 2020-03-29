
exports.isAdmin = (req, res, next) => {
  if (req.user.role === "ROLE_ADMIN") next(req, res);
  else res.status(404).json({ error: "Debes ser administrador"});
};