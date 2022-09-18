import searchYouTube from './lib/searchYouTube.js';
// import dafaultExport from "module-name"
import App from './components/App.js';
// TODO: Render the `App` component to the DOM
ReactDOM.render(<App searchYouTube={searchYouTube} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById('app'));
