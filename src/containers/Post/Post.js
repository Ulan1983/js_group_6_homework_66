import React, {Component, Fragment} from 'react';
import axiosPosts from "../../axios-posts";
import './Post.css';
import {NavLink} from "react-router-dom";

class Post extends Component {
	state = {
		post: null
	};

	async componentDidMount() {
		const id = this.props.match.params.id;
		const response = await axiosPosts.get('/posts/' + id + '.json');

		this.setState({post: response.data});
	}

	deletePost = async () => {
		const id = this.props.match.params.id;
		await axiosPosts.delete('/posts/' + id + '.json');
		this.props.history.replace('/');
	};

	render() {
		return this.state.post &&(
			<Fragment>
				<div className="post">
					<p><b>Title: </b> {this.state.post.title}</p>
					<p><b>Description: </b> {this.state.post.description}</p>
					<p><b>Date: </b> {this.state.post.date}</p>
					<button className="delete_btn" onClick={this.deletePost}>Delete</button>
					<NavLink to={"/posts/" + this.props.match.params.id + "/edit"}>Edit</NavLink>
				</div>
			</Fragment>
		);
	}
}

export default Post;