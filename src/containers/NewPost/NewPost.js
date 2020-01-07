import React, {Component, Fragment} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import axiosPosts from "../../axios-posts";
import './NewPost.css';

class NewPost extends Component {
	state = {
		title: '',
		description: '',
	};

	valueChanged = event => this.setState({[event.target.name]: event.target.value});

	addPost = async (event) => {
		event.preventDefault();

		const post = {
			title: this.state.title,
			description: this.state.description,
			date: new Date().toDateString(),
		};

		if (this.state.title !== '' && this.state.description !== '') {
			await axiosPosts.post('/posts.json', post);
			this.props.history.push('/');
		} else {
			alert('Please fill out all required fields!');
		}
	};


	render() {
		return (
			<Fragment>
				<div className="new_post">
					<PostForm
						onChange={this.valueChanged}
						onSubmit={this.addPost}
					/>
				</div>
			</Fragment>
		);
	}
}

export default NewPost;