import React, {Component, Fragment} from 'react';
import axiosPosts from "../../axios-posts";
import './EditPost.css';

class EditPost extends Component {
	state = {
		title: '',
		description: '',
	};

	valueChanged = event => this.setState({[event.target.name]: event.target.value});

	async componentDidMount() {
		const id = this.props.match.params.id;
		const response = await axiosPosts.get("/posts/" + id + ".json");

		this.setState({
			title: response.data.title,
			description: response.data.description
		})
	}

	editPost = async (event) => {
		event.preventDefault();

		const post = {
			title: this.state.title,
			description: this.state.description,
			date: new Date().toDateString(),
		};

		if (this.state.title !== '' && this.state.description !== '') {
			const id = this.props.match.params.id;
			await axiosPosts.put("/posts/" + id + ".json", post);
			this.props.history.push('/');
		} else {
			alert('Please fill out all required fields!');
		}
	};


	render() {
		return (
			<Fragment>
				<div className="post_form">
					<h3>Edit post</h3>
					<form onSubmit={this.editPost}>
						<div className="post_form_title">
							<p>Title</p>
							<input
								type="text"
								name="title"
								value={this.state.title}
								onChange={this.valueChanged}
							/>
						</div>
						<div className="post_form_description">
							<p>Description</p>
							<input
								type="textarea"
								name="description"
								value={this.state.description}
								onChange={this.valueChanged}
							>
							</input>
						</div>
						<div>
							<button className="btn">Edit</button>
						</div>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default EditPost;