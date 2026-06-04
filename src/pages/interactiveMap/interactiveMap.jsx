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
            
            {/* <iframe className="ahm-mapContainer" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103885.01292118146!2d35.87441805307338!3d35.543657805992034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ac2d61d4607d%3A0x8e325bf8a14195de!2z2KfZhNmE2KfYsNmC2YrYqdiMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1780518505548!5m2!1sar!2s"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            {/* <iframe className="ahm-mapContainer" src="https://www.google.com/maps/embed?pb=syria"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

        </div>
    );
}