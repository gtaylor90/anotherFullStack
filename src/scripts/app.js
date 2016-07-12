import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import {TweetCollection} from './models.js'
import TweetView from './TweetView.js'

const app = function() {
	const TweetRouter = Backbone.Router.extend({
		routes: {
			"home": "_showTweets",
			"*catchall": "_redirectHome"
		},

		_showTweets: function(){
			var coll = new TweetCollection()
			coll.fetch()
			ReactDOM.render(<TweetView tweetColl={coll} />, document.querySelector('.container'))
		},

		_redirectHome: function(){
			location.hash="home"
		},

		initialize: function(){
			Backbone.history.start()
		}

	})
	var whatever = new TweetRouter()

}

app()