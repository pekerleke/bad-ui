'use client'

import { DemoContainer } from '@/components/demo-container/DemoContainer';
import React, { useState } from 'react'
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { Slider } from 'rsuite';

import styles from "./genderPicker.module.scss";

const GenderPicker = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleRenderTooltip = (value: number | undefined) => {
        const femaleToMaleScale: { [key: number]: string } = {
            0: "Woman",
            1: "Delicate flower",
            2: "Dainty petal",
            3: "Gentle breeze",
            4: "Ethereal nymph",
            5: "Flower child",
            6: "Glamorous beauty",
            7: "Classic elegance",
            8: "Urban chic",
            9: "High femme",
            10: "Lipstick",
            11: "Feminine wiles",
            12: "Coquettish charm",
            13: "Sensual allure",
            14: "Captivating grace",
            15: "Femme fatale",
            16: "Bewitching siren",
            17: "Goddess divine",
            18: "Queenly presence",
            19: "Majestic feminine",
            20: "Glamazon",
            21: "Soft feminine",
            22: "Demure lady",
            23: "Gentle soul",
            24: "Tender heart",
            25: "Baby butch",
            26: "Soft stud",
            27: "Subtle tomboy",
            28: "Masculine lean",
            29: "Boyish flair",
            30: "Soft butch",
            31: "Tomboy chic",
            32: "Masculine edge",
            33: "Butch lite",
            34: "Edgy femme",
            35: "Futch",
            36: "Masculine lean",
            37: "Androgynous bend",
            38: "Genderfluid flux",
            39: "Subtle stud",
            40: "Boi",
            41: "Tomboy swag",
            42: "Masculine spark",
            43: "Bold butch",
            44: "Fluid finesse",
            45: "Gender Capitalist",
            46: "Smooth operator",
            47: "Slick swagger",
            48: "Confident poise",
            49: "Balanced blend",
            50: "Androgynous/Andro",
            51: "Dual nature",
            52: "Blended beauty",
            53: "Bi-gender",
            54: "Two-spirit",
            55: "Bi-gender",
            56: "Gender innovator",
            57: "Transcendent form",
            58: "Genderfluid art",
            59: "Boundless identity",
            60: "Gender blender",
            61: "Masculine current",
            62: "Stud undercurrent",
            63: "Butch leaning",
            64: "Masculine tinged",
            65: "Masc",
            66: "Boyish charm",
            67: "Stud appeal",
            68: "Manly mystique",
            69: "Masculine allure",
            70: "Butch queen",
            71: "Stud swagger",
            72: "Manly prowess",
            73: "Masculine power",
            74: "Butch bravado",
            75: "Daddy",
            76: "Alpha male lean",
            77: "Stud mentality",
            78: "Manly mindset",
            79: "Butch disposition",
            80: "Bull bagger",
            81: "Macho mentality",
            82: "Manly resolve",
            83: "Butch persona",
            84: "Stud identity",
            85: "Trans masker",
            86: "Masculine soul",
            87: "Manly spirit",
            88: "Butch essence",
            89: "Stud nature",
            90: "Stud",
            91: "Manly man",
            92: "Virile dude",
            93: "Masculine male",
            94: "Butch bloke",
            95: "Bro",
            96: "Brah",
            97: "Bruv",
            98: "Lad",
            99: "Bloke",
            100: "Male",
        };

        if (!value && value !== 0) return null;
        return femaleToMaleScale[value];
    }

    return (
        <DemoContainer>
            <>
                <div className={styles.label}>Gender</div>

                <div className={styles.inputContainer}>
                    <Slider
                        className={styles.slider}
                        value={sliderValue}
                        onChange={value => setSliderValue(value)}
                        progress={false}
                        renderTooltip={handleRenderTooltip}
                    />

                    <div className={styles.indicatorContainer}>
                        <IoMdMale className={styles.male} style={{ opacity: sliderValue / 100 }} />
                        <IoMdFemale className={styles.female} style={{ opacity: (100 - sliderValue) / 100 }} />
                    </div>
                </div>
            </>
        </DemoContainer>
    )
}

export default GenderPicker;