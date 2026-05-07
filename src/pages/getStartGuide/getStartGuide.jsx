import { FaUserCheck, FaSearchLocation, FaChartLine  } from 'react-icons/fa';
import { MdAccountBalance,  } from 'react-icons/md';


import './getStartGuide.css';

export default function GetStartGuide(){

    return (
        <div className='ahm-getStartGuide'>
            <h1 className='ahm-h1'>How To Start ?</h1>
            <div className='ahm-guideList '>

                
                <div className='ahm-containerStep  '>
                    <div className='ahm-guideIconContiner'>
                        <FaUserCheck className='ahm-guideIcon' />
                    </div>
                    <p className='ahm-stepTitle'>1.Create Account</p>
                    <p className='ahm-stepExplain '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nesciunt mollitia rem</p>
                </div>


                <div className='ahm-containerStep '>
                    <div className='ahm-guideIconContiner'>
                        <FaSearchLocation className='ahm-guideIcon' />
                    </div>
                    <p className='ahm-stepTitle'>2.Choose opportunity</p>
                    <p className='ahm-stepExplain'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nesciunt mollitia rem</p>
                </div>


                <div className='ahm-containerStep '>
                    <div className='ahm-guideIconContiner'>
                        <MdAccountBalance className='ahm-guideIcon' />
                    </div>
                    <p className='ahm-stepTitle'>3.Fund Investment</p>
                    <p className='ahm-stepExplain'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nesciunt mollitia rem</p>
                </div>


                <div className='ahm-containerStep rounded-xl shadow-sm'>
                    <div className='ahm-guideIconContiner'>
                        <FaChartLine  className='ahm-guideIcon' />
                    </div>
                    <p className='ahm-stepTitle'>4.Track Growth</p>
                    <p className='ahm-stepExplain'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nesciunt mollitia rem</p>
                </div>
            </div>
        </div>
    );
}