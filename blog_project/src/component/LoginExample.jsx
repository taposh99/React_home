const LoginStatusBtn = (status) => {
  if (status) {
    return <button>Logout Btn</button>;
  } else {
    return <button>Login Btn</button>;
  }
};
const LoginExample = () => {
  return (
    <div>
      <h1>Login Status</h1>
      {LoginStatusBtn(true)}
    </div>
  );
};

export default LoginExample;
