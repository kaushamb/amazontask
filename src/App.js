import React, { Component } from 'react';

import Search from './components/Search';
import ShortList from './components/ShortList';
import NamesList from './components/NamesList';

/* ############################## */
/* ##### Main app component ##### */
/* ############################## */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favourites: [],
      

    }
  }


  // update filterText in state when user types 
  filterUpdate(value) {
    this.setState({
      filterText: value,
      
    });
  }
  
  // add clicked name ID to the favourites array
  addFavourite(id) {
    const newSet = this.state.favourites.concat([id])
    this.setState({
      favourites: newSet
    })
  }
  
  // remove ID from the favourites array
  deleteFavourite(id) {
    const { favourites } = this.state
    const newList = [
      ...favourites.slice(0, id),
      ...favourites.slice(id + 1)
      ]
    this.setState({
      favourites: newList
    })
  }
  
  /* ############################# */
  /* ##### the render method ##### */
  /* ############################# */

  render() {
    
    return ( 
      <div>
        <header>
          <Search
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
            
          ><ShortList 
          data={this.props.data} 
          favourites={this.state.favourites}
          deleteFavourite={this.deleteFavourite.bind(this)}
        />
        <NamesList 
            data={this.props.data}
            filter={this.state.filterText}
            favourites={this.state.favourites}
            addFavourite={this.addFavourite.bind(this)}
          />
        
        </Search> 
        </header>
        <main>
        
        
          
        </main>
      </div>
    )
  }
}

export default App;
