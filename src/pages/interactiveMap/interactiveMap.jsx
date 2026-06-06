import './interactiveMap.css'
import { FaCircle } from 'react-icons/fa';
import MapPicker from '../../components/map/map';

export default function InteractiveMap(){

    return(
        <div className="ahm-mainContainer">
            <div className="ahm-fieldContainer">
                <h1 className='ahm-h1' > Interactive Map</h1>
                <p className='ahm-interactiveMapTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam similique est voluptatem, nobis vitae nostrum dicta corrupti! At commodi, ea soluta nulla assumenda temporibus labore, laborum quisquam laudantium sunt in.</p>


                <div className='ahm-field'>
                    <div className='ahm-locationContainer '> 
                        <FaCircle className='ahm-locationPoint '/>
                        <p className=''>Aleppo</p>
                    </div>
                    <p className='ahm-projectsNumberContainer'>0 Project</p>
                </div>


                <div className='ahm-field'>
                    <div className='ahm-locationContainer'> 
                        <FaCircle className='ahm-locationPoint'/>
                        <p className=''>Lattakia</p>
                    </div>
                    <p className='ahm-projectsNumberContainer'>0 Project</p>
                </div>


                <div className='ahm-field'>
                    <div className='ahm-locationContainer'> 
                        <FaCircle className='ahm-locationPoint'/>
                        <p className=''>Damascuse</p>
                    </div>
                    <p className='ahm-projectsNumberContainer'>0 Project</p>
                </div>


            </div>
            <div className="ahm-mapContainer">
                <MapPicker/>
            </div>
        </div>
    );
}