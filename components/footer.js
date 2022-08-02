import {Box,List, ListItem, Heading, Link, Text,Center, Highlight, ListIcon} from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons'

import NextLink from 'next/link'

export function Footer(){
  return(
    <footer className='donation' id='donation'>

      <Center><Heading
      bgGradient='linear(to-l, #44000B, #E0455F)'
      bgClip='text'
      fontSize='5xl'
      fontWeight='bold'>Donation and Other Resources</Heading></Center>
      <br/>
      <List>
        <ListItem>
        <NextLink href='https://www.techieyouth.org/help' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
                    bgGradient='linear(to-r, #e07d05, #afb114)'
                    bgClip='text'
                    fontSize='5xl'
                    fontWeight='extrabold'>Techie DONATION PAGE</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
        <Link href='https://www.techieyouth.org'
          bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
          >
          Donate at Techie Youth
          </Link> to give people of youth a chance to enter the world of tech!
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www.nycmesh.net' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
                    bgGradient='linear(to-r, #ffe81a, #000000)'
                    bgClip='text'
                    fontSize='5xl'
                    fontWeight='extrabold'>NYC MESH</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'90px'} marginRight={'90px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
          No internet at home in NYC? No WiFi at home in NYC? Get involved with 
          <Link href='https://www.techieyouth.org'
          bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
          >NYC MESH </Link>
           to get free access to the interenet!
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www1.nyc.gov/assets/donate/site/home' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
                    bgGradient='linear(to-r, #99ff00, #017817)'
                    bgClip='text'
                    fontSize='5xl'
                    fontWeight='extrabold'>DonateNYC</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
       <Text fontSize={'18px'} letterSpacing={'2px'}>
       <Link href='https://www.techieyouth.org'
          bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
          >Donate anything for NYC! </Link>
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www.freecodecamp.org/donate' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
                    bgGradient='linear(to-r, #000000, #ffffff)'
                    bgClip='text'
                    fontSize='5xl'
                    fontWeight='bold'>freeCodeCamp DONATION PAGE</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
          Want to keep tech related education as free as possible? 
          <Link href='https://www.techieyouth.org'
          bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
          >Donate to freeCodeCamp!</Link>
        </Text>
        </Center>
        </ListItem>
        <br/>
      </List>
    </footer>
  )
}


