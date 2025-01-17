import React from 'react'
import { Paper, Typography } from '@material-ui/core'


export default function VideoDetail(props) {
    const {video} = props
    console.log(video)

    if(!video){
        return <div> Loading ....</div>
    }

    const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            {/* <h2> Videdetail component </h2> */}
            <>
                <Paper elevation = {6} style={{height: '70%'}} >
                    <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSRC} />

                </Paper >
                <Paper elevation = {6} style = {{padding: '15px'}}>
                    <Typography variant='h6'> {video.snippet.title} - {video.snippet.channelTitle} </Typography>
                    <Typography variant = 'subtitle1'> {video.snippet.channelTitle}</Typography>
                    <Typography variant = 'subtitle2'> {video.snippet.description} </Typography>
                </Paper>

            </>

        </div>
    )
}
