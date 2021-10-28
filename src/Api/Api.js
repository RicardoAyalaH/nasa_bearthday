import urls from '../Utils/urls';

const getAllAvailableDates = async function() {
    const result = await fetch(urls['allDates'], {
        method: 'GET'          
    });

    return result.json();
};

const getImages = async function(date) {
    const result = await fetch(`${urls['getImages']}${date}?api_key=HfBec3jOtxrgQqZo9FpKEA3Ppty0pRShg4RUs3IR`, {
        method: 'GET'
    });

    return result.json();
};

export {
    getAllAvailableDates,
    getImages
};