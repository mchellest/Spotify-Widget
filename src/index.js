import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Widget() {
    return(
        <div className="widget">
            <UserCard />
            <SongCard />
        </div>
    );
}

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'mchellest',
            profilePicture: 'https://lh3.googleusercontent.com/proxy/JcK_SHYhmHUV5GzagA3Yc0kyL-V7Knc6PtUkv7wmgSQ5peWyIfDzPt4dH8FJtnMwIqi8CtlKu6YclATnl0CF7GpY7W-NZKOMXOD5pP6GFt_sOp_ocnYHWXRl20TPJ300jwtKAiqlBbPIiNUGew'
        };
    }

    render(){
        return(
            <div className="userCard" data-username={this.state.userName}>
                <img src={this.state.profilePicture} />
            </div>
        );
    }
}

class SongCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Song Title',
            artist: 'Artist',
            album: 'https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/adobestock_21730836.jpeg?itok=ckkJV_ez'
        };
    }

    render(){
        return(
            <div className="songCard">
                <img src={this.state.album} />
                <h1>{this.state.title}</h1>
                <h2>{this.state.artist}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    Widget(),
    document.getElementById('root')
);