const mongoose = require('mongoose'),
    Product = mongoose.model('ProductSchema');



module.exports = {

    all: function (req, res) {
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json({ message: 'Fail', error: err }))
    },

    one: function (req, res) {
        Product.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json({ message: 'Fail', error: err }))
    },

    create: function (req, res) {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json({ message: 'Fail', error: err }))
    },

    // add: function (req, res) {
    //     SubSchema.create(req.body)
    //         .then(rating => {
    //             PrimaryObject.findById({ _id: req.params.id })
    //                 .then(primary => {
    //                     primary.reviews.push(rating);
    //                     primary.save()
    //                         .then(updatedPrimary => res.json(updatedPrimary))
    //                         .catch(err => res.json({message: 'Fail', error: err }))
    //                 })
    //                 .catch(err => res.json({message: 'Fail', error: err }))
    //         })
    //         .catch(err => res.json({message: 'Fail', error: err }))
    // },

    update: function (req, res) {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.json({ message: 'Fail', error: err }))
    },

    delete: function (req, res) {
        Product.remove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json({ message: 'Fail', error: err }))
    }

}