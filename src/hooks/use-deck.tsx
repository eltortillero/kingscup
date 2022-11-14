import { useEffect, useState } from "react";
import { ShuffleDeck } from "../functions/shuffle-deck";
import { FULL_ORDERED_DECK, ICard } from "../mocks/mocks.index";


export function useDeck() {
    const initialDeck = FULL_ORDERED_DECK;
    const [cardHistoryList, setCardHistoryList] = useState<ICard[]>([]);
    const [shuffledDeck, setShuffledDeck] = useState<ICard[]>([]);
    useEffect(() => {
        setShuffledDeck(ShuffleDeck(initialDeck));
    }, []);
    return {
        cardHistoryList,
        setCardHistoryList,
        shuffledDeck,
        setShuffledDeck,
    }
}