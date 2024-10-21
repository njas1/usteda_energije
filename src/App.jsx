import logo from './logo.svg';
import styles from './App.module.css';

import Form from './Form';
import Calculation from './Calculation';

function App() {
  return (
    <>
    <div class={styles.App}>
      Kalkulator uštede energije
    </div>
    < Form />
    </>
  );
}

export default App;
