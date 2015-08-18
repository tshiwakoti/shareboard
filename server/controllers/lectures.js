var mongoose = require('mongoose');
var lectures = mongoose.model('lecture');


module.exports = (function() {
return {

  addLecture: function(req, res) {
    var new_lecture= new lectures ({title: req.body.currenttitle,
    lecture: req.body.lecture, username: req.body.username, participants: req.body.participants});
    console.log(req.body);
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
      lectures.find({}, function(err, results){
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
