import { Link } from "react-router-dom"
import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../main";
import LinkButton from "../../components/LinkButton/LinkButton";

export function About() {
    const [language, setLanguage] = useContext(Context);

    return (
        <>
            <main>
                <h1>about</h1>
                <LinkButton to="/" children="Home Page" />

            </main>
        </>
    )
}