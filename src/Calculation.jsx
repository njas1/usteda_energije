export default function Calculation (zarulje) {
    const { classic100W, classic60W, classic40W } = zarulje;

    const classicWatts = (classic100W * 100) + (classic60W * 60) + (classic40W * 40);
    const ledWatts = (classic100W * 20) + (classic60W * 15) + (classic40W * 8);

    const usteda = (classicWatts - ledWatts) / 1000;

    return usteda;
}