/* eslint-disable no-unused-vars */
import { Switch, Route } from 'react-router-dom';
import Home from './component/HomeComponent';
import Header from './component/common/HeaderComponents';
import { AuthProvider } from './context/AuthContext';
import Default from './component/common/DefaultComponent';

function App() {


  return (
    <AuthProvider>
      <div id="page-content">
        <Header  />
        <main>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='*' component={Default} />
          </Switch>
        </main>
        <footer>SoftUni &copy; 2023 React Exam</footer>
      </div>
    </AuthProvider>
  );
}

export default App;
