export const LandingSection = () => {
  return (
    
    <main id="home" className=" mx-auto max-h-195 min-h-screen bg-[linear-gradient(to_left,rgba(255,255,255,0.00001),rgba(82,126,255,0.9)),url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnx2ZVMlydsd5Q9-Dy3dVJ_bfC2jTQlJEa9Sxv8LS5r4DbR-mxo0TEBAuz2afpctAjaF_nzWjwkEInm3WRsKcu5nW1DrQf7O-9ETeUVVwmK_W2ytXSYIR7_H7x3XBQfq5sYIwUtQ/s1600/Nueva+imagen.WebP')]
    bg-cover bg-right">
      <div className="max-w-360 overflow-x-hidden mx-auto px-5 md:px-15 min-h-screen flex flex-col  justify-center" > 
        <h1 className="text-shadow-md md:max-w-3/5 pr-20 md:pr-0 leading-tight text-base-text text-left" >Caring for Your Health, One Patient at a Time</h1>
        <p className="md:max-w-1/2 pr-20 md:pr-0 text-base-text/90 text-left" >A patient-first medical healthcare service focused on honest care, qualified doctors, and safe treatment — built for your everyday health needs.</p>
        <button className="cursor-pointer mt-6 bg-base-text active:outline-base-text active:outline-1 active:bg-base-text/80 hover:bg-base-text/90 text-base rounded-md px-5 py-3 mr-auto" >Book an Appointment</button>
        <div className='w-screen justify-center hidden md:flex absolute z-40 bottom-8 left-1/2 gap-4 flex-wrap -translate-x-1/2'>
          <div className='border-2 px-8 py-2 grid gap-0 place-content-center border-base-text/80 text-base-text/90 rounded-xl'>
            <h3 className='text-center leading-tight'>20+</h3>
            <p className='text-center leading-tight'>Specialist Clinics</p>
          </div>
          <div className='border-2 px-8 py-2 grid gap-0 place-content-center border-base-text/80 text-base-text/90 rounded-xl'>
            <h3 className='text-center leading-tight'>90+</h3>
            <p className='text-center leading-tight'>Doctors</p>
          </div>
          <div className='border-2 px-8 py-2 grid gap-0 place-content-center border-base-text/80 text-base-text/90 rounded-xl'>
            <h3 className='text-center leading-tight'>40+</h3>
            <p className='text-center leading-tight'>Lab Test</p>
          </div>
        </div>
      </div>
    </main>
  )
}