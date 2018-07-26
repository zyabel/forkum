import React, { Component } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { Carousel, Image, Jumbotron, Button } from 'react-bootstrap'

const Slides = [
  {
    width: "1000",
    height: "500",
    size: "1000x500",
    path: "1.jpg",
    title: "First slide label",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    width: "1000",
    height: "500",
    size: "1000x500",
    path: "2.jpg",
    title: "Second slide label",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    width: "1000",
    height: "500",
    size: "1000x500",
    path: "3.jpg",
    title: "Third slide label",
    text: "NPraesent commodo cursus magna, vel scelerisque nisl consectetur.",
  }
]

class HomePage extends Component {
  render() {
    return(
      <MainLayout>
        <Carousel>
          {Slides.map((slide, i) => 
            <Carousel.Item key={i}>
              <Image 
                width={slide.width} 
                height={slide.height} 
                alt={slide.size} 
                src={require(`../../images/${slide.path}`)} 
                thumbnail
                responsive
              />
              <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
        <Jumbotron style={{padding: '40px', margin: '20px 0', borderRadius: '10px'}}>
          <h2>LOREM MEM</h2>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Laudantium tempore odio, consectetur magnam, quo quia officia, 
            voluptates similique vero eos possimus dignissimos? Quaerat consectetur odio et deleniti quam? 
            Porro, molestias! 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Laudantium tempore odio, consectetur magnam, quo quia officia, 
            voluptates similique vero eos possimus dignissimos? Quaerat consectetur odio et deleniti quam? 
            Porro, molestias! 
          </p>
          <Button bsStyle="primary">Read more</Button>
        </Jumbotron>
        <Jumbotron style={{padding: '40px', margin: '20px 0', borderRadius: '10px'}}>
          <h2>LOREM MEM</h2>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Laudantium tempore odio, consectetur magnam, quo quia officia, 
            voluptates similique vero eos possimus dignissimos? Quaerat consectetur odio et deleniti quam? 
            Porro, molestias! 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Laudantium tempore odio, consectetur magnam, quo quia officia, 
            voluptates similique vero eos possimus dignissimos? Quaerat consectetur odio et deleniti quam? 
            Porro, molestias! 
          </p>
          <Button bsStyle="primary">Read more</Button>
        </Jumbotron>
      </MainLayout>
    )
  }
}

export default HomePage