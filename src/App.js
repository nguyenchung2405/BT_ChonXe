import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BT_ChonXe from './Components/BT_ChonXe/BT_ChonXe';
import Header from './Components/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Switch>
    //     <Route path="/about" exact component={About} />
    //     <Route path="/register" exact component={Register} />
    //     <Route path="/login" exact render={(propsRoute) => {
    //       return (
    //         <div className='container'>
    //           <h1>Login</h1>
    //           <Login {...propsRoute} />
    //         </div>
    //       );
    //     }} />
    //     <Route path='/home' exact component={Home} />
    //     <Route path='/demousestate' exact component={UseStateDemo} />
    //     <Route path='/demouseeffect' exact component={UseEffectDemo} />
    //     <Route path='/' component={Home} />
    //   </Switch>
    // </BrowserRouter>
    <BT_ChonXe />
  );
}

export default App;
