import React, { useState } from 'react'
// import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const Reacti = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>React</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src='' />
                            <HeaderText>React</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kokemus</BodyHeader>
                            <BodyText>Reactia on tullut paljon käytettyä viime aikoina.
                                Sen käyttöä on tullut sovellettua eri ohjelmisto projekteissa 
                                koulukäytössä. Tämä projekti on luotu Reactilla. Projektissa käytin styled-components 
                                muotoilua.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default Reacti