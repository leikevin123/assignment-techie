import {Heading, Flex, Button,ButtonGroup, Box, Center,Text,Spacer, Link} from '@chakra-ui/react'
import { GeneralResources } from './generalresources'
import NextLink from 'next/link'

export function Header(){
  return(
  <>
    <nav className='navBar' id='navBar'>
      <Flex padding={'10px'} >
        <Heading
         bgGradient='linear(to-l, #DB3445, #F71735)'
         bgClip='text'
         fontSize='5xl'
         fontWeight='extrabold'><a href='#navBar'>NYCTechSource</a></Heading>
        <Spacer/>
        <ButtonGroup margin={'0'} padding={'0'} marginRight={'10px'}>
        <Button  bgGradient='linear(to-l, #DB3445, #F71735)'
        fontWeight='extrabold'><a href='#generalResources'>Resources</a></Button>
        <Button  bgGradient='linear(to-l, #DB3445, #F71735)'
        fontWeight='extrabold'><a href='#donation'>Donations</a></Button>
        </ButtonGroup>
      </Flex>
    </nav>

    <header>
      <Box height={'8 00px'} width={'100%'}>
        <Center>
        <Text padding={'10% 10% 10% 10%'}
        bgGradient='linear(to-l, #DB3445, #F71735)'
        bgClip='text'
        fontSize='5xl'
        fontWeight='extrabold'
        border= '1px'
        borderStyle={'lined'}
        borderWidth={'20px'}
        borderColor={'red.500'}
        borderRadius={'100px 100px 100px 100px'}
        >
        A Place To Find NYC Based Or Online Based Tech Related Resources And A Place To Help The Youth
        </Text>
        </Center>
      </Box>
    </header>
  </>
  )
}

