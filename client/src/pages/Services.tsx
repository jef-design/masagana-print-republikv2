import VerticalTabs from "../components/VerticalTabs2";
const Services = () => {
    return (
        <div className=''>
            <h1 className='font-bold uppercase my-3'>
                Masagana Print republik - <span className='text-red-500'>Services</span>
            </h1>
            <div>
                <div id='services' className='border-b-2 py-10'>
                    <h2 className='uppercase my-2 font-[500] text-center'> Our Services</h2>
                    <p>
                        we specialize in delivering high-quality printing solutions tailored to meet your unique needs.
                        From eye-catching Tshirt printing, full sublimation jersey's, invitational cards and brochures
                        to stunning banners and promotional materials, we bring your vision to life with precision and
                        creativity.
                    </p>
                    <div className='mt-10'>
                        <VerticalTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
