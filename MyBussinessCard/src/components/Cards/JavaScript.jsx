import React, { useState } from 'react'
// import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const Javascript = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>Javascript</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src='' />
                            <HeaderText>Javascript</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kokemus</BodyHeader>
                            <BodyText>Javascript on yksi ensimmäisistä kielistä 
                                mihin tutustuin. Sen kanssa minulla on ollut pitkä 
                                on-off suhde, mutta siihen palaaminen on 
                                ollut aina nopeaa ja helppoa. Nyt Web ohjelmointia harrastessa sitä 
                                on tullut käytettyä enemmän.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default Javascript