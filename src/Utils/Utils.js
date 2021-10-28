
const formatDate = function(date) {

    const month = date.getMonth() + 1; //month starts at 0
    
    let result = '';
    result += date.getFullYear();
    result += (month < 10 ? '0': '');
    result += month;
    result += (date.getDate() < 10 ? '0': '');
    result += date.getDate();
    
    return result;
};

const getWindowDimensions = function() {
    const hasWindow = typeof window !== 'undefined';

    return {
        width: hasWindow ? window.innerWidth: 1000,
        height: hasWindow ? window.innerHeight: 600
    };
};

export {
    formatDate,
    getWindowDimensions
};