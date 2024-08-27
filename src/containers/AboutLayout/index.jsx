import React from 'react';
import image from '../../assets/8.png';

export default function AboutLayout(){
    return(
        < div className='container'>
          <section className="about " id="about">
            <div className="wrapper">
              <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                <h3>About Me</h3>
              </div>
              <div className="info">
                <div className="box" data-aos="fade-right" data-aos-duration="1000">
                  <div className="text">
                    <p>Hello! My name is Arjun Chhetri and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing and designing themes using <a href="">HTML</a> &amp; <a href="">CSS!</a></p>
                    <p>During the pandemic time of COVID, I started to utilize my spare time learning web designing from <a href="">W3 School.</a>For me, that was the time that turn my interest in the Web. I enjoyed learning HTML, CSS, and a little bit of Javascript.
                    </p>
                    <p>In mid-2021, I had taken a className of 3-month package on web development from <a href="">Broadway Infosys</a> of Tinkune, Kathmandu. I got to learn about PHP. PHP is the first programming language I have learned.</p>
                    <p>Currently, I am doing BSC.Hons.IT at <a href="">CGIM </a>. Motive to study IT is to polish my skill and make better so that I can get what I expected.</p>
                  </div>
                </div>
                <div className="box" >
                  <div className="img">
                    <div className="imgborder">
                  </div>
                  <div className="imgbox" data-aos="flip-right"  data-aos-duration="1000">
                      <img src={image} alt="Arjun Chhetri" />
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

        </div>
    );
}