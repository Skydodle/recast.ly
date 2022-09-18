import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './Videolist.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      current: exampleVideoData[0]
    };
  }

  // getData(data) {
  //   this.setState({
  //     videos: data,
  //     current: data[0]
  //   });
  // }

  // method for as soon as component is render to DOM invoke this
  // in this case getYouTubeVideos
  // passing in the search string
  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }
  // reusable API helper and method to adjust state
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        current: videos[0]
      });
    });
  }


  handleVideoListEntryTitleClick(video) {
    this.setState({
      current: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              handleSearchInputChange={this.getYouTubeVideos.bind(this)}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              // bind keyword this to app compo, available in all linked childs
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


