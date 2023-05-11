import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const Navigate = useNavigate;

    const handelonclick = ()=>{
        Navigate('/mydiary');
    }

  return (
    <>
    <div className="container">
      <h1><b>Thought Keeper</b></h1>
      <form action="mydiary">
        <div className="form-group">
          <label for="username">User</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <label for="password">Secret</label>
          <input type="password"  placeholder="Password" />
        </div>
        <div className="form-group">
            <button onClick={handelonclick} type="submit" className="btn">Feelings Unleashed</button>
        </div>
      </form>
    </div>
    </>
  )
}
