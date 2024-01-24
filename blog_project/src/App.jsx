import Content from './component/Content';
import FormExample from './component/FormExample';
import LoginExample from './component/LoginExample';
import Map from './component/MapExample';
import Header from './component/header';
import Button from './component/ButtonEx';
import StateExample from './component/StateExample';
import UseRef from './component/UseRef';
import UseRefAttribute from './component/UseRefAttribute';





  const App = () => {
   
  return (
    <div>
      {/* <Header />
      <Content />
      <Map /> */}
      <LoginExample/>
      <FormExample/>
      <Button />
      <StateExample />
      
      <UseRef />
      <UseRefAttribute />
      
  
      
    </div>
  );
};

export default App;
