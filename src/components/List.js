import React from 'react'
import FlipMove from 'react-flip-move'
function List(props)
{
  const items = props.items
  const ListItem = items.map((item) =>
  {
    return(
       <div className = "list" key = {item.key}>
          <p>
          <input 
          type="text" 
          id = {item.key} 
          value = {item.text} 
          onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}
          }
          />
          <span><i className="fas fa-trash" onClick = {() => props.deleteItem(item.key)}></i></span> 
          </p>
       </div>
    )
  })
  return(
     <div>
       <FlipMove duration={300} easing="ease-in-out">
          {ListItem}
       </FlipMove>
     </div>
  )
}
export default List;
