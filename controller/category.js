module.exports = {
  indexpage: async (req, res) => {
    try {
      const data = await db.category.findAll();
      const formattedCategories = data.map((item) => item.dataValues);
      res.render("category-index", { categories: formattedCategories });
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  createpage: async (req, res) => {
    res.render("category-create");
  },
  editpage: async (req, res) => {
    try {

        const data = await db.category.findOne({where: {id:req.params.id}});
        res.render("category-edit", { category: data.dataValues });    
    } catch (error) {
        // Handle any errors
        console.error('Error fetching category:', error);
        res.status(500).send('Error fetching category. Please try again later.');
    }  },
  getOne: async (req, res) => {
    db.category
      .findOne({ where: { id: req.body.id } })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
  getAll: async (req, res) => {
    db.category
      .findAll()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
  create: async (req, res) => {
    await db.category
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },

  update: async (req, res) => {
    console.log(req.body)
    db.category
      .update(req.body, { where: { id: req.body.id } })
      .then(() => res.send(result))
      .catch((err) => res.send(err));
  },

  delete: async (req, res) => {
    try {
      await db.category.destroy({ where: { id: req.params.id } });
      res.redirect("back");
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).send("Error deleting category. Please try again later.");
    }
  },
};
