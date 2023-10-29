import { PiDownloadFill } from 'react-icons/pi';

const DownloadBtn = ( ) => {
    return (
        <div className='absolute  lg:top-12 right-0'>
            <button  className='flex items-center justify-center gap-2 text-2xl text-white bg-gradient-to-r from-blue-800 to-blue-500 py-2 px-4 rounded-lg  mx-auto my-8'> <PiDownloadFill/></button>
        </div>
    );
};

export default DownloadBtn;