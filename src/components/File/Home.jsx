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
import { ImFire, ImClock, ImMobile } from "react-icons/im";
import { BiTask } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { AiFillClockCircle, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import { HiBuildingOffice, HiDocument,HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SlGlobe, SlCalculator } from "react-icons/sl";
import { TbFileInvoice, TbReport, TbBrandBooking } from "react-icons/tb";
import { GiPumpkinMask, GiSupersonicArrow } from "react-icons/gi";
import { BsCalendarDate, BsCalendar3,BsFillBellFill } from "react-icons/bs";
import { RiTimerFlashLine, RiMapPin5Line } from "react-icons/ri";
import { GoProject, GoScreenFull, GoGraph } from "react-icons/go";

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

      <Grid bgGradient="linear(to-b, RGBA(0, 0, 0, .1), white)" mt="60px">
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
                <ImClock ml="-7px" mr="8px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel color="RGBA(0, 0, 0, .6)" ml={2}>
                  Automatic Time Tracking
                </TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <SlGlobe ml="-7px" mr="5px" />
                <TagLabel ml={2}>Ofline Time Tracking</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <HiDocument ml="-7px" mr="5px" />
                <TagLabel ml={2}>Document Title tracking</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <AiOutlineEyeInvisible ml="-7px" mr="5px" />
                <TagLabel ml={2}>Privet time option</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <TbFileInvoice ml="-7px" mr="5px" />
                <TagLabel ml={2}>Invoicing</TagLabel>
              </Tag>
            </Flex>

            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <GiPumpkinMask ml="-7px" mr="5px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel ml={2} color="RGBA(0, 0, 0, .6)">
                  Pomodoro Timer
                </TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <SlCalculator ml="-7px" mr="5px" />
                <TagLabel ml={2}>Cost Calculation</TagLabel>
              </Tag>
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <BsCalendarDate ml="-7px" mr="5px" />
                <TagLabel ml={2}>Team's contacts</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <TbReport ml="-7px" mr="5px" />
                <TagLabel ml={2}>Custom report</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <BsCalendar3 ml="-7px" mr="5px" />
                <TagLabel ml={2}>Absence Calender</TagLabel>
              </Tag>
            </Flex>

            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <RiTimerFlashLine
                  ml="-7px"
                  mr="5px"
                  color="RGBA(0, 0, 0, .6)"
                />
                <TagLabel ml={2} color="RGBA(0, 0, 0, .6)">
                  Web time tracker
                </TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <GrIntegration ml="-7px" mr="5px" />
                <TagLabel ml={2}>Third-party Integration</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <GiSupersonicArrow ml="-7px" mr="5px" />
                <TagLabel ml={2}>Shift Sheduling</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <ImMobile ml="-7px" mr="5px" />
                <TagLabel ml={2}>Mobile App</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <RiMapPin5Line ml="-7px" mr="5px" />
                <TagLabel ml={2}>Url & App tracking</TagLabel>
              </Tag>
            </Flex>

            <Flex gap="8px" justifyContent="center">
              <Tag size="lg" bg="RGBA(0, 0, 0, .1)">
                <GoScreenFull ml="-7px" mr="5px" color="RGBA(0, 0, 0, .6)" />
                <TagLabel ml={2} color="RGBA(0, 0, 0, .6)">
                  Screeshots
                </TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <GoProject ml="-7px" mr="5px" />
                <TagLabel ml={2}>Project Tracking</TagLabel>
              </Tag>

              <Tag size="lg" bg="RGBA(0, 0, 0, .1)" color="RGBA(0, 0, 0, .6)">
                <TbBrandBooking ml="-7px" mr="5px" />
                <TagLabel ml={2}>Booking</TagLabel>
              </Tag>
            </Flex>
            <Flex justifyContent="center" mt={30}>
              {" "}
              <Button colorScheme="gray.50" variant="outline" pl={50} pr={50}>
                SEE ALL FEATURES
              </Button>
            </Flex>
            <Flex justifyContent="center">
              <Text>
                All the features can be turned on and off to suit eveyone's
                needs
              </Text>
            </Flex>
          </Grid>
        </GridItem>
      </Grid>

      {/* ===========================next Item===================================== */}

      <Grid templateColumns="1fr 1fr" pl={100} pr={100} alignItems="center" bgGradient="linear(to-b, RGBA(0, 0, 0, .1), white)" pt="60px">
        <GridItem>
          <Image src="https://desktime.com/static/web/new-homepage/seamless-workflow/seamless-workflow.webp" />
        </GridItem>
        <GridItem>
          <Heading textAlign="left">
            A seamless workflow and healthy work-life balance for every employee
          </Heading>
          <Grid gap={4} mt={4} textAlign="left" lineHeight={8}>
            <GridItem>
              <Tag bg="transparent">
                {" "}
                <BsCalendar3 color="green" fontSize="24px" />{" "}
                <TagLabel fontSize="18px" ml={2}>
                  Flexible schedule
                </TagLabel>
              </Tag>
              <Text w="80%" ml="6%">
                Time tracking is proof-of-work and DeskTime's time tracker gives
                you just that – you can plan your schedule independently, while
                your manager can simply follow your progress no matter where you
                are and when you choose to work.
              </Text>
            </GridItem>

            <GridItem>
              <Tag bg="transparent">
                {" "}
                <BsFillBellFill color="green" fontSize="24px" />{" "}
                <TagLabel fontSize="18px" ml={2}>
                  Regular break reminders
                </TagLabel>
              </Tag>
              <Text w="80%" ml="6%">
                Our time tracker uses the Pomodoro timer that will keep a
                cautious eye on your workload and remind you to take regular
                breaks so you don't lose focus all the while maintaining healthy
                habits and mental well-being.
              </Text>
            </GridItem>

            <GridItem>
              <Tag bg="transparent">
                {" "}
                <CgProfile color="green" fontSize="24px" />{" "}
                <TagLabel fontSize="18px" ml={2}>
                  Private time
                </TagLabel>
              </Tag>
              <Text w="80%" ml="6%">
                DeskTime's Private time feature disables the website and time
                tracker for when you have to take care of non-work-related tasks
                during office hours. Employees can feel safe knowing their
                privacy is protected.
              </Text>
            </GridItem>

            <GridItem>
              <Tag bg="transparent">
                {" "}
                <HiOutlineClipboardDocumentList color="green" fontSize="24px" />{" "}
                <TagLabel fontSize="18px" ml={2}>
                  No more unbilled hours
                </TagLabel>
              </Tag>
              <Text w="80%" ml="6%">
                Employee time is pure gold when it comes to resource planning.
                DeskTime's time tracker even lets you add time spent offline
                like in meetings, brainstorms, or on work calls so no billable
                hours go unnoticed.
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

      {/* ===========================next Item===================================== */}
    </>
  );
}
