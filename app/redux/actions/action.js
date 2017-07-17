export const MORECOURSE = 'MORECOURSE';
export const ADDUUERSINFO = 'ADDUUERSINFO';

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