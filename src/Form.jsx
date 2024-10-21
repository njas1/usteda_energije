import { createSignal } from "solid-js";
import Calculation from "./Calculation";

export default function Form ({ onCalculate }) {
    const [classic100W, setClassic100W] = createSignal(0);
    const [classic60W, setClassic60W] = createSignal(0);
    const [classic40W, setClassic40W] = createSignal(0);
    const [savings, setSavings] = createSignal(null);

    const handleSubmit = (e) => {
        onCalculate({
            classic100W: Number(classic100W()),
            classic60W: Number(classic60W()),
            classic40W: Number(classic40W())
        });
        setUsteda(usteda);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Broj 100W žarulja: </label>
                <input type="number" value={classic100W()} onInput={(e) => setClassic100W(e.target.value)} />
            </div>
            <div>
                <label>Broj 60W žarulja: </label>
                <input type="number" value={classic60W()} onInput={(e) => setClassic60W(e.target.value)} />
            </div>
            <div>
                <label>Broj 40W žarulja: </label>
                <input type="number" value={classic40W()} onInput={(e) => setClassic40W(e.target.value)} />
            </div>
            <button type="submit">Izračunaj uštedu</button>
        </form>
    )
}