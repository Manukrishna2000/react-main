import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { About } from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './Form';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigation } from './Navigation';
import Example from './Example';
import { Posts } from './Posts';
import { Movie } from './Movie';
import Detail from './Detail';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './Counter';
import { Login } from './Login';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './ThemeProvider';
import Theme from './Theme';
import SumCalculator from './Memo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Provider store={store}>
<ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<About/>}/>
      <Route path='register' element={<Form/>}/>
      <Route path='card' element={<App/>}/>
      <Route path='example' element={<Example/>}/>
      <Route path='posts' element={<Posts/>}/>
      <Route path='movie' element={<Movie/>}/>
      <Route path='detail/:id' element={<Detail/>}/>
      <Route path='counter' element={<Counter/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='theme' element={<Theme/>}/>
      <Route path='memo' element={<SumCalculator/>}/>
      </Route>
      

    </Routes>
    
    </BrowserRouter>
  </ThemeProvider>

</Provider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
