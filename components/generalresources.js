
import {Flex,List,ListItem,Text,Link,Heading,Center,Box, Highlight,
        LinkBox, LinkOverlay, ListIcon, } 
        from '@chakra-ui/react'

import {StarIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'

export function GeneralResources(){
  return(
    <div className='generalResources' id='generalResources'>
    <Center>
    <Heading  margin={'center'}
     bgGradient='linear(to-l, #44000B, #E0455F)'
     bgClip='text'
     fontSize='5xl'
     fontWeight='bold'>
      General Tech and Networking Resources </Heading>
    </Center>
    <br/>

    <Box>
      <List margin={'center'}>
        <ListItem>
        <NextLink href='https://www.techieyouth.org' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading   
          bgGradient='linear(to-r, #e07d05, #afb114)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'>
    Techie Youth</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
          <Link href='https://www.techieyouth.org'
          bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
          >
          Techie Youth
          </Link>
          is a organization that provides training to help kids, foster, and at-risk youth tech career 
          training to be financially self-sufficient. Their <NextLink href='https://www.techieyouth.org/enroll'>E-Earn program</NextLink> 
          teaches individuals how to get a remote job, online entrepreneurship, financial guidancs, and other guidances for youth.
          They also have a <Link href='https://www.youtube.com/results?search_query=techie+youth'
          bg={'red.400'} px={'2'} py={'1'} rounded={'full'}>Youtube channel!</Link>
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www.recurse.com' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
          bgGradient='linear(to-r, #058616, #05e022 )'
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'>Recurse Center</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
        <Link href='https://www.recurse.com'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >Recurse Center</Link>
        is a educational institution that provides a curriculum, classes, teachers and hiring assitances 
        for those that would like to build their programming skills.
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://grow.google' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
          bgGradient='linear(to-r, #e00527, #2305e0,#d1e005 )'
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'>Grow with Google</Heading></Center>  </Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
        <Link href='https://grow.google'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >Grow with Google</Link>, created by Google, is a program that gives individuals tools and training to expand into 
          different careers. They offer <NextLink href='https://grow.google/certificates/#?modal_active=none'> certifications </NextLink>
          that are free, paid, and available for financial aid.
          They also add have a
          <Link href='https://www.youtube.com/c/GoogleCareerCertificates/featured'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >YouTube channel</Link>
           related to their certifications.
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
          <NextLink href='https://www.freecodecamp.org' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
          bgGradient='linear(to-r, #000000, #ffffff)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'>freeCodeCamp</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
        <Link href='https://grow.google'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >freeCodeCamp</Link>
        is an organization that provides training and certifications for tech. From web development, to data analytics, to data science, to artifical intelligence training is provided.
        They also have a 
        <Link href='https://www.youtube.com/c/Freecodecamp'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >YouTube Channel</Link> that provides many tutorials
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www.theodinproject.com' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
          bgGradient='linear(to-r, #c29805, #8f8f8f )'
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'>The Odin Project</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>

        <Text fontSize={'18px'} letterSpacing={'2px'}>
        <Link href='https://www.theodinproject.com'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >
        The Odin Project
        </Link> is a open source resource to provide free education and training to those that prefers to enter the world of web development.
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www.kaggle.com' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading textColor={'#03a9d9'}>Kaggle</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
        <Link href='https://www.kaggle.com'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >
          Kaggle </Link>
           is a community that provides competitions, datasets, and training particularly for those that are into data.
        </Text>
        </Center>
        </ListItem>

        <br/>
        <ListItem>
          <Center><ListIcon as={StarIcon}/><Heading>Apprenticeships</Heading></Center>
          <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
          There are tech related apprenticeships by big corporations that can be found by 
          <Link href='https://buildyourfuture.withgoogle.com/apprenticeships'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >Google</Link>
          , 
          <Link href='https://www.ibm.com/us-en/employment/newcollar/apprenticeships/'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >IBM</Link>
          , 
          <Link href='https://careers.linkedin.com/reach'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >LinkedIn</Link>
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://www.meetup.com' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading
          bgGradient='linear(to-r, #DB3445, #F71735 )'
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'>MeetUp</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
          Explore 
          <Link href='https://www.meetup.com'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >MeetUp</Link>
         to find tech related events and connected with others!
        </Text>
        </Center>
        </ListItem>

        <br/>

        <ListItem>
        <NextLink href='https://devpost.com/hackathons' passHref>
          <Link><Center><ListIcon as={StarIcon}/><Heading>Hackathons</Heading></Center></Link>
        </NextLink>
        <Center marginLeft={'100px'} marginRight={'100px'}>
        <Text fontSize={'18px'} letterSpacing={'2px'}>
        Find
        <Link href='https://devpost.com/hackathons'
        bg={'red.400'} px={'2'} py={'1'} rounded={'full'}
        >Hackathons</Link>to challenge yourself and build friends with others!
        </Text>
        </Center>
        </ListItem>

        <br/>

      </List>
    </Box>
    </div>
  )
}