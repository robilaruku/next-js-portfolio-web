import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
function Home() {
  return (  
    <>
    <Head>
      <title>Home</title>
    </Head>

      <Navbar />
      <section className="hero">
         <div className="container"> 
            <div className="text-wrapper">    
               <h1 className="title">Halo, My name is robi irhamni</h1>
               <p className="description">
                  I am a junior web developer who is always happy to learn a new programming language :)
               </p>
               <Link href="/contact"><a className="cta">Contact Me</a></Link>
            </div>

            <div className="image-wrapper"> 
               <svg height="512" viewBox="0 0 512 512" width="460" xmlns="http://www.w3.org/2000/svg"><path d="m312 136a24 24 0 0 0 -24-24h-240a24 24 0 0 0 -24 24v168h288z" fill="#4db7e5"/><path d="m288 112-192 192h216v-168a24 24 0 0 0 -24-24z" fill="#48add9"/><path d="m24 304v16a24 24 0 0 0 24 24h240a24 24 0 0 0 24-24v-16z" fill="#e0e0de"/><path d="m208 392h-80l16-48h48z" fill="#c7c7c5"/><rect fill="#e0e0de" height="32" rx="16" width="144" x="96" y="392"/><g fill="#419bc2"><path d="m116.919 207.999h86.163v16.002h-86.163z" transform="matrix(.371 -.929 .929 .371 -99.949 284.43)"/><path d="m123.2 246.4-32-24a8 8 0 0 1 0-12.8l32-24 9.6 12.8-23.468 17.6 23.468 17.6z"/><path d="m196.8 246.4-9.6-12.8 23.468-17.6-23.468-17.6 9.6-12.8 32 24a8 8 0 0 1 0 12.8z"/><path d="m48 136h16v16h-16z"/><path d="m80 136h16v16h-16z"/><path d="m112 136h16v16h-16z"/></g><circle cx="408" cy="128" fill="#7a432a" r="24"/><circle cx="264" cy="128" fill="#7a432a" r="24"/><path d="m446.788 282.112-70.788-10.112v-48h-80v48l-74.058 15.869a48 48 0 0 0 -37.942 46.931v65.2h304v-70.37a48 48 0 0 0 -41.212-47.518z" fill="#fec9a3"/><path d="m342.03 264a63.811 63.811 0 0 0 33.97-9.81v-30.19h-80v30.19a63.811 63.811 0 0 0 33.97 9.81z" fill="#feb784"/><path d="m488 329.63v102.37h-304v-97.2a48 48 0 0 1 37.94-46.93l74.06-15.87c13.42 37.58 66.58 37.58 80 0l48.41 6.91 22.38 3.2a48 48 0 0 1 41.21 47.52z" fill="#f35244"/><path d="m240 432h192v56h-192z" fill="#ea4a3b"/><path d="m488 329.63v102.37h-226.41c61.96-33.27 115.95-77.41 162.82-153.09l22.38 3.2a48 48 0 0 1 41.21 47.52z" fill="#ea4a3b"/><path d="m416 128h-8v48h8a24 24 0 1 0 0-48z" fill="#feb784"/><path d="m264 128h-8a24 24 0 0 0 0 48h8z" fill="#feb784"/><path d="m408 120v56a72 72 0 0 1 -69.33 71.95c-.88.03-1.78.05-2.67.05a72.006 72.006 0 0 1 -72-72v-56a72.006 72.006 0 0 1 62.14-71.32h.01a72 72 0 0 1 81.85 71.32z" fill="#fec9a3"/><path d="m408 120v56a72 72 0 0 1 -69.33 71.95 87.892 87.892 0 0 0 37.33-71.95v-48a88.141 88.141 0 0 0 -49.85-79.32 72 72 0 0 1 81.85 71.32z" fill="#fec093"/><path d="m416 72c-.14 0-.268.039-.407.041a27.759 27.759 0 0 0 .407-4.041 27.906 27.906 0 0 0 -48.722-18.68 31.979 31.979 0 0 0 -62.556 0 27.667 27.667 0 0 0 -48.315 22.721c-.139 0-.267-.041-.407-.041a24 24 0 0 0 0 48l8 24 11.811-35.432a23.86 23.86 0 0 0 36.189-20.568l1.639.545a23.9 23.9 0 0 0 44.722 0l1.639-.545a23.86 23.86 0 0 0 36.189 20.568l11.811 35.432 8-24a24 24 0 0 0 0-48z" fill="#7a432a"/><path d="m360 199.02-.516-7.981c-9.875.641-20.156.961-30.55.961h-16.934v16h16.934c10.738 0 21.363-.336 31.582-.992z" fill="#f7a468"/><path d="m424 352h16v128h-16z" fill="#cf3b2e"/><path d="m232 352h16v128h-16z" fill="#cf3b2e"/><path d="m216 488h24l152-32h32l24-16h40v-56h-40l-56 24-208 16v32a32 32 0 0 0 32 32z" fill="#feb784"/><path d="m456 488h-24l-152-32h-32l-24-16h-40v-56h40l56 24 208 16v32a32 32 0 0 1 -32 32z" fill="#fec9a3"/><circle cx="296" cy="152" fill="#e0e0de" r="24"/><circle cx="376" cy="152" fill="#e0e0de" r="24"/><path d="m376 120a31.967 31.967 0 0 0 -30.864 24h-18.272a32 32 0 1 0 0 16h18.272a31.948 31.948 0 1 0 30.864-40zm-80 48a16 16 0 1 1 16-16 16.019 16.019 0 0 1 -16 16zm80 0a16 16 0 1 1 16-16 16.019 16.019 0 0 1 -16 16z" fill="#7a432a"/></svg>
            </div>            
         </div>
      </section>
    </>
 )
}

export default Home;
