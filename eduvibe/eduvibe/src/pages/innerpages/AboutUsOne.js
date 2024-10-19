import React from 'react';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import AboutSeven from '../../components/about/AboutSeven';
import FooterOne from '../../common/footer/FooterOne';
import HomeOneInstructor from '../../components/home-one/HomeOneInstructor';

const AboutUsOne = () => {
    return (
        <>
            <SEO title="About Us 1" />

            <HeaderOne />

            <BreadcrumbOne 
                title="Who We Are"
                rootUrl="/"
                parentUrl="Home"
                currentUrl="About Us"
            />

            <AboutSeven />
            

            <HomeOneInstructor />


            <FooterOne />
        </>
    )
}

export default AboutUsOne;