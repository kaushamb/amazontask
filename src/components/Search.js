import React, { Component } from 'react'

/* ###################### */
/* ##### Search bar ##### */
/* ###################### */

// need a component class here
// since we are using `refs`
class Search extends Component {
  render() {
    const { filterVal, filterUpdate} = this.props
    return (
      <form>
        {this.props.children[0]}
        <div className="inputdiv">
        <input 
          type='text'
          ref='filterInput'
          placeholder='Type to filter..'
          // binding the input value to state
          value={filterVal}
          onChange={() => {
           filterUpdate(this.refs.filterInput.value) 
          }}
        />
        <div className="listposition">
        {this.props.children[1]}</div>
        
        </div>
      </form>
    )
  }
}

export default Search