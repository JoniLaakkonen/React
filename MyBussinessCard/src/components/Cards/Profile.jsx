import React, { useState } from 'react'
import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const Profile = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>Creator</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src={Mina} />
                            <HeaderText>Joni Laakkonen</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Ohjelmoija / Kehittäjä</BodyHeader>
                            <BodyText>Olen innokas ja oppiva nuori ohjelmoija 
                            jolla on paljon motivaatiota ja matikkapäätä koodata erilaisia 
                            sovelluksia. Opin nopeasti erilaisiin työkauluihin ja kieliin. 
                            Mieluiten toimin web-ohjelmoinnin parissa.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default Profile