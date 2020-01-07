import React, {Component, Fragment} from 'react';
import axiosPosts from "../../axios-posts";
import './Posts.css';
import {NavLink} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

class Posts extends Component {
	state = {
		posts: [],
		loading: true
	};

	getData = async() => {
		const response = await axiosPosts.get('/posts/.json');

		if (response.data) {
			this.setState({posts: response.data, loading: false});
		}
	};

	componentDidMount() {
		return this.getData();
	}

	render() {
		return (
			this.state.loading ?
				<Spinner/> :
				<Fragment>
					<div className="posts">
						{Object.keys(this.state.posts).map(id => (
								<div className="card" key={id}>
									<p> <b>Created on:</b> {this.state.posts[id].date}</p>
									<p><b>Title: </b> {this.state.posts[id].title}</p>
									<NavLink to={"/posts/" + id}>Read more >></NavLink>
								</div>
						))}
					</div>
				</Fragment>
			);
		}
	}

export default withErrorHandler(Posts, axiosPosts);