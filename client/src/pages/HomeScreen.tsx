import Hero from "../layouts/Hero";
import layout from "../assets/images/layout.png";
import print from "../assets/images/print.png";
import material from "../assets/images/material.png";

interface dataProps {
    id: number;
    title: string;
    image: string;
    description: string;
}
const data: dataProps[] = [
    {
        id: 1,
        title: "Layout and customize",
        image: layout,
        description: "Create a unique and tailored appearance that meets specific preferences or requirements.",
    },
    {
        id: 2,
        title: "High quality print.",
        image: print,
        description:
            "This ensures that the printed material meets or exceeds professional standards, resulting in impressive and visually appealing outcomes.",
    },
    {
        id: 3,
        title: "Material Quality.",
        image: material,
        description: "We guarantee superior merchandise quality by using top-tier materials and advanced printing methods.",
    },
];

const HomeScreen = () => {
    return (
        <>
            <Hero />
            <div className='mt-20'>
                <div className='text-center'>
                    <h3 className='text-3xl my-2 font-[500]'>Quality printing.</h3>
                    <p>
                        Whether you're in need of business cards, stickers, or any custom print material, Masagana Print
                        Republik streamlines the process, making it straightforward and convenient for you to reach your
                        business milestones. With our online printing services, we're committed to helping you easily
                        fulfill your printing needs, ensuring quality and efficiency every step of the way.
                    </p>
                </div>
                {/* <div className='grid gap-3 grid-cols-3 grid-rows-3  mt-4 tablet:grid-cols-1'>
                    <div className="border p-3 col-start-1">card</div>
                    <div className="border p-3 col-start-2 row-start-2 ">card</div>
                    <div className="border p-3 col-start-3 row-start-3">card</div>
                </div> */}``
                <div className='grid gap-3 grid-cols-3 grid-rows-3  mt-4 tablet:grid-cols-1'>
                    {data?.map((inf: dataProps) => {
                        return (
                            <div className={`${`col-start-${inf?.id}`} ${`row-start-${inf?.id}`} tablet:col-start-1`}  key={inf.id}>
                                <div
                                className={`text-center flex flex-col items-center  justify-center`}
                                
                            >
                                <img className='w-[289px]' src={inf.image} alt='' />
                                <div className='mt-4'>
                                    <p className='text-lg font-bold text-red-400'>{inf.title}</p>
                                    <p className='mt-2'>{inf.description}</p>
                                </div>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomeScreen;

