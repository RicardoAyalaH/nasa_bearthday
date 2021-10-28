import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../Utils/Utils';

import "react-datepicker/dist/react-datepicker.css";

const MainPage = function(){
    const [date, setDate] = useState(new Date());
    const history = useHistory();
    
    return(
        <div className="Main">
            User Date:
            <DatePicker selected={date} onChange={(date) => {setDate(date)}} className="Picker" />
            <input type="button" value="Search Image" onClick={() => {history.push(`/image/${formatDate(date)}`)}} />
        </div>
    );
};

export default MainPage;