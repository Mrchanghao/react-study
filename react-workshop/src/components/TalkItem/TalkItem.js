import React from 'react';
import './TalkItem.css';

const TalkItem = (props) => {
    return (
        <div className='talkItem'>
        <div className='talkItem-location'>
            <span>{props.time}</span>
            <span>{props.place}</span>
        </div>
        <div className='talkItem-content'>
            <span className='talkItem-talk'>{props.talk}</span>
            <span>연사: {props.speaker}</span>
        </div>
    </div>
    )
}

export default TalkItem;