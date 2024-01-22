import React from 'react';

// const LoginStatusBtn = (status) => {
//   if (status) {
//     return <button>Logout Btn</button>;
//   } else {
//     return <button>Login Btn</button>;
//   }
// };

const LoginExample = () => {
  const ItemObj = {
    name: 'sani',
    age: 25,
    city: 'dhaka',
  };

  return (
    <div>
      {/* <h1>Login Status</h1>
      {LoginStatusBtn(true)} */}
      <ul>
        <li>Name: {ItemObj.name}</li>
        <li>Age: {ItemObj.age}</li>
        <li>City: {ItemObj.city}</li>
      </ul>
    </div>
  );
};

export default LoginExample;
