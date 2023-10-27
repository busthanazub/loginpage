import React, { Component } from 'react'
import './Loginpage.css'

export default class Loginpage extends Component {
    state={
        input:"",
        items: [],
        id:""
    }
    handleChange= event =>{
        this.setState({
            input:event.target.value.id
            
        })
    }

    storeItems = event => {
      event.preventDefault()
    const {input}=this.state;
    this.setState({
        items:[...this.state.items,input],
        input:"",
        id:""
    })
    console.log(input);
    }


    render() {
        const {input,items}=this.state
        console.log(items);

    return (
      <div className='login'>
        <h1>Registration page</h1>
        <form className='page'>
            <div><label htmlFor="">Name</label></div>
            <div><input  onChange={this.handleChange} id='name' value={input} type="text" /></div>
            <div><label htmlFor="">Email</label></div>
            <div><input  onChange={this.handleChange} id='email' value={input} type="email" /></div>
            <div><label htmlFor="">password</label></div>
            <div><input  onChange={this.handleChange} id='password' value={input} type="password" /></div>
            <div><button onSubmit={this.storeItems}>Submit</button></div>
        </form>
       
      </div>
    )
  }
}
