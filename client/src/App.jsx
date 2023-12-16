/* eslint-disable no-unused-vars */
import { Switch, Route } from 'react-router-dom';
import Home from './component/common/HomeComponent';
import Header from './component/common/HeaderComponents';
import { AuthProvider } from './context/AuthContext';
import Default from './component/common/DefaultComponent';
import Error from './component/common/ErrorComponent';
import { ErrorProvider } from './context/ErrorContext';
import Login from './component/auth/LoginComponent';

function App() {


  return (
    <AuthProvider>
      <ErrorProvider>
        <div id="page-content">
          <Header />
          <Error />
          <main>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/login' component={Login} />
              <Route path='*' component={Default} />
            </Switch>
          </main>
          <footer>SoftUni &copy; 2023 React Exam</footer>
        </div>
      </ErrorProvider>
    </AuthProvider>
  );
}

export default App;
