import SEO from '@/components/custom/utils/SEO'
import React from 'react'
import Hero from './components/Hero'
import Catalogue from './components/Catalogue'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Testimonials from './components/Testimonial'

const Home: React.FC = () => {
    return (
        <>
            {/* Seo compoments */}
            <SEO
                title='Welcome to iPhone Store Cameroon - Your Trusted Apple Partner'
                description='Explore the latest iPhones and accessories at unbeatable prices. Enjoy a seamless shopping experience on our modern e-commerce platform.'
            />

            {/* App Comoments */}
            <>
                <Hero />
                <Catalogue />
                <Services />
                <FAQ />
                <Testimonials />
                <Contact />
            </>
        </>
    )
}

export default Home
