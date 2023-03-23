class UserController {
  // Rota para obter os dados do usuário logado
  async getUser(req, res) {
    try {
      if (req.user) {
        const user = {
          id: req.user.id,
          username: req.user.username,
          email: req.user.email,
          avatar: req.user.avatar
        };
        res.json(user);
      } else {
        res.status(401).send('Unauthorized');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new UserController();
