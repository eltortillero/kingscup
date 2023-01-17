import {ICard} from "../types/types/card.type";
/**
 * @description this mutates the provided deck
 * @param deck {@link ICard}[]
 * @returns an Array of type ICard
 */
export const ShuffleDeck = (deck: Array<ICard>): Array<ICard> => {
    let currentIndex = deck.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [deck[currentIndex], deck[randomIndex]] = [
            deck[randomIndex], deck[currentIndex]];
    }
    return deck;
}