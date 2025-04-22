import axios from 'axios';
window.axios = axios;

// Set the default headers for all Axios requests
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
