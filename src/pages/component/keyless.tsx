import { useState } from "react";

export default function InputKeyboardLess() {

    const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [textValue, setTextValue] = useState("");
    const [keyIndex, setKeyIndex] = useState(0);

    const handlePrevioustKey = () => {
        if (keyIndex > 0) setKeyIndex(prev => prev - 1);
    }

    const handleNextKey = () => {
        if (keyIndex < keys.length - 1) setKeyIndex(prev => prev + 1);
    }

    const handleSubmit = () => {
        setTextValue(prev => prev + keys[keyIndex]);
    }

    const handleReset = () => {
        setTextValue("");
    }

    return (
        <div>
            <a href="/bad-ui">home</a>
            <main style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <label htmlFor="">Enter your name:</label> <br />
                    <input type="text" value={textValue} onChange={() => { }} />
                    <br /><br />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                        <div style={{ display: "flex", border: "1px solid #333", height: 25, width: "100%", borderRadius: 6, justifyContent: "center", alignItems: "center", userSelect: "none" }} onClick={handlePrevioustKey}>{"<"}</div>
                        <div style={{ display: "flex", border: "1px solid #333", height: 25, width: "100%", borderRadius: 6, justifyContent: "center", alignItems: "center" }}>{keys[keyIndex]}</div>
                        <div style={{ display: "flex", border: "1px solid #333", height: 25, width: "100%", borderRadius: 6, justifyContent: "center", alignItems: "center", userSelect: "none" }} onClick={handleNextKey}>{">"}</div>
                    </div>
                    <br />
                    <button onClick={handleSubmit}>Enter key</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </main>
        </div>
    );
}