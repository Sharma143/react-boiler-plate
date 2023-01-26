import { useSelector } from "react-redux";
import moment from 'moment';
import { FILE_BASE_URL } from 'configs/services/apiCollections';

export const GetToken = () => {
    const Authorization = useSelector(state => state.auth.token);
    if(Authorization.length > 0) return Authorization
    else return false
}

export const getImageUrl = (imagePath, image, imageType) => {
    return FILE_BASE_URL() + imagePath + "/" + image + '.' + imageType
}

export const findAge = birthday => {
    const a = moment();
    const b = moment(birthday);
    return moment.duration(a.diff(b)).years();
}

export const getRandomValueInRange = (startValue, endValue) => Math.floor(Math.random() * (startValue - endValue + 1) + endValue);

export const isFirefox = typeof InstallTrigger !== 'undefined';

export const formatToGermanCurrency = (number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);