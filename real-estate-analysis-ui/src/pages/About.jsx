import '../stylesheets/About.css'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from 'react';

export default function About() {
    const [imageStevenSrc, setImageStevenSrc] = useState('');
    const [imageYenchengSrc, setImageYenchengSrc] = useState('');
    const [imagePaulSrc, setImagePaulSrc] = useState('');
    const local_url = 'http://127.0.0.1:3000'
    const school_url = 'https://apps-fall.ischool.berkeley.edu/RealEstateAnalyzers'

    useEffect(() => {
        const getStevenImage = async () => {
            try {
            const response = await fetch(`${local_url}/get_image/StevenTong.png`);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImageStevenSrc(url);
            } catch (error) {
            console.error('Error fetching image:', error);
            }
        };
        const getYenchengImage = async () => {
            try {
            const response = await fetch(`${local_url}/get_image/YenchengChen.png`);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImageYenchengSrc(url);
            } catch (error) {
            console.error('Error fetching image:', error);
            }
        };
        const getPaulImage = async () => {
            try {
            const response = await fetch(`${local_url}/get_image/PaulArellano.jpg`);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImagePaulSrc(url);
            } catch (error) {
            console.error('Error fetching image:', error);
            }
        };
    
        getStevenImage();
        getYenchengImage();
        getPaulImage();
    
        }, []);

  return (
    <div className='about-container'>
    <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Mission</Accordion.Header>
        <Accordion.Body>
        <p1>The connection between people and economic activities is deeply intertwined with housing prices. 
            Shelter is an indispensable necessity in life and often signifies one of the most substantial expenses an individual faces. 
            Affordability of the basic items could decide the living quality and the capability that people can purchase.
            In the aftermath of the pandemic, there has been a significant and abrupt shift in housing prices, raising concerns among individuals regarding the accuracy of their investments.
            For a better grasp of housing price determinants and various living-related parameters, this website showcases a range of indices across different cities and countries worldwide, spanning from 2012 Q1 to the present
        </p1>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dataset</Accordion.Header>
        <Accordion.Body>
        <a href='https://www.numbeo.com/cost-of-living/'>Numbeo Dataset</a>
        <p>
        Numbeo is the world’s largest cost of living database. Numbeo is also a crowd-sourced global database of quality of life data: housing indicators, perceived crime rates, healthcare quality, transport quality, and other statistics.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>About Us</Accordion.Header>
        <Accordion.Body>
          <CardGroup>
          <Card>
            <Card.Img variant="top" src={imageStevenSrc} />
              <Card.Body>
                <Card.Title>Steven Tong</Card.Title>
                <Card.Text>
                    Steven is a Senior Consultant at Sophi, where he specializes in delivering insights and paywall solutions to digital news media companies. He holds a Master's degree in Chemical Engineering from the University of Waterloo. Currently, he is pursuing a second Master's degree in Data Science at the University of California, Berkeley. Before joining Sophi, Steven garnered experience in data analysis at various companies, demonstrating proficiency in popular visualization tools like Tableau, Sisense, as well as programming languages like Python and R.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={imageYenchengSrc} />
              <Card.Body>
                <Card.Title>Yencheng Chen</Card.Title>
                <Card.Text>
                    Yencheng is a Hardware Engineer who currently works at Google. He specializes in product development and trouble shooting on new display technology and its optical specifications for Google Hardwares. He holds a Bachelor’s and a Master’s degree in Physics from the National Central University. Currently, he is pursuing a second Master's degree in Data Science at the University of California, Berkeley. In the curriculum, he is most interested in data visualization and uncovering valuable insights.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={imagePaulSrc} />
              <Card.Body>
                <Card.Title>Paul Arellano</Card.Title>
                <Card.Text>
                Paul is a Software Engineer who currently works at Cisco Meraki. 
                He has a Bachelor's in Computer Science from East Carolina University and a Master's
                in Information and Data Science from the University of California, Berkeley. 
                His career began as a Front end mobile developer creating applications for both Android and iOS. 
                While gaining experience, he was able to transition into a Fullstack developer role, creating API's and 
                CI / CD pipelines. He enjoys playing tennis and spending time with his family whenever possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className='bottom-space'></div>
    </div>
  );
}