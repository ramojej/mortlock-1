import React from 'react';

const BattenShapeAndSize = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="shapes__boxes">
      <div className="general-heading">
        <h2>{ content.shape_and_size_title }</h2>
      </div>
      <div className="row">
        {content.batten_shapes ? 
          content.batten_shapes.map((size, index) => (
            <div className="col-sm" key={index}>
              <div className="shape__column">
                <span className="title" dangerouslySetInnerHTML={{ __html: size.shape_and_size_title }} />
                { size.shape_icons ? 
                    <ul className="block-icons">
                    { size.shape_icons.map((icon, index) => (
                      <li key={index}>
                        <div className="block-iconwrap" dangerouslySetInnerHTML={{ __html: icon.shape_svg }} />
                        <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.5 53.5"><path class="st0" d="M53.6,43.7c-0.3-0.5-0.6-1.1-1.1-1.2c-0.4-0.1-0.8-0.2-1.2-0.4c-0.1,0-1.9-0.5-1.9-0.6c0,0,0-1.8,0-1.8l2.7-1.2
	c1.2-0.4,2-1.6,1.8-2.8V23.4L53.8,22l-0.3-1.3l-0.3-1.3l-0.4-1.2L52.4,17l-0.5-1.2l-0.6-1.2l-0.6-1.2L50,12.3l-0.7-1.1l-0.8-1.1
	l-0.8-1c0,0-0.9-1-0.9-1c-0.6-0.5-1.1-1-1.7-1.6l-1-0.8l-1-0.8L42,4.1l-1.1-0.7l-1.1-0.6l-1.2-0.6l-1.2-0.5l-1.2-0.5L35,0.8
	l-1.2-0.4l-1.3-0.3l-1.3-0.2L30-0.3l-1.3-0.1l-1.3-0.1h-1.3l-1.3,0.1l-1.3,0.1l-1.3,0.2l-1.3,0.2l-1.3,0.3l-1.2,0.4l-1.2,0.4L16,1.7
	l-1.2,0.5l-1.2,0.6l-1.1,0.6l-1.1,0.7l-1.1,0.7l-1,0.8c0,0-1,0.8-1,0.8C7.7,7.1,7.2,7.7,6.5,8.3l-0.8,1l-0.8,1l-0.8,1.1l-1.4,2.2
	l-0.6,1.1l-0.6,1.2L1,17.1l-0.4,1.2c0,0-0.4,1.2-0.4,1.2c-0.1,0.9-0.3,1.7-0.5,2.6l-0.2,1.3l0.1,13c0,0.8,0.4,1.5,1.2,1.9l3.4,1.5
	c0,0,0,1.7,0,1.7c-1.1,0.2-2.1,0.5-3.1,0.9c-1.1,0.5-1.7,2.1-1.2,3.2c0.4,0.9,0.8,1.8,1.2,2.6C2,50.1,2.9,52,3.7,53.9
	c0,0,0.1,0.1,0.1,0.1c0,0,45.8,0,45.8,0s4-7.5,4-7.5c0.3-0.5,0.4-1.1,0.3-1.7C53.8,44.4,53.7,44,53.6,43.7z M5.1,51.9l-3.3-6.3
	l-0.1-0.2v-0.2l0.1-0.4l0.1-0.2l0.2-0.2l4.2-1v-4.8l-4.1-1.8c-0.3-0.2-0.5-0.5-0.5-0.8V23.6l0.2-1.1l0.5-2.3L2.7,19l0.4-1.1l0.5-1.1
	l0.5-1.1l0.6-1.1l1.3-2l0.7-1l0.7-0.9l0.8-0.9L9,8.9l1.8-1.6l0.9-0.7l1-0.7l1-0.6l1-0.6l1.1-0.5l1.1-0.5L18,3.2l1.1-0.4l1.1-0.3
	l1.1-0.3L22.5,2l2.4-0.3l1.2-0.1h1.2l2.4,0.2L30.9,2l1.2,0.2l2.3,0.6l1.1,0.4l1.1,0.4l1.1,0.5l1.1,0.5l1,0.6l1,0.6l1,0.7l0.9,0.7
	L43.6,8l0.9,0.8l0.8,0.9l0.8,0.9l0.7,0.9l1.4,2l0.6,1l0.6,1.1l0.5,1.1l0.5,1.1l0.4,1.1l0.4,1.1l0.3,1.2l0.2,1.2l0.2,1.1v12.4
	c0,0.4-0.2,0.7-0.5,0.8l-4,1.7v4.8l3.8,0.9l0.6,0.4l0.1,0.2v0.2l-3.5,6.9L5.1,51.9L5.1,51.9z"/></svg>
                        <span className="text">{ icon.shape_title }</span>
                      </li>
                    ))}
                    </ul>
                : null }
              </div>
            </div>
          ))
        : null }
      </div>
    </div>
  )
}

export default BattenShapeAndSize;