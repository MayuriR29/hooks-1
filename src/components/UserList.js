import React from 'react';
import useResource from './useResource';

const UserList = () => {
  const users = useResource('users')
  return (
    <ul>
      {users.map(eachUser => <li>{eachUser.name} </li>)}
    </ul>
  )
}

export default UserList;