import vectorTop from "../assets/VectorTop.png"
import vector from "../assets/Vector.png"

const SubHeader = ({children}) => {
    return (
        <div className='pb-10 md:pb-32 space-y-7 md:h-[264px] bg-my-color-1 bg-opacity-10'>
        <h2 className='text-dark-1 text-5xl text-center font-bold pt-5 md:pt-12' >{children}</h2>
        <img className='absolute top-0 right-0 object-cover' src={vectorTop} alt="" />
        <img className='hidden md:block absolute md:top-[160px] left-0 object-cover' src={vector} alt="" />
    </div>
    );
};

export default SubHeader;