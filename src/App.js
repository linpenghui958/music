import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes(routes) }
    </HashRouter>
  );
}

export default App;
