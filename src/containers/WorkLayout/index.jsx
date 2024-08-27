import image1 from "../../assets/web-designing.png";
import image2 from "../../assets/photoshop.png";
import image3 from "../../assets/web-development.png";
export default function WorkLayout(){
    return(
        < div className="container">
            <section className="work " id="work">
                    <div className="wrapper">
                        <div className="top">
                            <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                                <h3>Work</h3>
                            </div>
                            <div className="portfolio">
                                <div className="row">
                                    <div className="col-left " data-aos="flip-left"  data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image1} alt="web design - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                                        <p className="featured">Featured Project</p>
                                        <h4 className="project-title">Web Design</h4>
                                        <div className="box">
                                            <p>
                                                A responsive website, latest UI/UX design and more.
                                                Considering mobile first responsive web using <span>bootstrap</span> as well with <span>HTML</span>, <span>CSS</span> and <span>Javascript</span>. 
                                            </p>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Quick</li>
                                                <li>Responsive</li>
                                                <li>UI/UX</li>
                                            </ul>
                                            <div className="icons">
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" style={{width: `20px`, height: `20px`}}><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                </a>
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowsecond">
                                    <div className="col-left second" data-aos="flip-right" data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image2} alt="photoshop - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right second" data-aos="zoom-in" data-aos-duration="1000">
                                        <p className="featured">Featured Project</p>
                                        <h4 className="project-title">Photoshop</h4>
                                        <div className="box">
                                            <p>
                                                Photoshop is the powerful tool that is used for <span>editing</span> & <span>retouching photos</span>, creating <span>banner</span> and <span>mockup</span>, making <span>logos</span> and customs <span>Luts</span>.
                                            </p>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Quick</li>
                                                <li>Responsive</li>
                                                <li>UI/UX</li>
                                            </ul>
                                            <div className="icons">
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" style={{width: `20px`, height: `20px`}}><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                </a>
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-left" data-aos="flip-left" data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image3} alt="web development - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                                        <p className="featured">Featured Project</p>
                                        <h4 className="project-title">Web Development</h4>
                                        <div className="box">
                                            <p>
                                                Web application development is the creation of application programs that reside on remote <span>servers</span> and are delivered to the <span>user's</span> device over the <span>Internet</span>. 
                                            </p>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Quick</li>
                                                <li>Responsive</li>
                                                <li>UI/UX</li>
                                            </ul>
                                            <div className="icons">
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" style={{width: `20px`, height: `20px`}}><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                </a>
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}