import { Divider, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex w="100%">
      <Grid
        w="100%"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        pt="50px"
        pl="150px"
        h="413px"
        pb="50px"
      >
        <Grid textAlign="left">
          <GridItem>
            <b>Company</b>
          </GridItem>
          <GridItem>Home</GridItem>
          <GridItem>Terms</GridItem>
          <GridItem>Privacy</GridItem>
          <GridItem>Cookies</GridItem>
          <GridItem>Affiliate Terms</GridItem>
          <GridItem>Download app</GridItem>
          <GridItem>Pricing</GridItem>
          <GridItem>Affiliate</GridItem>
          <GridItem>Press</GridItem>
          <GridItem>Desktime in Your Language</GridItem>
        </Grid>
        <Grid textAlign="left">
          <GridItem>
            <b>Learn More</b>
          </GridItem>
          <GridItem>All Resources</GridItem>
          <GridItem>Employe Monetring Guide</GridItem>
          <GridItem>Online employee Time Clock</GridItem>
          <GridItem>Desk Time For Bussiness</GridItem>
          <GridItem>Desk Time For Freelancer</GridItem>
          <GridItem>FAQ</GridItem>
          <GridItem>Case Study</GridItem>
          <GridItem>WEbinar </GridItem>
          <GridItem>Blog </GridItem>
        </Grid>
        <Grid textAlign="left">
          <GridItem>
            <b>Intigration</b>
          </GridItem>
          <GridItem>All Integration</GridItem>
          <GridItem>Trello</GridItem>
          <GridItem>Basecamp</GridItem>
          <GridItem>Jira </GridItem>
          <GridItem>Asnaa</GridItem>
          <GridItem>Outlook Colender</GridItem>
          <GridItem>Google Colender</GridItem>
        </Grid>
        <Grid textAlign="left">
          <GridItem>
            <b>Feature</b>
          </GridItem>
          <GridItem>All Feature</GridItem>
          <GridItem>Automatic Time tracking</GridItem>
          <GridItem>Url & app tracking</GridItem>
          <GridItem>Screenshots</GridItem>
          <GridItem>Project time tracking</GridItem>
          <GridItem>Absence colender</GridItem>
          <GridItem>Mobile app</GridItem>
          <GridItem>Feature request</GridItem>
        </Grid>
        <Grid textAlign="left">
          <GridItem>
            <b>Help Center</b>
          </GridItem>
          <GridItem>Contact us</GridItem>
          <GridItem>Shedule a call</GridItem>
          <GridItem>Send us a email</GridItem>
          <GridItem>REquest In-person Training</GridItem>
          <GridItem>Open chat</GridItem>
          <GridItem>
            <b>Phone Support</b>
          </GridItem>
          <GridItem>+1(315)6365354</GridItem>
          <GridItem>MON-FRI 9:00 -22:00 EFT</GridItem>
        </Grid>
      </Grid>
    </Flex>
  );
}
