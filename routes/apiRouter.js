let Router = require('express').Router;
const apiRouter = Router()

/*let User = require('../db/schema.js').User
let Post = require('../db/schema.js').Post*/

let Tweet = require('../db/schema.js').Tweet

/*
apiRouter.get('/users', function(req, res){
  User.find({}, function(err, results){
    res.json(results)
  })
})
*/


// read many
apiRouter.get('/tweets', function(request, response){

  Tweet.find({}, function(err, results){
    if(err){
      console.log(err)
      response.json({
        message: err
      })
    }
    response.json(results)
  })

})

apiRouter.post('/tweets', function(request, response){
  // create new variable with Tweet constructor created by Mongoose,
  // passing in Tweet data sent by the client
  let newTweet = new Tweet(request.body)
  // save new Tweet into database, show error callback if shit hits the fan
  newTweet.save(function(err){
    if(err){
      console.log(err)
      response.json({
        message: err
      })
    } else {
      // send the new tweet back to client side to show it was
      // successfully saved
      response.json(newTweet)
    }
  })
})



//read one
apiRouter.get('/posts/:_id', function(req, res){
  Post.findOne(req.params, function(err, result){
    res.json(result)
  })
})

//create one
apiRouter.post('/posts', function(req, res){
  let newPost = new Post(req.body)
  newPost.save(function(err){
    if(err) return res.json({message: 'error saving'})
      res.json(newPost)
  })
})

//update one
apiRouter.put('/posts/:_id', function(req,res) {
  Post.findOne(req.params, function(err,record) {
    for (var prop in req.body) {
      record[prop] = req.body[prop]
    }
    record.save(function(err){
      if(err) return res.json({message: 'error saving'})
      res.json(record)
    })
  })
})

//delete one
apiRouter.delete('/posts/:_id', (req,res) => {
  Post.remove(req.params,(err) => {
    res.status(204).json({msg: "record successfully deleted",
      _id: req.params._id})
  })
})

module.exports = apiRouter