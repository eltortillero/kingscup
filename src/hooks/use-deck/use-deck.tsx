// noinspection ES6PreferShortImport

import {useEffect, useState} from "react";
import {FULL_ORDERED_DECK} from "../../deck-providers/full-ordered-deck";
import {ShuffleDeck} from "../../functions/shuffle-deck";
import {ICard} from "../../types/public-types.api";

(Array.prototype as any).random = function <T, >(callback: (selectedItem: T, selectedIndex: number) => void) {
    const selectedIndex = Math.floor(Math.random() * this.length);
    const selectedItem = this[selectedIndex];
    callback(selectedItem, selectedIndex);
}
/**
 * @description expected object to be returned from an {@link useDeck} like function
 */
type useDeckSignature = {
    cardHistoryList: ICard[];
    shuffledDeck: ICard[];
    resetGame: VoidFunction;
    currentCard: ICard | null;
}

/**
 * @description
 * creates a deck and returns information about it such as a history of the already selected cards
 * a list of the current available cards of the deck already shuffled
 * a set of functions for picking a card from the deck, a reset game function both {@link VoidFunction}
 * current selected card
 * @returns an {@link useDeckSignature}
 */
export function useDeck(): useDeckSignature {
    const newShuffledDeck = () => ShuffleDeck(FULL_ORDERED_DECK());
    const [cardHistoryList, setCardHistoryList] = useState<ICard[]>([]);
    const [shuffledDeck, setShuffledDeck] = useState<ICard[]>(newShuffledDeck());

    const resetGame = () => {
        setShuffledDeck(newShuffledDeck());
        setCardHistoryList([]);
    }

    return {
        cardHistoryList,
        shuffledDeck,
        resetGame,
        currentCard: cardHistoryList[0] ?? null,
    }
}