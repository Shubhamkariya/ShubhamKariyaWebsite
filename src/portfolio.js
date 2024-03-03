/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Twinkle Kariya",
  title: "Hi all, I'm Twinkle",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Android / Java / JavaScript / Reactjs / Ruby On Rails / AWS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11O8bvUeLv0T9y95AhjZ4-DQ-a_Wl-GMD/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TwinkleK21",
  linkedin: "https://www.linkedin.com/in/twinkle-kariya/",
  gmail: "kariyatwinkle2@gmail.com",
  facebook: "https://www.facebook.com/twinkle.kariya/",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY CLOUD ENGINEER/FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop full stack web/mobile applications with development of app inside different Cloud and in PlayStore"
    ),
    emoji("⚡ Create REST APIs integrated with different databases"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Azure / GCP and Cosmos DB"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
   
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-atlassian	"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Santa Clara University",
      logo: require("./assets/images/Santa_Clara.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - March 2021",
      desc: "Participated in the event and won 2nd prize in intercollege seminar competition",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Pune University, India",
      logo: require("./assets/images/university.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer,",
      company: "Amazon.com",
      companylogo: require("./assets/images/amazon.png"),
      date: "Oct 2021 – Present",
      descBullets: [
        "Designed and implemented Payment Recommendation project to reduce % of declined transactions due to Invalid Payment",
        "Designed and implemented email notification flows for Affirm integration within Amazon Pay, encompassing order completion, payment capture, order cancellation, and refund processes, ensuring precise communication with buyers and suppressing specific emails to prevent payment confusion",
        "Integrated AmazonPay seamlessly into Stripe's cPSP program, automating merchant enablement for Express Checkout, managing network card transactions via Stripe, and optimizing APM transactions through AmazonPay.",
      ],

    },
    {
      role: "Software Development Engineer",
      company: "A9.com, Inc,",
      companylogo: require("./assets/images/download (1).jpeg"),
      date: "May 2021 – Oct 2021",
      // desc: "Worked on various projects that required handling the client database which will help clients to store the data systematically with reduced fetching time. I also created the CITA account on the Linux OS. As a ServiceNow Developer for around 1 year, I have also designed different tools such as Agent Chat and Explicit Role, and Walkup Instance. ",
      // techStack: "TechStack: ReactJS, Angular JS, ServiceNow Application, PL/SQL, Linux"
      descBullets: [
        "Focused on machine learning and model enhancing using Spark, Map-reduce technology and Python",
        "Writing Jupyter notebooks and DJS jobs to create lightweight RODB, writing automation scripts in Java and python",
        "Implementing PySpark script to automate creation of EMR cluster and run pyspark job",
      ],
    },

    {
      role: "Software Engineer Intern,",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/hm.png"),
      date: "Jun 2020 – Dec 2020",
      // desc: "Worked on various projects that required handling the client database which will help clients to store the data systematically with reduced fetching time. I also created the CITA account on the Linux OS. As a ServiceNow Developer for around 1 year, I have also designed different tools such as Agent Chat and Explicit Role, and Walkup Instance. ",
      // techStack: "TechStack: ReactJS, Angular JS, ServiceNow Application, PL/SQL, Linux"
      descBullets: [
        "Designed and built a containerized Go HTTP application using Gin Framework, to be hosted on switches within two weeks.",
        "Systemized the request-response format, for the agent to interact with various switches and workstations.",
        "Increased the capability, ensured resiliency, handled failures, and timeouts smoothly, enabled logging mechanism.",
      ],
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/FamilyTracker.avif"),
      projectName: "Email notifications changes for integrating AmazonPay with Affirm ",
      projectDesc:" Implementing customized email notifications to streamline communication between AmazonPay and Affirm, optimizing order completion, payment capture, cancellation, and refund processes for buyers clarity.Technology Stack: HTML/CSS, JavaScript, Node.js, RESTful APIs, Affirm API, AmazonPay API, Email templating libraries."
      
      // footerLink: [
      //   {
      //     name: "View Code",
      //     url: "https://github.com/Shubhamkariya/FamilyTracker"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/ChatBot.avif"),
      projectName: " CV2 Customization for Amazon Pay Integration with Shopify",
      projectDesc: "Enhancing the checkout experience for Amazon Pay within Shopify by customizing the Change PI (Payment Instrument) flow,   Address Modification flow, and incorporating phone number inclusion in shipping addresses. Ensuring these feature enhancements are scalable and extensible to benefit various merchants and Service Providers (SPs). Technology Stack: JavaScript, React, Shopify API, AmazonPay API, HTML/CSS, GraphQL, RESTful APIs, Webhooks.",
      // footerLink: [
      //   {
      //     name: "Visit Code",
      //     url: "https://github.com/Shubhamkariya/ChatMate"
      //   }
      // ]
    },
    {
      image: require("./assets/images/HotelManagement.jpg"),
      projectName: "Yelp kind Database Design",
      projectDesc: "Built a JAVA application that runs queries on Yelp data and extracts useful information. Technology Stack: JDBC, Java, ER Data Model, JSON, Oracle Database, Netbeans IDE, XML, SQL query, Swing GUI Toolkit",
      // footerLink: [
      //   {
      //     name: "View Code",
      //     url: "https://github.com/Shubhamkariya/HotelManagement"
      //   }
      //   //  you can add extra buttons here.
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
   
    {
      title: "Azure Fundamental",
      subtitle:
        "Completed Certifcation of Azure Fundamental Associate",
      image: require("./assets/images/az900.png"),
      imageAlt: "Azure Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/e94fc1f4-7ac2-4c70-a85d-edb79dd6305d"
        }
      ]
    },
    {
      title: "Azure Developer Associate",
      subtitle: "Completed Certifcation of Azure Developer Associate",
      image: require("./assets/images/az204.png"),
      imageAlt: "Azure Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/9d979d1c-1bc4-4783-80f4-f92763a77305"
        }
      ]
    },
    {
      title: "ServiceNow : Customer Service Management	",
      subtitle:
        "Completed Certifcation of ServiceNow:Customer Service Management	",
      image: require("./assets/images/ServiceNowCSM.jpeg"),
      imageAlt: "ServiceNow Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/195rA0lgRvOTEhKz78xj7s0cgjaFoUm1D/view?usp=share_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (240) 660-6405",
  email_address: "kariyatwinkle2@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,

  contactInfo,
  twitterDetails,
  isHireable
};
