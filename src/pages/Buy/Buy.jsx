import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Buy.css';
import LinkButton from "../../components/LinkButton/LinkButton";

export function Buy() {
    const [language1, setLanguage1] = useState('English');
    const [language2, setLanguage2] = useState('Spanish');
    const [binding, setBinding] = useState('Normal Bound');
    const [cover, setCover] = useState('Hardcover');
    const [version, setVersion] = useState('Normal Version');
    const [font, setFont] = useState('Modern');

    const languages = ['English', 'Spanish', 'French', 'German'];

    const handleLanguage1Change = (e) => {
        const newLanguage = e.target.value;
        setLanguage1(newLanguage);
        if (newLanguage === language2) {
            setLanguage2(languages.find(lang => lang !== newLanguage));
        }
    };

    const handleLanguage2Change = (e) => {
        const newLanguage = e.target.value;
        setLanguage2(newLanguage);
        if (newLanguage === language1) {
            setLanguage1(languages.find(lang => lang !== newLanguage));
        }
    };

    return (
        <main className="buy-page">
            <h1>Buy Your Book</h1>

            <div className="dropdowns">
                <div className="form-group">
                    <label htmlFor="language1">Choose Language 1:</label>
                    <select
                        id="language1"
                        value={language1}
                        onChange={handleLanguage1Change}
                    >
                        {languages.map(lang => (
                            <option
                                key={lang}
                                value={lang}
                                disabled={lang === language2}
                            >
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="language2">Choose Language 2:</label>
                    <select
                        id="language2"
                        value={language2}
                        onChange={handleLanguage2Change}
                    >
                        {languages.map(lang => (
                            <option
                                key={lang}
                                value={lang}
                                disabled={lang === language1}
                            >
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <hr className="divider" />

            <div className="radio-container">
                <div className="form-group">
                    <h2>Choose Binding:</h2>
                    <div className="radio-group">
                        <label className={`radio-button ${binding === 'Normal Bound' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="binding"
                                value="Normal Bound"
                                checked={binding === 'Normal Bound'}
                                onChange={(e) => setBinding(e.target.value)}
                            />
                            Normal Bound
                        </label>
                        <label className={`radio-button ${binding === 'Spiral Bound' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="binding"
                                value="Spiral Bound"
                                checked={binding === 'Spiral Bound'}
                                onChange={(e) => setBinding(e.target.value)}
                            />
                            Spiral Bound
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Choose Cover:</h2>
                    <div className="radio-group">
                        <label className={`radio-button ${cover === 'Hardcover' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="cover"
                                value="Hardcover"
                                checked={cover === 'Hardcover'}
                                onChange={(e) => setCover(e.target.value)}
                            />
                            Hardcover
                        </label>
                        <label className={`radio-button ${cover === 'Softcover' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="cover"
                                value="Softcover"
                                checked={cover === 'Softcover'}
                                onChange={(e) => setCover(e.target.value)}
                            />
                            Softcover
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Choose Version:</h2>
                    <div className="radio-group">
                        <label className={`radio-button ${version === 'Compact Version' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="version"
                                value="Compact Version"
                                checked={version === 'Compact Version'}
                                onChange={(e) => setVersion(e.target.value)}
                            />
                            Compact Version
                        </label>
                        <label className={`radio-button ${version === 'Normal Version' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="version"
                                value="Normal Version"
                                checked={version === 'Normal Version'}
                                onChange={(e) => setVersion(e.target.value)}
                            />
                            Normal Version
                        </label>
                        <label className={`radio-button ${version === 'Wide Margin Version' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="version"
                                value="Wide Margin Version"
                                checked={version === 'Wide Margin Version'}
                                onChange={(e) => setVersion(e.target.value)}
                            />
                            Wide Margin Version
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Choose Font Style:</h2>
                    <div className="radio-group">
                        <label className={`radio-button ${font === 'Modern' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="font"
                                value="Modern"
                                checked={font === 'Modern'}
                                onChange={(e) => setFont(e.target.value)}
                            />
                            Modern (Sans Serif)
                        </label>
                        <label className={`radio-button ${font === 'Classic' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="font"
                                value="Classic"
                                checked={font === 'Classic'}
                                onChange={(e) => setFont(e.target.value)}
                            />
                            Classic (Serif)
                        </label>
                    </div>
                </div>
            </div>

            <LinkButton to="/checkout">Checkout</LinkButton>
        </main>
    );
}
