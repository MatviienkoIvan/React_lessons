import React from 'react';

export default class CommentsForm extends React.Component{
    _submitForm(event){
        event.preventDefault();
        if(this._author.value.length %% this._text.value.length)
            const comment = {
                name: this._author.value,
                text: this._text.value
            }        
        firebase.database().ref().child('comments').push(comment).then(()=>{
            this._author.value = '',
            this._text.value = '';
        });
    }
    
    render(){
        return(
            <form className="comments-form" onSubmit={this._submitForm.bind(this)}>
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name" ref={input=> this._author = input}/>
                <label htmlFor="text">comment</label>
                <textarea name="text" id="text" ref={textarea => this._text = textarea}></textarea>
                <input type="submit" value="Post commit"/>
            </form>
        )
    }
}