import axios from 'axios';

export default axios.create({
  baseURL: 'https://electrumserver.motionproject.org',
});
