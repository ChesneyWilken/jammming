import React from 'react';
import './App.css';
import { SearchBar }  from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

// you pass props and state as an attribute

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchResults: [{name: 'nameA', artist: 'artistA', album: 'albumA', id: 1},
      {name: 'nameB', artist: 'artistB', album: 'albumB', id: 2}, 
      {name: 'nameC', artist: 'artistC', album: 'albumC', id: 3}
      ],
      playListName: 'New Playlist',
      playListTracks: [{name: 'playList Track Name1', artist: 'PL-artist1', album: 'PL-album1', id: 4},
      {name: 'playList Track Name2', artist: 'PL-artist2', album: 'PL-album2', id: 5}]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playListTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playListTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({playListTracks: tracks});
    }

    updatePlaylistName(name){
      this.setState({playListName: name})
    }

    savePlaylist(){
      //const trackURIs = this.state.playListTracks.map(track => track.uri);
    }

    search(term){
      console.log(term);
    }


  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
              onAdd={this.addTrack}/>
            <Playlist playListName={this.state.playListName}
              playListTracks={this.state.playListTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>     
    )
  }
}

export default App;
