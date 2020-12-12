import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'  
function Contact() {
    return (
        <>
           <Head>
             <title>Contact</title>
           </Head>
            
           <Navbar />

            <section className="hero">
              <div className="container"> 
                 <div className="text-wrapper w-full">    
                   <h1 className="title">Contact</h1>
                   <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. 
                   </p>
                   <ul className="contact-links">
                       <li className="contact-item">Email : robidream@example.com</li>
                       <li className="contact-item">Phone : +62895377562537</li>
                   </ul>
                 </div>
              </div>
            </section>
        </> 
    );
}

export default Contact;