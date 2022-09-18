import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (options = {}, callback) => {
  var url = options['url'] || 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  var max = options['max'] || '5';
  var part = options['part'] || 'snippet';
  var query = options['query'] || 'react';
  var type = options['type'] || 'video';
  var key = options['key'] || YOUTUBE_API_KEY;

  $.ajax({
    url: url,
    type: 'GET',
    data: {
      'part': part,
      'q': query,
      'type': type,
      'key': key,
      'maxResults': max
    }
  }).done(function(data) {
    return callback(data.items);
  });

};

// var searchYouTube = ({key, query, max = 5}, callback) => {
//   // query = an object to help us configure ajax call
//   // call back = fn to invoke once call is successful
//   // max defined here is the default if not specified

//   // ajax
//   // below is the url we need to interact with // object to define parameters of request (check youtube api reqs)
//   $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbedddable: 'true'
//   })
//   // here are the fns to invoke if success or fail call
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     // an obj that we receive from server if fail
//     .fail(({responseJSON}) => {
//       // iterate thru the the erros (represented in an array)
//       responseJSON.error.errors.forEach((err) => console.error(err));
//     });
// };

export default searchYouTube;
