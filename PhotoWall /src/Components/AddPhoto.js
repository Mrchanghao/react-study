import React, { Component } from 'react';

class AddPhoto extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();
        const imageLink = e.target.elements.link.value;
        const description = e.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(imageLink && description) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
            <div>
             <h1>this is ADD Photo</h1>
             <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='이미지 LINK' name='link'/>
                    <input type='text' placeholder='description' name='description'/>
                    <button>Post</button>
                </form>
             </div>
             
            </div>
        )
    }
}

export default AddPhoto;
