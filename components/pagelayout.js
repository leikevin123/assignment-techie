import { Box,ButtonGroup,Text, Heading,Button, Flex, Spacer,   List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider, Center, Link, } from "@chakra-ui/react";

import NextLink from 'next/link';
import { Header } from './header';
import { GeneralResources } from "./generalresources";
import { Footer } from "./footer";
/*
*********PLAN**********
1)DONE. Do the HTML basic elements first, write out descriptions for each resource.
  Put in backlinks
2)Design/Styling is last
3)Mobile Friendly

*********LAYOUT**********
Header
“A Place To Find Tech Related Resources, Find Affordable Necessities, and a Place to Help at-risk”

Main Content
A Quick Note
No matter what is available to learn, what educational degrees are achieved, or what certifications are achieved, you as a person must demonstrate good skills and make connections with others.

General Resources
-Techie
-Grow with Google. Can ask for financial aid
-freeCodeCamp
-The Odin Project(more for web developers)
-Kaggle
-Github(Contributions) : Don’t just use GitHub	 to upload or download files. Use it as a way to make contributions and make connections with other developers.
-That Bootcamp
-Place to find connections(Meet up, ….)

Footer 
Donations and Other Resources
-Techie Youth
-Mesh
-Food Pantries
-Find other donations, figure out necessities


    <Flex background={'blue.200'}>
    <Text>
      A Quick Note
      <br/>
      No matter what is available to learn, what educational degrees are achieved, 
      or what certifications are achieved, you as a person must demonstrate good skills and make 
      connections with others.
    </Text>
    </Flex>

    bgGradient='linear(to-br, #FFD166, #FFFCF9)'
*/

export function Layout(){
  return(
  <>
    <Box bgGradient='linear(to-br, #E7A977, #EBBE9B)'>
    <Header/>
    
    <GeneralResources/>
    
    <Footer/>
    </Box>
    </>
  )
}