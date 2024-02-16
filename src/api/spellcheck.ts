const express = require("express")
const SpellChecker = require('spellchecker');

const app = express();

app.post("/api/spellcheck",handler);

app.listen(3000, () => {
    console.log("Server is running")
})

export default async function handler(req:any, res:any) {
  try {
    const { word } = req.body;
    const miss = SpellChecker.getCorrectionsForMisspelling(word).splice(0, 5);
    res.status(200).json(miss);
  } catch (error) {
    res.status(404).json({ error: 'Spellcheck failed' });
  }
}
