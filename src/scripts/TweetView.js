import React from 'react'
import ReactDOM from 'react-dom'

const TweetView = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				<Composer />
				<TweetContainer tweetColl={this.props.tweetColl} />
			</div>
			)
	}
})

const Header = React.createClass({
	render: function(){
		return(
			<div className="header">
				<h1>THE VOID</h1>
			</div>
			)
	}
})

const TweetContainer = React.createClass({
	
	render: function(){
		console.log("tweetcoll", this.props.tweetColl)
		return(
			<div className="tweetColl">
				{this.props.tweetColl.map((model)=>{
					return <Tweet tweetColl={model} />})}
			</div>
			)
	}
})

const Tweet = React.createClass({
	render: function(){
		console.log('tweet model', this.props.tweetColl)
		return(
			<div className="tweet">
				<h6></h6>
			</div>
			)
	}
})

const Composer = React.createClass({
	_submitTweet: function(){

	},

	render: function(){
		console.log('rendering Composer')
		return(
			<div className="row">
				<form onSubmit={this._submitTweet}>
					<input className="u-full-width" type="email" placeholder="@yourself" id="userInput" />
					<textarea className="u-full-width" placeholder="SCREAM IT TO THE VOID" id="tweet"></textarea>
					<input className="button-primary" type="submit" value="Submit" />
				</form>
			</div>
			)
	}
})

export default TweetView