import axios from "axios";
import YouTube, { YouTubeProps } from 'react-youtube';
import "./search.scss"

export default function Search() {

    const iframeProps = {
        id: "ytplayer",
        type: "text/html",
        width: "720",
        height: "405",
        src: "https://www.youtube.com/embed/g_VbJkbt64g",
        frameborder: "0",
        allowfullscreen: "allowfullscreen",
    };

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };
    
    

    

    return (
        <>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />; */}
            <section>
                강의 전체 검색
                <div>
                    <iframe {...iframeProps}></iframe>
                </div>
            </section>
        </>
    );
}