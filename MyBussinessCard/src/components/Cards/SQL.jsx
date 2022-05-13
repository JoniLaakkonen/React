import React, { useState } from 'react'
// import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const SQL = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>SQL</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src='' />
                            <HeaderText>SQL</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kokemus</BodyHeader>
                            <BodyText>Ensimmäinen vuosi ammattikorkeakolussa kävimme läpi 
                                paljon SQL asiaa. Perusteista kehittyneemmälle tasolle. 
                                SQL on joutunut soveltamaan erilaisissa ohjelmisto projekteissa 
                                mm. Java kielten yhteydessä.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default SQL