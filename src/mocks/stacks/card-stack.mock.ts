import { Colors, FullCard, FullCardFigures, ICard } from "./stacks.mock";

export const COLORLESS_CARD_STACK: ReadonlyArray<FullCardFigures> = [
    "A",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "J",
    "Q",
    "K",
];

export const COLORS: ReadonlyArray<Colors> = [
    "CLOVERS",
    "HEARTS",
    "SPADES",
    "DIAMONDS",
];

const createCardFullCard = (color: Colors, number: FullCardFigures): ICard => {
    return {
        number,
        color,
    }
}

const createColorStacks = (color: Colors) => {
    return COLORLESS_CARD_STACK.map(number => createCardFullCard(color, number));
}

export const FULL_ORDERED_DECK: Array<ICard> = COLORS.map(createColorStacks).flatMap(card => card);