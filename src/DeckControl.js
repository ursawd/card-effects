import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";
//---------------------------------------------------------
let testId;
const DeckControl = () => {
  const [drawCard, setDrawCard] = useState(false);
  const deckId = useRef("abc");
  //---------------------------------------------------------
  //return new shuffled deck id into useRef deckId.current
  useEffect(() => {
    console.log("first effect");
    async function getNewDeck() {
      let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      const res = await axios.get(url);
      console.log(res.data.deck_id);
      let temp = res.data.deck_id;
      deckId.current = temp;
      testId = temp;
      console.log("Deck Id: ", deckId.current);
    }
    getNewDeck();
    return testId;
  }, []);
  //---------------------------------------------------------
  useEffect(() => {
    console.log("second effect");
    async function getNewCard() {
      let Id = deckId.current;
      Id = testId;
      console.log("ID", Id);
      const url = `https://deckofcardsapi.com/api/deck/${Id}/draw/?count=1`;
      console.log("URL", url);
      const res = await axios.get(url);
      console.log("RES.DATA", res.data);
    }
    getNewCard();
  }, [drawCard]);
  //---------------------------------------------------------

  return (
    <div>
      <button onClick={() => setDrawCard(!drawCard)}>Draw A Card</button>
      <Card />
    </div>
  );
};
//---------------------------------------------------------

//---------------------------------------------------------

export default DeckControl;
