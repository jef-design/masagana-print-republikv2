
const Contact = () => {
  return (
    <div className="max-w-[1280px] pt-7 mx-auto" id='contact'>
            <div className="my-5">
                <h2 className="text-3xl uppercase my-2 font-[500]">Contact</h2>
                <div className="my-7 flex flex-col gap-3">
                    <p>Telephone no. (044) 8120040</p>
                    <p>Mobile no. 09393629966</p>
                </div>

                <div>
                    <span className="flex items-center"><i className='bx bxs-map text-red-600 text-lg'></i> #344 Purok 5, Masagana, Pandi, Bulacan (near Rowandrei Shop)</span>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.9643215637649!2d120.93660746955725!3d14.889256499102016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ab00048deff3%3A0x281a1a0fe34e509e!2sMasagana%20Print%20Republik!5e0!3m2!1sen!2sph!4v1710818056315!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{border: "0"}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
            </div>
            </div>
  )
}

export default Contact