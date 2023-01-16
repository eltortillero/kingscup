import { Colors, FullCardFigures, ICard } from "../types/public-types.api"

export const createCardFullCard = (color: Colors, number: FullCardFigures): ICard => {
    return {
        number,
        color,
    }
}
