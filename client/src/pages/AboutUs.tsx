import MprLogo from "../assets/mpr.jpg";

const AboutUs = () => {
    return (
        <div className='mt-5 text-justify'>
            <div>
                <h1 className='text-left font-bold uppercase my-3'>
                    Masagana Print republik - <span className='text-red-500'>About Us</span>
                </h1>
            </div>
            <div className='flex justify-center my-2 py-2'>
                <div
                    className='w-[220px] h-[220px] tablet:w-[160px] tablet:h-[160px]'
                    style={{background: `url(${MprLogo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
                ></div>
            </div>
            <div className='mt-2 block'>
                <p
                    className='first-letter:uppercase
                    first-letter:text-6xl first-letter:font-bold first-letter:text-red-500
                    first-letter:mr-3 first-letter:float-left'
                >
                    Welcome to <span className='text-red-500'>Masagana Print Republik</span>, we believe in the power of
                    creativity and the impact of a well-printed message. Established with a passion for quality printing
                    and a commitment to customer satisfaction, we have become a trusted destination for all your
                    printing needs.
                </p>
            </div>
            <div className="clear-left">
                <h3 className='text-center my-2 text-lg font-bold'>Who we are</h3>
                <article>
                    Masagana Print republik is not just a printing shop; we are your partners in bringing your ideas to
                    life. With a dedicated team of skilled professionals, cutting-edge technology, and a focus on
                    excellence, we have been serving individuals, businesses, and organizations with top-notch printing
                    solutions since 2018.
                </article>
            </div>
            <div>
                <h3 className='text-center my-2 text-lg font-bold'>Our Mission</h3>
                <article>
                    Our mission is simple yet profound: to provide unparalleled printing services that inspire,
                    captivate, and exceed expectations. We understand that every print tells a story, and we are here to
                    ensure that your story is told with precision, clarity, and vibrancy.
                </article>
            </div>
        </div>
    );
};

export default AboutUs;
