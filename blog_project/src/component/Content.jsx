const Content = () => {
  let marks = 71;
  //   return <div>{marks > 80 ? <h1>A+</h1> : <h1>A-</h1>}</div>;
  return <div>{(() => {
    if(marks>80 && marks<100){
        return <h1>A+</h1>
    }
    else{
        return <h1>fail</h1>
    }
  })()}</div>;
};

export default Content;
