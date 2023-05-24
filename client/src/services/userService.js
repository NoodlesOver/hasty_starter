import axios from "axios";

let userService = { endpoint: 'http://localhost:9000/api/users' }

userService.add = payload => {
  axios.post(userService.endpoint, payload).then(response => console.log(response));
}

export default userService;