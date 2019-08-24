import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import SearchBar from './Components/SearchBar'
import VideoList from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'

import Youtube from './api/Youtube'

export default class App extends Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('Spiderman')
    }

    // submitevent function
    handleSubmit = async (searchterm) => {
        const response = await Youtube.get('search', {params: 
            {       q: searchterm,
                    part:'snippet',
                    maxResults: 5,
                    key: 'AIzaSyBtvicbC-HZkF8V_ZjraGAvwyLy-4HWILY'
                }})
        // console.log(response.data.items)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    render() {
        return (
            <div>
                {/* <h1> Youtube clone </h1> */}
                <Grid justify = "center" container spacing = {10} >
                    <Grid item xs={12}>
                        <Grid container spacing = {10} > 
                            <Grid item xs={12}>
                                {/* SEARCH BAR */}
                                <SearchBar onFormSubmit={this.handleSubmit} /> 
                            </Grid>
                            <Grid item xs={8}>
                                {/* VIDEO DETAIL */}
                                <VideoDetail video={this.state.selectedVideo} /> 
                            </Grid>
                            <Grid item xs={4}>
                                {/* VIDEO LIST */}
                                <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect} /> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
