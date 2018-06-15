import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './commentsList.js'
import CommentsForm from './commentsForm.js'
import firebase from 'firebase';

var condig = {
    apiKey: 'AIzaSyBys49cTk4HePI2-WRMA4Z1xWqgpDODxnc',
    databaseURL: 'https://react-test-proj-572c1.firebaseio.com/'

}

firebase.initializeApp(config);

class MainComponent extends React.Component{
    render(){
        return(
            <div className="comments-box">
                 <CommentsForm />
                 <CommentsList />
            </div>
        )
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('app')
)