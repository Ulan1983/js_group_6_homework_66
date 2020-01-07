import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./containers/Posts/Posts";
import NewPost from "./containers/NewPost/NewPost";
import EditPost from "./containers/EditPost/EditPost";
import Post from "./containers/Post/Post";

const App = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Posts}/>
            <Route path="/posts/add" component={NewPost}/>
            <Route path="/posts/:id/edit" component={EditPost}/>
            <Route path="/posts/:id" component={Post}/>
        </Switch>
    </BrowserRouter>
);


export default App;
