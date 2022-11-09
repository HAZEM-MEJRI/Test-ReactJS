import {dateToTimestamp, timestampToDays} from '../../../utils';

export const isNameValid = (value) => {
    return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
    return value.length > 0 && value.length <= 5;
}

export const isRatingValid = (value) => {
    return value > 8;
}

export const isExpiredDateValid = (value) => {
    return ((timestampToDays((dateToTimestamp(value) - Date.now())) < 30) &&
        (timestampToDays((dateToTimestamp(value) - Date.now())) > 0 ));
}
