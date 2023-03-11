import React from "react";
import './Track.css';

export class Track extends React.Component{
    
    renderAction(){
        if(this.props.isRemoval === true){
            return <button className="TrackAction">+</button>;
        }
        return <button className="TrackAction">-</button>;

    }


    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}