export type TCardFigure = "ace" | "king" | "queen" | "jack";
export type TCardNumber = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type FullCardFigures = TCardFigure & TCardNumber;
export type Colors = "HEARTS" | "CLOVERS" | "DIAMONDS" | "SPADES";
export interface ICard {
    value: FullCardFigures;
    color: Colors;
}