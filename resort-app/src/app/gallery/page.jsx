

import './BodyContext.scss'
import Image from 'next/image';
import wellness from '../assets/images/wellness1.png'
import Gallery from '../assets/images/gallery1.jpg'
import Gallery1 from '../assets/images/gallery2.jpg'
import Gallery2 from '../assets/images/gallery3.jpg'
import Accomadation from '../assets/images/acco.jpg'
import Adventure from '../assets/images/advicon1.jpg'
export default function BodyContext() {

  const data = [
    {
      "title": "Accommodation",
      "description": "Lorem ipsum dolor sitem",
      "icon": Accomadation
    },
    {
      "title": "Adventure Activities",
      "description": "Lorem ipsum dolor sitem",
      "icon": wellness
    },
    {
      "title": "Wellness & Spa",
      "description": "Lorem ipsum dolor sitem",
      "icon": Adventure
    }
  ]

  const galleryData = [
    {
      "image": Gallery
    }, {
      "image": Gallery1
    }
    , {
      "image": Gallery2
    },
    // {
    //   "image": Gallery3
    // }
  ]

  return (
    <div>

      <div className='gallery-service'><h1>Services</h1></div>
      <div className='body'>

        {
          data.map((item, index) => {

            return (
              <div className='card'>
                <div>
                  <Image src={item.icon} alt="wellness" className='service-img' />
                </div>
                <div>{item.title}</div>

                <div>{item.description}</div>
              </div>
            )
          })
        }

      </div>
      <div>
        <div id="gallery-section"></div>
        <div className='gallery-main'>
          <h1>Gallery</h1>
        </div>
        <div className='body-gallery'>
          {
            galleryData.map((item, index) => {

              return (
                <div className='gallery'>

                  <Image src={item.image} alt="wellness" className='img-gallery' />

                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}
