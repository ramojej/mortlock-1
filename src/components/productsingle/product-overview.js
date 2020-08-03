import React from 'react';
import Button from '@src/components/global/button';

const ProductOverview = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="product__singlewrap">
      {/* <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.mission_aside_text }} /> */}
      <div className="aside__text">Product</div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2>Proplank <br />timber decking</h2>
            img
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <p>ProplankTM is a concealed fixed linear timber ceiling and wall lining. This system provides the more options than ever including mixed spacing and batten sizing. This system provides more options than ever, including mixed spacing and batten sizing, Cleverly designed, engineered spring steel clips and nylon spacers can be clicked into place according to your specifications. This system is designed to reduce installation time and material costs without compromising the aesthetics of natural timber.</p>
            img
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
          </div>
        </div>
        <div className="benefit__wrapper">
          <div className="row">
            <div className="col-sm-4">
              <div className="benefit__image">
                img
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-7">
              <div className="benefit__text">
                <h2>product benefits</h2>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="icon__wrapper">
                      <div className="benefit_icon">
                        svg
                      </div>
                      <div className="benefit_text">
                        <h3>Faster Installation</h3>
                        <p>Fastening Clips act as a perfect spacer between the boards</p>
                      </div>
                    </div>
                    <div className="icon__wrapper">
                      <div className="benefit_icon">
                        svg
                      </div>
                      <div className="benefit_text">
                        <h3>Faster Installation</h3>
                        <p>Fastening Clips act as a perfect spacer between the boards</p>
                      </div>
                    </div>
                    <div className="btn__wrap">
                      <a href="#" className="learn-more">Request a quote</a>
                    </div>
                    <div className="btn__wrap">
                      <a href="#" className="learn-more">Request a quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="application__wrapper">
          <div className="row">
            <div className="col-sm-4">
              <div className="application__text">
                <div className="application__textbox">
                  <h2>applications</h2>
                  <p>Our system is extremely versatile and can be used in a variety of applications.</p>
                </div>
                <div className="application__iconbox">
                  <ul className="list">
                    <li>
                      <div className="icon">
                        svg
                      </div>
                      <span className="text">Structural</span>
                    </li>
                    <li>
                      <div className="icon">
                        svg
                      </div>
                      <span className="text">Structural</span>
                    </li>
                    <li>
                      <div className="icon">
                        svg
                      </div>
                      <span className="text">Structural</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-7">
              <div className="gallery__wrapper">
                <div className="slide">
                  <div className="image">
                    img
                  </div>
                  <span className="gallery__text">His Majesty’s Theatre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview;