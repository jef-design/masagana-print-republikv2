import developmentSvg from '../assets/images/development.png'

const Shop = () => {
  return (
    <>
       <div className='h-screen'>
            <h1 className='font-bold uppercase my-3'>Masagana Print republik - Shop</h1>
            <img className='w-[280px]' src={developmentSvg} alt="" />
              <p>Coming Soon</p>
            <p className='text-red-500'>
              This page is still under development.
            </p>
        </div>
    </>
  )
}

export default Shop