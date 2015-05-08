var _ = require('lodash');

// Models 
var Users = require('../data/models/users');

// TODO: Flesh out
//var Library = require('../data/models/library');

var initializeRoutes = function(router) {
	
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'KOHAPI' });
	  next()
	});

	router.route('/users').get(function(req, res) {
		Users.find(function(err, users) {
			if (err) {
				res.send(err);
			}
			else {
				res.json(users);	
			}
		});
	})
	 .put(function(req, res) {

        // use our bear model to find the bear we want
        console.log('doing put ' + req.params._id);
        Users.findById(req.params._id, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.user;
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })
	.post(function(req, res) {
		var user = new Users();   
		user.user = req.body.user;
		user.firstname = req.body.firstname;
		user.lastname = req.body.lastname;
		delete(user._id);
		console.log('i have ' + JSON.stringify(user));
		// save the bear and check for errors
		user.save(function(err) {
			console.log('Err:' + err);
			if (err)
				res.json({ error: '' + err});
			else 
				res.json({ message: 'Usar created!' });
		});
	});


	// Specifics for user
	router.route('/users/:user_id').get(function(req, res) {
	    Users.findById(req.params.user_id, function(err, user) {
	        if (err)
	            res.send(err);
	        res.json(user);
	    });
	});
}

module.exports = {
	initializeRoutes:initializeRoutes
};