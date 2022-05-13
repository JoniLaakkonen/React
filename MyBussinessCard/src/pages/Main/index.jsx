import React from 'react'
import Profile from '../../components/Cards/Profile'
import CFamily from '../../components/Cards/CFamily'
import Java from '../../components/Cards/Java'
import JavaScript from '../../components/Cards/JavaScript'
import Reacti from '../../components/Cards/React'
import SQL from '../../components/Cards/SQL'
import { CardStack, MainContainer } from './Main.Element'

const Main= () => {
  return (
    <>
      <MainContainer>
        <CardStack>
          <Profile />
          <CFamily />
          <Java />
          <Reacti />
          <JavaScript />
          <SQL />
        </CardStack>
      </MainContainer>
    </>
  )
}

export default Main
