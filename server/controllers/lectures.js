var mongoose = require('mongoose');
var lectures = mongoose.model('lecture');




module.exports = (function() {
  return {

    add: function(req, res) {
      console.log(req.body);
      var new_lecture = new lectures ({ author: req.body.username, title: req.body.title, participants : req.body.participants, lecture: req.body.body});
      console.log('testing in server controller', req.body);

      //check if user exits
      new_lecture.save(function(err, results){
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


    showlectures: function(req, res){
      console.log('testing username in in lecture controller', req.body);
      lectures.find({author: req.body.loggeduser }, function(err, results){
        if (err){
          console.log(err);
        }
        else
        {
          console.log(results);
          res.json(results);
        }
      })
    }

  }
})();
