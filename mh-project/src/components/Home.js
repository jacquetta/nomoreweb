import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import logo from "../img/logo.png";
import hand from '../img/hand.jpg';


function Home() {
    return (
        <div>
            <header>
                <img src={ logo } alt='logo' className='responsive' />
                <h1>Mental illness does define who we are.</h1>
            </header>

            <Container>
                <q>
                    <i>Happiness can be found <b>DARKEST</b> of times, when one only remembers to turn on the <b>LIGHT</b></i>
                </q>
                <p>-Professor Albus Dumbledore</p>
                <p>(Harry Potter and the Prisoner of Azkaban by J.K Rowling)</p>
                

                <h3>No More Hiding provides a variety of resources to helps you navigate through mental illness. </h3>
                <Row>
                    <Col>
                        <h3>Articles</h3>
                        <p>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</p>
                   </Col>

                    <Col>
                        <h3>Self-Help Resources</h3>
                        <p>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</p>
                    </Col>
                </Row>

                <img src={ hand } alt='from unsplash' width="1050" height="450" />

                <Row>
                    <Col>
                        <h3>Where to turn</h3>
                        <p>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</p>
                    </Col>

                    <Col>
                        <h3>Blog</h3>
                        <p>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;