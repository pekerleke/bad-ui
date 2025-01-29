'use client'

import { useState } from "react";
import { DemoContainer } from "@/components/demo-container/DemoContainer";
import styles from "./colorPicker.module.scss";

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");

    const colorDescriptions: { [key: string]: string } = {
        "#FF0000": "Blood of my enemies",
        "#00FF00": "Shrek's complexion",
        "#0000FF": "Blue screen of death",
        "#FFFF00": "Banana gone wrong",
        "#FF00FF": "Unicorn sparkles",
        "#00FFFF": "Pool water after too much chlorine",
        "#FFFFFF": "Blank canvas of possibilities",
        "#000000": "My soul on Monday mornings"
    };

    return (
        <DemoContainer>
            <div>
                <label>Pick a color</label>
                <div className={styles.colorContainer}>
                    {Object.entries(colorDescriptions).map(([hex, description]) => (
                        <div 
                            key={hex}
                            className={styles.colorOption}
                            style={{ backgroundColor: hex }}
                            onClick={() => setColor(hex)}
                        >
                            {description}
                        </div>
                    ))}
                </div>
                <div 
                    className={styles.preview}
                    style={{ backgroundColor: color }}
                >
                    Selected: {colorDescriptions[color]}
                </div>
            </div>
        </DemoContainer>
    );
}

export default ColorPicker; 