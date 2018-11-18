import React from 'react';
import VideoItem from './VideoItem';

    const VideoList = ({videos, onVideoSelect}) =>{
        console.log(videos.length);
        const renderList = videos.map((video)=>{
            return <VideoItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />;
        });
        return(
            
            <div className="ui relaxed divided list">{renderList}</div>
        );
    }


export default VideoList;