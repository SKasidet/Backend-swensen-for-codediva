module.exports = {
    indexpage: async (req, res) => {
      try {
        const data = await db.product.findAll();
        const formattedCategories = data.map((item) => item.dataValues);
        res.render("product-index", { categories: formattedCategories });
      } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Internal Server Error");
      }
    },
    createpage: async (req, res) => {
        const data = await db.category.findAll();
        console.log(data.category)
      res.render("product-create",{category:data});
    },
    editpage: async (req, res) => {
      try {
        const category = await db.category.findAll();

          const data = await db.product.findOne({where: {id:req.params.id}});
          res.render("product-edit", { product: data.dataValues,category:category });    
      } catch (error) {
          // Handle any errors
          console.error('Error fetching product:', error);
          res.status(500).send('Error fetching product. Please try again later.');
      }  },
    getOne: async (req, res) => {
      db.product
        .findOne({ where: { id: req.body.id } })
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
    },
    getAll: async (req, res) => {
      db.product
        .findAll()
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
    },
    create: async (req, res) => {
      await db.product
        .create({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category_Id: req.body.category_id
        })
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
    },
  
    update: async (req, res) => {
      console.log(req.body)
      db.product
        .update(req.body, { where: { id: req.body.id } })
        .then(() => res.send(result))
        .catch((err) => res.send(err));
    },
  
    delete: async (req, res) => {
      try {
        await db.product.destroy({ where: { id: req.params.id } });
        res.redirect("back");
      } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send("Error deleting product. Please try again later.");
      }
    },
  };
  