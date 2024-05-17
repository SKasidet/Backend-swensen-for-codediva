const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken')

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await db.user.findOne({ where: { email: email } });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
            return res.status(200).json({ message: "ล็อกอินสำเร็จ" });
          } else {
            return res.status(409).json({ error: "รหัสผ่านไม่ถูกต้อง" });
          }
        } else {
          return res.status(409).json({ error: "ไม่พบUsernameนี้่" });
        }
      } else {
        return res.status(409).json({ error: "กรุณาใส่Usernameและรหัสผ่าน" });
      }
    } catch (error) {
      res.send(error);
    }
  },
  getUser: (req, res) => {
    db.user
      .findOne({ where: { id: req.body.id } })
      .then((result) =>
        res.send({
          result,
        })
      )
      .catch((err) => res.send(err));
  },
  getAllUser: (req, res) => {
    db.user
      .findAll({ include: { all: true } })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
  create: async (req, res) => {
    const user = await db.user.findOne({ where: { email: req.body.email } });
    // console.log(user)
    if (user !== null)
      return res.status(400).json({ error: "มีผู้ใช้อีเมลนี้แล้ว" });
    if (req.body.password) {
      let salt = await bcrypt.genSaltSync(10);
      let hash = await bcrypt.hashSync(req.body.password, salt);
      db.user
        .create({
          email: req.body.email,
          password: hash,
          name: req.body.name,
          lastname: req.body.lastname,
          tel: req.body.tel,
          gender: req.body.gender,
          birthday: req.body.birthday,
          acceptnews: req.body.acceptnews,
        })
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
    } else {
      res.send("กรอกรหัสผ่าน");
    }
  },

  //   update: async (req, res) => {
  //     db.user
  //       .update(req.body, { where: { username: req.body.username } })
  //       .then(() => res.send("update"))
  //       .catch((err) => res.send(err));
  //   },

  //   delete: async (req, res) => {
  //     db.user
  //       .destroy({ where: { username: req.body.username } })
  //       .then(() => res.send("delete"))
  //       .catch((err) => res.send(err));
  //   },
};
