import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, removeUser } from "../redux/features/users";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="todos">
      <tr>
        <td>№ </td>
        <td>Name </td>
        <td>Username</td>
        <td>Email</td>
        <td>Address</td>
        <td>Phone</td>
      </tr>
      {users.map((item) => {
        return (
          <>
            <tr>
              <td>{item.id}</td>
              <td>{item.name} </td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => dispatch(removeUser(item.id))}>x</button>
              </td>
            </tr>
          </>
        );
      })}
    </div>
  );
}
export default App;
