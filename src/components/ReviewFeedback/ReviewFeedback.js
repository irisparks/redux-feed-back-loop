
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ReviewFeedback extends Component {
    handleSubmit = () => {
        axios({
            method:"POST",
            url:"/submit",
            data: {
                ...this.props.formReducer,
            }
        }).then(response => {
            console.log("post success")
            this.props.dispatch({type:"GET_ADMIN", payload:response.data})
        }).catch(error => {
            console.log(error);
        })
        // this.props.history.push("/");
    }
 
    render() {
        return (    
            <>
            <div className="reviewPage">

                <h1>Review Your Feedback!</h1>
                <p key={this.props.formReducer.id}>Feelings: {this.props.formReducer.feeling} </p>
                <p key={this.props.formReducer.id}>Understanding: {this.props.formReducer.understanding}</p>
                <p key={this.props.formReducer.id}>Supported: {this.props.formReducer.support}</p>
                <p key={this.props.formReducer.id}>Comments: {this.props.formReducer.comments}</p>

                <Link to="/">
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </Link>
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(ReviewFeedback);

