import React from 'react'

export default function Card(props) {
    const dragStart = (e) => {
        let holder = e.target;
        e.dataTransfer.setData('card_id',holder.id);

        setTimeout(()=>{
            holder.style.display = "none";
        }, 0);
    }
    const dragOver = (e) => {
        e.stopPropagation();
        e.preventDefault()
    }
    
    return (
        <div className="Card" id={props.id} onDragStart={dragStart} draggable="true" onDragOver={dragOver}>{props.msg}</div>
    )
}
