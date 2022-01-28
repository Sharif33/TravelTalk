import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import about from "../../../images/shareexp.webp";

const About = () => {
    return (
        <div>
            <Header/>
            <div>
                <img className='img-fluid w-100 bnrImg' src={about} alt="" />
            </div>
            <div className='col-10 col-md-8 mx-auto p-3 blog-desk bg-light rounded'>
                <div>
                    <h2 className='text-warning'>About TravelTalk</h2>
                    <h5 className='text-secondary'>Free Online Travel Diary</h5> <hr />
                </div>
                <div>
                    <p>Travel Talk is a unique free online travel diary for travellers across the world. It works from internet cafes and computers world wide, to allow you to update an online travel diary, it is free to join and takes just minutes to setup, all you need is a working email address. You can contact us here if you have business or press questions - or use the Travel Forum for TravelTalk user support, travel questions, or just introducing yourself. For advertising information please visit our advertising page</p>
                    <p>TravelTalk.org is one of the most popular travel related web 2.0 sites on the internet - see alexa or quantcast for more information.</p>
                    <ul>
                        <li>
                        TravelTalk.org has over 200,000 members and grows at around 100 new members a day.
                        </li>
                        <li>
                        TravelTalk.org hosts over 7 million photos
                        </li>
                        <li>
                        TravelTalk.org hosts over 60,000 maps
                        </li>
                        <li>
                        TravelTalk.org hosts over 700,000 blog entries.
                        </li>
                    </ul>
                    <p>A few questions answered</p>
                    <h5>What is a blog?</h5>
                    <p>A blog is a web based journal. Lots of travellers write down a daily journal or at least intend to, so the idea here is that you can write down your journal online.</p>
                    <h5>What is travel blog?</h5>
                    <p>Travel blog is a collection of tools so that travellers can write down a journal, send the address to family and friends, set up automatic mailing lists so that every time you add a new entry to your list your friends get an automatic email. Also the theme is travel, the tools are designed to cope with you moving around, maps and flags are linked from each journal.Photos can be added to your blog if you have a digital camera.
We encourage our members to link to useful sites about areas, to help out future travellers.
Write reviews, guides, journals, add photos.</p>
                    <h5>How did this site start?</h5>
                    <p>In 2002 the founder of TravelTalk decided to chart his journey via a website. The founder had formally worked for some major IT companies in London - designing and building web sites and applications - why not offer the same kind of features that these companies enjoy to the travellers of the world? You see the result here.
The founder of TravelTalk still travels regularly, still runs this site, still doesn't have the meaning of life - but is enjoying life a lot more, you can read his TravelTalk here</p>
                <h5>Why do you offer this service for free? aka "How can you offer this service for nothing?"</h5>
                <p>TravelTalk is an advertising supported service. There is a trade between the users of the site and the operator, TravelTalk hosts and promotes their stories in return for being allowed to publish adverts along side their stories. Unlike (some) competing sites we don't then exploit our users with spam, popups, promotions and charge them for the privilege, additionally - we have a clear and fair copyright policy - the copyright of each journal and photo belongs to the author, we just publish it on the web.</p>
                <h5>What plans does TravelTalk have?</h5>
                <p>Hundreds. Hand picked services, articles on offering advice to new travellers, journey charting maps, video uploads - you name it there are plans for it. One plan that was recently put into action was the travel forum - providing a friendly place to chat about travel, support for new users and somewhere to talk about pretty much anything. This site is active - here to stay and growing daily.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;