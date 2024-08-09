import { Link } from "react-router-dom"
import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../main"; //can make custom hook
import LinkButton from "../../components/LinkButton/LinkButton";


export function Home() {
    const [language, setLanguage] = useContext(Context);

    return (
        <>
            <main>
                <h1>home</h1>
                <LinkButton to="/about" children="About Page" />
            </main>
        </>
    )
}