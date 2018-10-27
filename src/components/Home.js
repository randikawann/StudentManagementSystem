import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import NavigationBar from './NavigationBar'


export default class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          <Carousel>
            <Carousel.Item>
                <img width={1200} height={200} alt="200*200" 
                    src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&h=350.png" />
                
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={200} alt="200*200"
                    src="http://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" />
                
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={200} alt="200*200"
                    src="https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&h=350.jpg" />
                
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      
    )
  }
}
