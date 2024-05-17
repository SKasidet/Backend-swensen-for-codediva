module.exports = {
    getOne: async (req, res) => {
        db.product.findOne({ where: { id: req.body.id }}).then(result => res.send(result)).catch(err => res.send(err))
    },
    getAll: async (req, res) => {
        db.product.findAll().then(result => res.send(result)).catch(err => res.send(err))
    },
    create: async (req, res) => {
        db.product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            categoryId: req.body.categoryId,
            })
        .then(result => res.send("สร้างสำเร็จ"))
        .catch(err => res.send(err))

    },

    // update: async (req, res) => {
    //     db.product.update(req.body, { where: { id: req.body.id } })
    //         .then(() => res.send("update"))
    //         .catch(err => res.send(err))
    // },
    
    // delete: async (req, res) => {
    //     db.product.destroy({ where: { id: req.body.id} })
    //     res.send(`'delete product:'` + req.body.id)

    // },
    
}