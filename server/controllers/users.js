var mongoose = require('mongoose');
var users = mongoose.model('user');


module.exports = (function() {
return {

  addUser: function(req, res) {
    var new_user= new users ({name: req.body.name, email: req.body.email, password: req.body.password});
    console.log(req.body);
    new_user.save(function(err, results){
      if (err){
        console.log(err);
      }
      else
        {
          res.json(results);
        }
       console.log(results);
      });
    },

  show: function(req, res){
    users.findOne({email: req.body.email}, function (err, results){
      if (err)
      {
        console.log(err);
      }
      else
      {
        if(results == null)
        {
          console.log("No user associated with this email exits. Please sign up");
          // results.usercheck = 'nouser';
          // res.json(results);
        }
        else
        {
        if (results.password != req.body.password)
            {
              console.log("Invalid Password, please try again");
              results.usercheck = 'invalid';
              res.json(results);
            }
            else {
              results.usercheck = 'success';
              res.json(results);
            }

        }
        // console.log(results);
        // res.json(results);
      }

      });
}



  }
})();
