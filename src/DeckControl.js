import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";
//---------------------------------------------------------
const DeckControl = () => {
  const [drawCard, setDrawCard] = useState(false);
  const deckId = useRef("");
  const imageRef = useRef("");
  const cardsRemaining = useRef(52);
  //---------------------------------------------------------
  //return new shuffled deck id into useRef deckId.current
  useEffect(() => {
    async function getNewDeck() {
      let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      const res = await axios.get(url);
      deckId.current = res.data.deck_id;
    }
    getNewDeck();
  }, []);
  //---------------------------------------------------------
  useEffect(() => {
    async function getNewCard() {
      const url = `https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`;
      const res = await axios.get(url);
      imageRef.current = res.data.cards[0].image;
      cardsRemaining.current = res.data.remaining;
    }
    getNewCard();
  }, [drawCard]);
  //---------------------------------------------------------

  return (
    <div>
      <button onClick={() => setDrawCard(!drawCard)}>Draw A Card</button>

      <Card image={imageRef.current} cardsLeft={cardsRemaining.current} />
    </div>
  );
};
//---------------------------------------------------------

//---------------------------------------------------------

export default DeckControl;
