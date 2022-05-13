import React, { useState } from 'react'
// import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const CFamily = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>C-Family</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src='' />
                            <HeaderText>C++ ja C#</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kokemus</BodyHeader>
                            <BodyText>C++ Kokemusta minulta löytyy vain
                                ammattikorkeakoulu c++ perusteet kurssin pohjalta. <br/>
                                C# opettelen tällä hetkellä, joten sen kokemus on vielä vähäistä. 
                                Kiinostuin kielestä sen monipuolisuuden ja tehokkuuden takia.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default CFamily