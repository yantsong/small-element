export const MORECOURSE = 'MORECOURSE';

//定义action
export function getCourse(data) {
    return {
        type: MORECOURSE,
        data
    }
}