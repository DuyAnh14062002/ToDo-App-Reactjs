import React from 'react'
import './App.css';
import List from './components/List'
class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
       items : [],
       currenItem : {
         text : '',
         key : ''
       }
    }
  }
  onChange = (e) =>
  {
    this.setState({
       currenItem : {
         text : e.target.value,
         key : Date.now()
       }
    })
  }
  onSubmit = (e) =>
  {
    e.preventDefault()
    const newItem = this.state.currenItem
    const {items} = this.props
    if(newItem.text !== "")
    {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items : newItems,
        currenItem : {
          text : '',
          key : ''
        }
      })
    }
  }
  deleteItem = (key) =>
  {
      const filterItem = this.state.items.filter(item => item.key !== key)
      this.setState({
          items : filterItem
      })
  }
  setUpdate = (text, key) =>
  {
    const items = this.state.items
    items.map(item =>{
      if(item.key === key)
      {
        item.text = text
      }
    })
    this.setState({
      items : items
    })
  }
  render(){
    return(
       <div className = "App">
        <h1>To Do List</h1>
         <header>
           <form id = "to-do-form" onSubmit = {this.onSubmit}>
              <input 
              type="text" 
              placeholder = "Enter text" 
              onChange = {this.onChange} 
              value = {this.state.currenItem.text}
              />
              <button type = "submit">Add</button>
           </form>
        </header>
        <List 
        items = {this.state.items} 
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}
        ></List>
       </div>
    )
  }
}

export default App;
