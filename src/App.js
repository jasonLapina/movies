import './main.scss';
import { Fragment } from 'react';
import Movies from './Components/Movies/Movies';
import Header from './Components/Header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Movies />
      </main>
    </Fragment>
  );
}

export default App;
