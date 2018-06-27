import React, { Component } from 'react';

class Modal extends Component {
    
    render() {
        if(!this.props.show) {
            return null;
        }
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '50px'
        }
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: '5px',
            maxWidth: '500px',
            minHeight: '300px',
            margin: '0 auto',
            padding: '30px'
        }
        return (
          <div className='backdrop' onClick={this.props.onClose} style={backdropStyle}>
            <div className='modal' style={modalStyle}>
                {this.props.children}
                <div className='modal-footer'>
                    <button onClick={this.props.onClose}>Close Modal</button>
                </div>
            </div>
          </div>  
        );
    }
}

export default Modal;