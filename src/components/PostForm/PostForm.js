import React from 'react';
import './PostForm.css';

const PostForm = props => {
	return (
		<div className="post_form">
			<h3>Add new post</h3>
			<form onSubmit={props.onSubmit}>
				<div className="post_form_title">
					<p>Title</p>
					<input
						type="text"
						name="title"
						value={props.title}
						onChange={props.onChange}
					/>
				</div>
				<div className="post_form_description">
					<p>Description</p>
					<input
						type="textarea"
						name="description"
						value={props.description}
						onChange={props.onChange}
					>
					</input>
				</div>
				<div>
					<button className="btn">Save</button>
				</div>
			</form>
		</div>
	);
};

export default PostForm;