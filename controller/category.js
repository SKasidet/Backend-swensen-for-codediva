module.exports = {
    getOne: async (req, res) => {
        db.category.findOne({ where: { id: req.body.id }}).then(result => res.send(result)).catch(err => res.send(err))
    },
    getAll: async (req, res) => {
        db.category.findAll().then(result => res.send(result)).catch(err => res.send(err))
    },
    create: async (req, res) => {
        db.category.create({
            name: req.body.name,
            description: req.body.description,
            })
        .then(result => res.send("สร้างสำเร็จ"))
        .catch(err => res.send(err))

    },

    // update: async (req, res) => {
    //     db.category.update(req.body, { where: { id: req.body.id } })
    //         .then(() => res.send("update"))
    //         .catch(err => res.send(err))
    // },
    
    // delete: async (req, res) => {
    //     db.category.destroy({ where: { id: req.body.id} })
    //     res.send(`'delete category:'` + req.body.id)

    // },
    
}