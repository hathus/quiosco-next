import Image from 'next/image'

const Sidebar = () => {
  return (
    <>
        <Image className='object-center mx-auto' width={150} height={100} src="/assets/img/logo.svg" alt='logotipo' />
    </>
  )
}

export default Sidebar