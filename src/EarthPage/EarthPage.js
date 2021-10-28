import SimpleImageSlider from 'react-simple-image-slider';
import { getWindowDimensions } from '../Utils/Utils';
import urls from '../Utils/urls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllAvailableDates, getImages } from '../Api/Api';

const EarthPage = function() {

    const params = useParams();

    const date = new Date(params.date.substring(0,4), params.date.substring(4, 6), params.date.substring(6));
    const [images, setImages] = useState([
        {url: ''}
    ]);
    const initialDate = 
        params.date.substring(0,4) + '-' + 
        params.date.substring(4, 6) + '-' + 
        params.date.substring(6);
    const [realDate, setRealDate] = useState(initialDate);

    const { width, height } = getWindowDimensions();
    
    useEffect(() => {
        async function mount() {
    
            let datesList = await getAllAvailableDates();
            datesList = datesList.filter(d => {
                d = d.date.replace(/-/g, '');
                return date <= (new Date(d.substring(0, 4), d.substring(4, 6), d.substring(6)));
            });
    
            // the array of images is given from most recent to oldest
            let closestDate = datesList[datesList.length - 1].date;
    
            let remoteImages = await getImages(closestDate);
    
            setRealDate(closestDate);
            closestDate = closestDate.replace(/-/g, '');
            const year = closestDate.substring(0, 4);
            const month = closestDate.substring(4, 6);
            const day = closestDate.substring(6);
            const url = `${urls['imageUrl']}${year}/${month}/${day}/png/`;
    
            setImages(remoteImages.map(metaData => {
                return {url: `${url}${metaData.image}.png?api_key=HfBec3jOtxrgQqZo9FpKEA3Ppty0pRShg4RUs3IR`};
            }));
        }

        mount();
    }, []);

    return (
        <>
            <div className="pictureDate">
                <h1 className="dateText">
                    {realDate.toString()}
                </h1>
            </div>
            <SimpleImageSlider
                width={width}
                height={height}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{resizeMode: 'contain'}}
                autoPlay={true}
            />
        </>
    );
};

export default EarthPage;