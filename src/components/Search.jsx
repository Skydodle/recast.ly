

// desire behavior
// user input invokes getYouTube video and update videolist & videoPlayer components

var Search = ({handleSearchInputChange}) => (
  <div className="search-bar form-inline">
    // this is the input field form
    <input
      className="form-control"
      type="text"
      // listen for the input value // input is the target
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
