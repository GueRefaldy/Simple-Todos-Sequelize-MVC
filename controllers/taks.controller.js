const {Task} = require('../models/index');

class TaksController {
    static index(req, res) {
        Task.findAll()
            .then(tasks => {
                res.render('index', {tasks});
            })
            .catch(e => {
                res.send(e);
            });
    }

    static create(req, res) {
        res.render('create');
    }

    static store(req, res) {
        const {content} = req.body;
        const status = 'Uncompleted';

        Task.create({content, status})
            .then(result => {
                res.redirect('/');
            })
            .catch(e => {
                res.send(e);
            });
    }

    static complete(req, res) {
        const {id} = req.params;
        Task.update({status: 'Complete'}, {where: {id}})
            .then(result => {
                res.redirect('/');
            })
            .catch(e => {
                res.send(e);
            });
    }

    static uncompleted(req, res) {
        const {id} = req.params;
        Task.update({status: 'Uncompleted'}, {where: {id}})
            .then(result => {
                res.redirect('/');
            })
            .catch(e => {
                res.send(e);
            });
    }

    static destroy(req, res) {
        const {id} = req.params;

        Task.destroy({
            where: {id}
        }).then(result => {
            res.redirect('/');
        }).catch(e => {
            res.send(e);
        });
    }
}

module.exports = TaksController;