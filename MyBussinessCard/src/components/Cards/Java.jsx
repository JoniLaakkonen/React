import React, { useState } from 'react'
// import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const Java = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>Java</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src='' />
                            <HeaderText>Java</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kokemus</BodyHeader>
                            <BodyText>Java kieltä käytimme koko 1-vuoden opiskelun ajan AMK 
                                opinnoissa. Java kielen kanssa olen melko itsevarma koodari, 
                                sillä sen kanssa on tullut paljon tehtyä ja kokeiltua. 
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default Java