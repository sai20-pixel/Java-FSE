import { useState } from "react";

function CurrencyConvertor() {
    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState("");

    const handleSubmit = () => {
        const rate = 90; // Example: 1 Euro = ₹90
        setEuro((rupees / rate).toFixed(2));
    };

    return (
        <>
            <h2>Currency Convertor</h2>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Convert
            </button>

            <h3>Euro: € {euro}</h3>
        </>
    );
}

export default CurrencyConvertor;