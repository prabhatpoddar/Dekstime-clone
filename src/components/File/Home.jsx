import {
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Button,
  Spacer,
  Image,
  Tag,
  TagLabel,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { IoRocket, IoBuild } from "react-icons/io5";
import { ImFire } from "react-icons/im";
import { BiTask } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <Grid
        bg="url(https://desktime.com/static/web/_common/intro-background.png)"
        mt="50px"
        pl="150px"
        pb="150px"
      >
        <GridItem>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap="30px"
            pr="120px"
            marginBottom="40px"
          >
            <GridItem h="336px">
              <Grid gap="10px" textAlign="left">
                <Text fontSize="3xl" as="b">
                  The ultimate all-in-one time tracker for your business
                </Text>
                <Spacer />
                <Text fontSize="md">
                  A time tracker with additional workforce management features
                  that will help you develop a high-performing team that smashes
                  goals every time.
                </Text>
                <Spacer />
                <Flex justifyContent="center" gap="10px">
                  <Input w="285px" bg="white" placeholder="Your Work Email" />
                  <Button colorScheme="whatsapp" variant="solid" w="221px">
                    Start Free Trail
                  </Button>
                </Flex>
                <Spacer />
                <Text fontSize="md">
                  Try free for 14 days. No credit card required.
                </Text>
                <Spacer />
                <Text fontSize="md">
                  By signing up, you agree to our{" "}
                  <b>
                    <u>terms</u>
                  </b>{" "}
                  and{" "}
                  <b>
                    <u>privacy policy</u>
                  </b>
                  .
                </Text>
              </Grid>
            </GridItem>
            <GridItem>
              <iframe
                src="https://www.youtube.com/embed/sgmDvqlSMF4?playlist=sgmDvqlSMF4&autoplay=1&mute=1&loop=1&enablejsapi=1&origin=https%3A%2F%2Fdesktime.com"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="554px"
                height="312px"
              ></iframe>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Flex justifyContent="center" gap="10px" pr="150px">
            <Image src="https://desktime.com/static/web/clients/customer-sixt-logo-white.svg" />
            <Image src="	https://desktime.com/static/web/clients/customer-mapon-logo-white.svg" />
            <Image src="	https://desktime.com/static/web/clients/customer-montway-logo-white.svg" />
            <Image src="https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg" />
            <Image src="	https://desktime.com/static/web/clients/customer-printful-logo-white.svg" />
          </Flex>
        </GridItem>
      </Grid>

      {/* =================Next Item================================ */}

      <Grid templateColumns="2fr 1fr" mt="100px">
        <GridItem>
          <Grid w="60%" m="auto" textAlign="left">
            <Text fontSize="3xl" as="b">
              Use time tracking software to boost productivity by 30%
            </Text>
            <Text>
              There are numerous ways how DeskTime improves the day-to-day work
              for managers and employees alike. Here are just a few reasons why
              time tracking with DeskTime is a great choice for your team.
            </Text>
            <Grid templateColumns="1fr 1fr" gap="50px" mt="50px">
              <GridItem>
                <Tag bg="transparent">
                  {" "}
                  <IoRocket color="green" fontSize="24px" />{" "}
                  <TagLabel fontSize="18px">Skyrocket effectiveness</TagLabel>
                </Tag>
                <Text w="80%" ml="15%">
                  Know who's doing what and how it's going all the while
                  eliminating distractions.
                </Text>
              </GridItem>
              <GridItem>
                <Tag bg="transparent">
                  {" "}
                  <GoGraph color="green" fontSize="24px" />{" "}
                  <TagLabel fontSize="18px">Minimize business losses</TagLabel>
                </Tag>
                <Text w="80%" ml="15%">
                  Get precise insights into projects to determine profitability
                  and allocate resources.
                </Text>
              </GridItem>
              <GridItem>
                <Tag bg="transparent">
                  {" "}
                  <BiTask color="green" fontSize="24px" />{" "}
                  <TagLabel fontSize="18px">Automate team management</TagLabel>
                </Tag>
                <Text w="80%" ml="15%">
                  Organize shifts, absences, and booking-related questions all
                  in one place.
                </Text>
              </GridItem>
              <GridItem>
                <Tag bg="transparent">
                  {" "}
                  <ImFire color="green" fontSize="24px" />{" "}
                  <TagLabel fontSize="18px">Avoid burnout</TagLabel>
                </Tag>
                <Text w="80%" ml="15%">
                  Take care of your team and eliminate overworking with break
                  reminders and private time.
                </Text>
              </GridItem>
            </Grid>
          </Grid>
        </GridItem>
        <GridItem>
          <Image src="https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp" />
        </GridItem>
      </Grid>

      {/* ====================================Next Item============================================= */}

      <Grid bgGradient='linear(to-b, RGBA(0, 0, 0, .1), white)' mt="60px">
        <GridItem>
          <Grid w="48%" m="40px auto" lineHeight={8}>
            <Heading as="h2" size="lg" lineHeight={10}>
              A universal platform for running anything from small businesses to
              large enterprises
            </Heading>
            <Text>
              From a powerful time tracker to project management, human resource
              planning, and running an office. Everything is fully customizable
              and can be turned on and off for the whole company or specific
              users.
            </Text>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid m="auto" templateColumns="1fr 1fr" alignItems="center">
            <GridItem>
              <Grid gap={10} textAlign="left" pl="150px">
                <GridItem>
                  <Tag bg="transparent">
                    {" "}
                    <AiFillClockCircle color="green" fontSize="24px" />{" "}
                    <TagLabel fontSize="18px">
                      No more manual time trackers
                    </TagLabel>
                  </Tag>
                  <Text w="80%" ml="6%">
                    No more manual time trackers Fully automatic start and end
                    times, no manual entry, and no human error – the automatic
                    time tracker starts up as soon as you open the computer and
                    stops when you close it.
                  </Text>
                </GridItem>{" "}
                <GridItem>
                  <Tag bg="transparent">
                    {" "}
                    <FaLayerGroup color="green" fontSize="24px" />{" "}
                    <TagLabel fontSize="18px">Oversee work progress</TagLabel>
                  </Tag>
                  <Text w="80%" ml="6%">
                    With URL and document title tracking it's easy to always be
                    informed about your team's overall progress and habits
                    during work hours.
                  </Text>
                </GridItem>{" "}
                <GridItem>
                  <Tag bg="transparent">
                    {" "}
                    <IoBuild color="green" fontSize="24px" />{" "}
                    <TagLabel fontSize="18px">Optimize your resources</TagLabel>
                  </Tag>
                  <Text w="80%" ml="6%">
                    Estimate project costs, assign hourly rates, issue invoices,
                    and control expenses. Project management is easy when you
                    have a birdseye view of all ongoing processes.
                  </Text>
                </GridItem>{" "}
                <GridItem>
                  <Tag bg="transparent">
                    {" "}
                    <HiBuildingOffice color="green" fontSize="24px" />{" "}
                    <TagLabel fontSize="18px">
                      Run your office smoothly
                    </TagLabel>
                  </Tag>
                  <Text w="80%" ml="6%">
                    DeskTime isn't just a time tracker. You can assign shifts
                    and oversee absences, stay informed about remote workers and
                    run a hybrid office all on one platform.
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <Image src="https://desktime.com/static/web/new-homepage/universal-platform/universal-platform.webp" />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid justifyContent="center" mt="30px" mb="30px" gap={25}>
            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <ImFire ml="-7px" mr="5px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel color="RGBA(0, 0, 0, .6)">
                  Automatic Time Tracking
                </TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Ofline Time Tracking</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Document Title tracking</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Privet time option</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Invoicing</TagLabel>
              </Tag>
            </Flex>

            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <ImFire ml="-7px" mr="5px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel color="RGBA(0, 0, 0, .6)">Pomodoro Timer</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Cost Calculation</TagLabel>
              </Tag>
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Team's contacts</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Costom report</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Absence Calender</TagLabel>
              </Tag>
            </Flex>

            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <ImFire ml="-7px" mr="5px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel color="RGBA(0, 0, 0, .6)">Web time tracker</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Third-party Integration</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Shift Sheduling</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Mobile App</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Url & App tracking</TagLabel>
              </Tag>
            </Flex>

            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <ImFire ml="-7px" mr="5px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel color="RGBA(0, 0, 0, .6)">Screeshots</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Project Tracking</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImFire ml="-7px" mr="5px" />
                <TagLabel>Booking</TagLabel>
              </Tag>
            </Flex>
            <Flex justifyContent="center" mt={30}> <Button colorScheme="gray.50" variant="outline" pl={50} pr={50}>
                SEE ALL FEATURES
              </Button></Flex>
            <Flex justifyContent="center">
              <Text>All the features can be turned on and off to suit eveyone's needs</Text>
            </Flex>
          </Grid>
        </GridItem>
      </Grid>

      {/* ===========================next Item===================================== */}


     
    </>
  );
}
