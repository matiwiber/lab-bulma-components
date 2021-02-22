import React from 'react'

const Message = (props) => {
    return (
        <article class={props.className}>
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.message}
            </div>
        </article>
    )
}

export default Message;
