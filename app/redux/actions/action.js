export const MORECOURSE = 'MORECOURSE';
export const ADDUUERSINFO = 'ADDUUERSINFO';
export const MYMOVIE = 'MYMOVIE';
export const ADDNOWMOVIE = 'ADDNOWMOVIE';

//定义action
export function getCourse(data) {
    return {
        type: MORECOURSE,
        data
    }
}
export function addUserInfo(data) {
    return {
        type: ADDUUERSINFO,
        data
    }
}
export function addMyMovie(data) {
    return {
        type: MYMOVIE,
        data
    }
}
export function addNowMovie(data) {
    return {
        type: ADDNOWMOVIE,
        data
    }
}