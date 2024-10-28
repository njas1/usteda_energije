import { createSignal } from 'solid-js';
import styles from './Form.module.css';

export default function Form() {
  const [classic100W, setClassic100W] = createSignal(0);
  const [classic60W, setClassic60W] = createSignal(0);
  const [classic40W, setClassic40W] = createSignal(0);
  const [savings, setSavings] = createSignal(null);
  const [errorMessage, setErrorMessage] = createSignal("");

  const handleCalculate = () => {
    const values = [classic100W(), classic60W(), classic40W()];
    const allValid = values.every((val) => Number.isInteger(val) && val >= 0 && val <= 999);

    if (!allValid) {
      setErrorMessage("Unesite važeće brojeve između 0 i 999 za sve žarulje.");
      setSavings(null);
    } else if (values.every((val) => val === 0)) {
      setErrorMessage("Molimo unesite broj žarulja prije izračuna.");
      setSavings(null);
    } else {
      setErrorMessage("");
      setSavings(
        (classic100W() * 100 + classic60W() * 60 + classic40W() * 40) -
        (classic100W() * 20 + classic60W() * 15 + classic40W() * 8)
      );
    }
  };

  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Izračun uštede energije</h2>
      
      <label class={styles.label}>Unesite broj 100W klasičnih žarulja:</label>
      <input
        type="number"
        value={classic100W()}
        onInput={(e) => setClassic100W(+e.target.value)}
        class={styles.input}
      />

      <label class={styles.label}>Unesite broj 60W klasičnih žarulja:</label>
      <input
        type="number"
        value={classic60W()}
        onInput={(e) => setClassic60W(+e.target.value)}
        class={styles.input}
      />

      <label class={styles.label}>Unesite broj 40W klasičnih žarulja:</label>
      <input
        type="number"
        value={classic40W()}
        onInput={(e) => setClassic40W(+e.target.value)}
        class={styles.input}
      />

      <button 
        onClick={handleCalculate} 
        class={styles.button}
      >
        Izračunaj
      </button>

      {errorMessage() && <p class={styles.error}>{errorMessage()}</p>}

      {savings() !== null && (
        <div class={styles.savings}>
          <h3>Ušteda energije:</h3>
          <p>{savings()} Wh dnevno</p>
        </div>
      )}
    </div>
  );
}