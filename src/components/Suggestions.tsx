'use client';

import React from "react";

import SpellChecker from 'spellchecker';


const Suggestions = () => {
    let word = 'helo';
    let mis = SpellChecker.getCorrectionsForMisspelling(word);
    console.log(mis)
    return (
        <div className="m-8 text-center">
            Hello

        </div>
    );
};

export default Suggestions;
