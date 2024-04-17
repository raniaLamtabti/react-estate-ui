import React from 'react';
import Hero from './components/hero'
import Service from './components/service'
import Reviews from './components/reviews';
import FooterLink from './components/footerLink';
import homeS2 from '/homeS2.svg'
import homeS2Bg from '/homeS2Bg.svg'
import homeS9 from '/homeS9.svg'
import homeServ1 from '/homeServ1.svg'
import homeServ2 from '/homeServ2.svg'
import homeServ3 from '/homeServ3.svg'
import homeProv1 from '/homeProv1.svg'
import homeProv2 from '/homeProv2.svg'
import homeProv3 from '/homeProv3.svg'
import homeProv4 from '/homeProv4.svg'
import homeProvBg from '/homeProvBg.svg'
import publishBg from '/publishBg.svg'
import homeReviews from '/homeReviews.png'
import homeS5_1 from '/homeS5-1.svg'
import homeS5_2 from '/homeS5-2.svg'
import homeS5_3 from '/homeS5-3.svg'
import homeS5_4 from '/homeS5-4.svg'
import logo from '/logo.svg'
import fb from '/fb.svg'
import ins from '/ins.svg'
import x from '/x.svg'
import yb from '/yb.svg'

function HomePage() {
    const aboutContent = [
        { title: 'Marito semper', link: false, url: ''},
        { title: 'Amplissimos excellas', link: false, url: ''},
        { title: 'Omnia publicae si', link: false, url: ''},
        { title: 'Pavimenta feminas', link: false, url: ''}
    ]

    const usefulLinks = [
        { title: 'Marito semper', link: true, url: '/https://www.google.com/'},
        { title: 'Amplissimos excellas', link: true, url: '/https://www.google.com/'},
        { title: 'Omnia publicae si', link: true, url: '/https://www.google.com/'},
        { title: 'Pavimenta feminas', link: true, url: '/https://www.google.com/'}
    ]

    const contactInfo = [
        { title: '144 Pitt Street, Byron Bay, Australia', link: false, url: ''},
        { title: '+61 (0) 243 888 888', link: false, url: ''},
        { title: '+61 (0) 424 999 999', link: false, url: ''},
        { title: 'contact@Visititforme.com', link: false, url: ''}
    ]

    return (
        <div className='mt-24 w-full'>
            <Hero/>
            <div className='bg-gray-50 flex flex-col items-stretch justify-start gap-10 py-16 px-32 min-h-[500px] w-full xl:flex xl:flex-row xl:items-center xl:justify-center'>
                <div className='relative bg-cover bg-center flex-1 min-h-[500px]'>
                    <img src={homeS2Bg} alt="" className='absolute top-0 left-0 w-full h-full z-0' />
                    <img src={homeS2} alt="" className='absolute top-0 left-0 w-full h-full z-1' />
                </div>
                <div className='flex flex-col gap-8 lg:gap-16 flex-1 max-w-[700px]'>
                    <h1 className='font-bold text-4xl lg:text-3xl'>What’s Visit<span className='text-primary'>It</span>For<span className='text-primary'>Me</span> ?</h1>
                    <p className='text-xl' style={{ lineHeight: '40px' }}>VisitItForMe connects apartment seekers with people who can view properties on their behalf. Whether you’re moving house, running out of time or just want to get a first impression without having to travel, we put you in touch with reliable local people who can view properties on your behalf. Apartment hunting made easy.</p>
                </div>
            </div>

            <div className='flex flex-col gap-16 justify-center items-center md:px-[200px] py-16 px-10'>
                <div className='flex flex-col justify-center items-center gap-5 max-w-[700px]'>
                    <h1 className='text-4xl font-bold'>Flat Seeker</h1>
                    <p className='text-center text-lg'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500</p>
                </div>
                <div className='flex flex-wrap gap-10 justify-center md:justify-between w-full'>
                    <Service image={homeServ1} title={'Post your request'} description={'Fill in the form with all the necessary information'} row={false}/>
                    <Service image={homeServ2} title={'Choose a provider'} description={'Choose one provider to visit the flat'} row={false}/>
                    <Service image={homeServ3} title={'Receive a report'} description={'The provider will provide a report and the visit is done'} row={false}/>
                </div>
            </div>
            <div className='bg-gray-50 flex flex-col bg-cover bg-center gap-16 justify-center items-center py-16 px-[200px]'style={{ backgroundImage: `url(${homeProvBg})`, backgroundSize: '90%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
                <div className='flex flex-col justify-center items-center gap-5 max-w-[700px]'>
                    <h1 className='text-4xl font-bold'>Provider</h1>
                    <p className='text-center text-lg'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-16 px-0 xl:px-10 w-full'>
                    <Service image={homeProv1} title={'Search for requests'} description={'Search for flat to visit in your city'} row={false}/>
                    <Service image={homeProv2} title={'Apply to the request'} description={'Apply and wait for the approvement of the flat seeker'} row={false}/>
                    <Service image={homeProv3} title={'Visit the flat'} description={'Visit the flat and provide a report'} row={false}/>
                    <Service image={homeProv4} title={'Receive your money'} description={'Receive your money in your bank account'} row={false}/>
                </div>
            </div>
            <div className='flex flex-col gap-16 justify-center items-center py-16 px-[20px] xl:px-[200px] overflow-x-hidden'>
                <div className='flex flex-col justify-center items-center gap-5 max-w-[700px]'>
                    <h1 className='text-4xl font-bold'>Why use <spam className='text-primary'>It</spam>For<spam className='text-primary'>Me</spam> ?</h1>
                </div>
                <div className='grid grid-cols-1 2xl:grid-cols-2 gap-10 px-0 xl:px-10'>
                    <Service image={homeS5_1} title={'Convenience'} description={'Find your perfect flat without leaving your current home.'} row={true} error={false}/>
                    <Service image={homeS5_3} title={'Save Time and Money'} description={'Reduce unnecessary travel and make decisions faster.'} row={true} error={false}/>
                    <Service image={homeS5_2} title={'Trust'} description={'Rely on comprehensive reports from our trusted viewing service providers.'} row={true} error={true}/>
                    <Service image={homeS5_4} title={'Peace of Mind'} description={'Know exactly what you’re getting into before you commit to a new home.'} row={true} error={true}/>
                </div>
            </div>
            <div className='bg-primary bg-cover bg-center flex flex-col gap-16 justify-center items-center py-16 px-[50px] md:px-[200px]'style={{ backgroundImage: `url(${publishBg})`, backgroundSize: '90%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
                <p className='text-center text-2xl font-bold text-white max-w-full md:max-w-[800px]'>Ready to simplify your apartment search? Post your first request today and let VisitItForMe do the hard work for you.</p>
                <button className='bg-white px-16 py-2 rounded-2xl text-primary text-lg font-bold'>Publish</button>
            </div>
            <div className='bg-gray-50'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 p-10 md:py-28  md:px-40'>
                    <div className='flex flex-col justify-start gap-8 flex-1'>
                        <h1 className='font-bold text-4xl lg:text-5xl'>Customer <spam className='text-primary'>Reviews</spam> ?</h1>
                        <p className='text-xl lg:text-2xl'>Hear it straight from the source - Our customers are raving about us on Trustpilot! Check out what they have to say.</p>
                    </div>
                    <div className='flex justify-center flex-1'>
                        <img src={homeReviews} alt="" className='w-[90%] md:w-[50%]'/>
                    </div>
                </div>
                <div className=' pl-10 lg:pl-32'>
                    <Reviews/>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 items-center gap-16 py-16 px-40 min-h-[500px] w-full overflow-x-hidden'>
                    <img src={homeS9} alt="" className='flex-1' />
                    <div className='flex flex-col items-center xl:items-start gap-16 flex-1'>
                        <h1 className='font-bold text-4xl lg:text-5xl'>Become a <spam className='text-primary'>partner</spam></h1>
                        <p className='leading-relaxed text-lg lg:text-xl' style={{ lineHeight: '40px' }}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500,</p>
                        <button className='bg-primary px-16 py-3 rounded-2xl text-white text-lg font-bold w-fit shadow-lg'>Get Started</button>
                    </div>
                </div>
            </div>
                <div className='bg-primary py-14 px-20 xl:px-40 divide-y divide-gray-300 overflow-x-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-32 py-10'>
                        <div className='flex-1 flex flex-col gap-8'>
                            <img src={logo} alt="" width={'200px'}/>
                            <p className='text-white'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                            <div className='flex justify-between'>
                                <img src={fb} alt="" />
                                <img src={ins} alt="" />
                                <img src={x} alt="" />
                                <img src={yb} alt="" />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <FooterLink title={'About Us'} list={aboutContent}/>
                        </div>
                        <div className='flex-1'>
                            <FooterLink title={'Useful links'} list={usefulLinks}/>
                        </div>
                        <div className='flex-1'>
                            <FooterLink title={'Contact Info'} list={contactInfo}/>
                        </div>
                    </div>
                    <div className='pt-12 divide-y flex justify-center items-center'>
                        <p className='text-white text-xl font-light'>© Copyright VisitItForMe 2024</p>
                    </div>
                </div>
        </div>
  );
}

export default HomePage;
