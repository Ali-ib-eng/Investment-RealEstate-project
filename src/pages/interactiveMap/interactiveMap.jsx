import './interactiveMap.css'
import { FaCircle } from 'react-icons/fa';

export default function InteractiveMap(){

    return(
        <div className="ahm-mainContainer">
            <div className="ahm-fieldContainer">
                <h1 className='ahm-h1' > Interactive Map</h1>
                <p className='ahm-interactiveMapTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam similique est voluptatem, nobis vitae nostrum dicta corrupti! At commodi, ea soluta nulla assumenda temporibus labore, laborum quisquam laudantium sunt in.</p>


                <div className='ahm-field'>
                    <div className='flex items-center gap-2'> 
                        <FaCircle className='text-[10px] text-red-300'/>
                        <p className=''>Aleppo</p>
                    </div>
                    <p className='text-[11px] text-gray-500'>0 Project</p>
                </div>


                <div className='ahm-field'>
                    <div className='flex items-center gap-2'> 
                        <FaCircle className='text-[10px] text-blue-300'/>
                        <p className=''>Lattakia</p>
                    </div>
                    <p className='text-[11px] text-gray-500'>0 Project</p>
                </div>


                <div className='ahm-field'>
                    <div className='flex items-center gap-2'> 
                        <FaCircle className='text-[10px] text-yellow-300'/>
                        <p className=''>Damascuse</p>
                    </div>
                    <p className='text-[11px] text-gray-500'>0 Project</p>
                </div>


            </div>
            <div className="ahm-mapContainer">Map</div>
        </div>
    );
}