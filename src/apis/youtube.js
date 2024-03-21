import axios from 'axios';

const KEY = 'AIzaSyAgNXYZSUN1f1gvubeGiGqJFSBF47U2tJg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
