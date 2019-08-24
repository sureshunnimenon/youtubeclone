import React from 'react'
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core'

const VideoList = ({ videos, onVideoSelect})=> {


    const listofVidoes = videos.map((video, id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    
    return (
        <div>
            {/* <h2> Video List component </h2> */}
            {/* <VideoItem />  */}
            <Grid container spacing = {10}>
            {listofVidoes}
            </Grid>
        </div>
    )
}

export default VideoList
