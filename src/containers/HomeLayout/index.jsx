import  Ityped  from "../../hooks/ityped";
export default function HomeLayout(){
    
    return(
        <>
           
             <div className="container" id="home">
                    <section className="banner">
                        <div className="wrapper">
                            <div className="top">
                                <div className="title">
                                    <p>Hi, my name is</p>
                                    <h2 className="text">
                                        <Ityped />
                                    </h2>
                                </div>
                                <div className="middleTitle"  data-aos="fade-up">
                                    <h2>I build things for the web.</h2>
                                </div>
                            </div>
                            <div className="bottom" data-aos="zoom-out-right" data-aos-duration="1000">
                                <div className="paragraph" >
                                <p>I’m a student  currently studying Bachelor of Information Technology at CG Institute Of Management. Ocassionally, I worked in <span>banner</span>, <span>logo</span> designing as well as<span> photo editing</span>. Moreover, I love to learn on the <span>designing</span> part of the <span>Web</span> during free time.</p>
                                </div>
                            
                                <div className="button resume"  >
                                <a href="" > Check out my resume! </a>
                                </div>
                            
                            </div>
                            
                        </div>
                    </section>
            </div>
        </>
    );
}