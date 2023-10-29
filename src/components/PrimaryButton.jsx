
const PrimaryButton = (value, onclick) => {
    return (
        <div>
            <button onClick={onclick} className='py-2 px-4 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg  btn-wide mx-auto'>{value}</button>
        </div>
    );
};

export default PrimaryButton;