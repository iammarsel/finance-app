import { useState } from "react";
import axios from "axios";
function SignIn() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const signin = () => {
    const data = {username: username, email: email, password: password}
    console.log(data);
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    })
  };
  return (
    <div>
      <input type="text" onChange={event => setUsername(event.target.value)}/>
      <input type="text" onChange={event => setEmail(event.target.value)}/>
      <input type="password" onChange={event => setPassword(event.target.value)} />
      <button onClick={signin}>Sign In</button>
    </div>
  )
}

export default SignIn