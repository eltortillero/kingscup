import { useEffect, useState } from "react";
import { ShuffleDeck } from "../functions/shuffle-deck";
import { FULL_ORDERED_DECK, ICard } from "../mocks/mocks.index";

(Array.prototype as any).random = function <T,>(callback: (selectedItem: T, selectedIndex: number) => void) {
    const selectedIndex = Math.floor(Math.random() * this.length);
    const selectedItem = this[selectedIndex];
    callback(selectedItem, selectedIndex);
}

export function useDeck() {
    const initialDeck = FULL_ORDERED_DECK;
    const [cardHistoryList, setCardHistoryList] = useState<ICard[]>([]);
    const [shuffledDeck, setShuffledDeck] = useState<ICard[]>([]);
    const [resetTrigger, setResetTrigger] = useState<boolean>(false);

    useEffect(() => {
        setCardHistoryList([]);
        setShuffledDeck(ShuffleDeck(initialDeck));
    }, [resetTrigger]);

    const pickCardFromDeck = () => {
        (shuffledDeck as any).random((randomItem: ICard, index: number) => {
            setCardHistoryList((historyList) => [randomItem, ...historyList]);
            setShuffledDeck((currentShuffledList) => {
                currentShuffledList.splice(index, 1);
                return currentShuffledList;
            });
        });
    }

    const resetGame = () => {
        setResetTrigger(fakeTrigger => !fakeTrigger);
    }

    return {
        cardHistoryList,
        shuffledDeck,
        pickCardFromDeck,
        resetGame,
        currentCard: cardHistoryList[0] ?? null,
    }
}