import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-black-300 border-t flex justify-between items-center flex-wrap gap-5 relative z-30" >
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <a href="https://github.com/monishsoni7">
                <div className='social-icon'>
                    <img src='/assets/github.svg' alt='GitHub' className='w-1/2 h-1/2' />
                </div> 

                </a>
                <a href="https://www.linkedin.com/in/monish-soni7/">
                 <div className='social-icon'>
                    <img src='/assets/icons8-linkedin.svg' alt='GitHub' className='w-1/2 h-1/2' />
                </div>
                </a>
                <a href="https://www.instagram.com/monishsoniofficial7/">
                <div className='social-icon'>
                    <img src='/assets/instagram.svg' alt='GitHub' className='w-1/2 h-1/2' />
                </div>
                </a>
            </div>
            <p className='text-white-500'>© 2025 Monish.All rights reserve.</p>
        </section>
    )
}
export default Footer;
