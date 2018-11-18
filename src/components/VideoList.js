import React from 'react';
import VideoItem from './VideoItem';

    const VideoList = ({videos}) =>{
        console.log(videos.length);
        const renderList = videos.map((video)=>{
            return <VideoItem video={video} />;
        });
        return(
            
            <div>{renderList}</div>
        );
    }


export default VideoList;