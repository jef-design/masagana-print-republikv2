import React from "react";

const Footer = () => {
    const dateYear = new Date().getFullYear();

    return (
        <>
        
            <div className=" mt-7 bg-red-600 text-white p-2 py-4">
                <div className="max-w-[1280px] mx-auto px-3 flex justify-between gap-4 mobile:flex-col mobile:py-4">
                    <div>
                    <h2 className="text-2xl mb-2 uppercase">Services</h2>
                    <ul className="flex flex-col gap-2">
                        <li>Full Sublimation</li>
                        <li>Silkscreen Printing</li>
                        <li>Vinyl and DTF</li>
                        <li>Tarpaulin Printing</li>
                        <li>Invitation</li>
                        <li>Souvenirs</li>
                        <li>Decals and Sticker</li>
                    </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-2 uppercase">You need shirts printed? Contact Us!</h2>
                        <div className="">
                        <a className="flex gap-2 items-center mb-3" href="https://www.facebook.com/MASAGANAPRINTREPUBLIK">
                            <i className="bx bxl-facebook-square  text-[#1877f2] bg-white"></i>
                            <span >Masagana Print Republik</span>
                        </a>

                        <a className="flex gap-2 items-center" href="mailto:MasaganaPR@gmail.com">
                            <i className="bx bxl-gmail text-red-600 bg-white"></i>
                            <span>MasaganaPR@gmail.com</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <span>Copyright &copy; {dateYear} Masagana Print Republik. All Rights Reserved</span>
                    {/* <div>
                        <span>
                            Developed by{" "}
                            <a href="https://jeffcodesign.vercel.app/">
                                <span className="text-blue-400">Jefcodesign</span>
                            </a>
                        </span>
                    </div> */}
                </div>
            </div>
        </>
       
    );
};

export default Footer;
