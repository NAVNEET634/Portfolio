import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Foxivision Screening Services Pvt Ltd",
    position: "Fullstack Developer",
    time: "September 2024 - Till Now",
    location: "Naraina Industrial Area Phase - 1",
    description:
      "As a Full Stack Developer, I bridge the gap between the technical aspects of an application and its business objectives. My role involves collaborating with cross-functional teams, including application management, engineers, designers, and stakeholders, to ensure the successful development, implementation, and improvement of technology solutions. I lead the execution of technical projects from start to finish, overseeing project requirements, timelines, and budgets. This includes defining requirements with engineering, operations, and product teams, and creating technical documentation, such as functional specifications, API docs, user guides, and release notes. Beyond project management, I evaluate emerging technologies, frameworks, and tools to assess their feasibility and impact, recommending technical enhancements and process improvements. I also serve as the primary contact for stakeholders, providing updates on project progress, risks, and mitigation strategies. To ensure continuous improvement, I monitor product performance, analyze user feedback, and track market trends. Working closely with the product team, I help prioritize enhancements, bug fixes, and optimizations to keep our solutions aligned with business needs. I ensure that all deliverables meet industry standards and regulations, maintaining high quality and compliance. I stay updated on industry trends, especially in applications and machine learning, conducting research to identify tools, frameworks, and best practices. This fosters a culture of continuous learning within the team. I contributed to application development based on the latest technologies and business requirements, utilizing my skills in technologies such as HTML, CSS, JavaScript, SQL, Python, Ruby, and Java, along with frameworks like React, Angular, and Ruby on Rails. I also demonstrated a strong ability to quickly learn and adapt to new technologies, ensuring that our projects remained innovative and efficient.",
    tech: [
      
      "React",
      "Node",
      "React Native",
      "Javascript",
      "PHP",
      "MongoDB",
      "MySQL",
      "CSS",
      "HTML",
      "Bootstrap",
      "Wordpress",
      "Zoho Creator"
    ],
  },
  {
    title: "Bioroles Automation Systems Pvt Ltd",
    position: "Software Developer",
    time: "December 2023 - September 2024",
    location: "Okhla Phase 1, New Delhi",
    description:
      "As a Software Developer, my role encompasses crafting responsive and user-friendly front-end interfaces using React.js, while designing and optimizing back-end systems with Node.js and Express.js to enhance application performance and scalability. I collaborate closely with cross-functional teams to gather requirements, design, and implement solutions that align with business needs and elevate the user experience. My technical expertise includes React.Js, Node.Js, HTML5, CSS3, JavaScript, Bootstrap, and MySQL, enabling me to deliver innovative features and functionalities. Specializing in platforms such as HRMS (Human Resource Management Systems) and VMS (Visitor Management Systems), I have been instrumental in developing systems that streamline HR processes and improve employee management. My work on HRMS includes designing modules for employee onboarding, attendance tracking, payroll processing, and performance management, ensuring seamless integration and user satisfaction. I excel in diagnosing and resolving complex software issues reported by both external clients and internal users. I meticulously document and track reported problems, ensuring their resolution through a structured ticketing system or support database. Additionally, I have created a CloudTA mobile app in React Native, available for both Android and iOS. I am dedicated to leveraging my skills to drive business success, continuously improving operational efficiency and the overall user experience.",
      tech: [
      
        "React",
        "Node",
        "React Native",
        "Javascript",
        "MySQL",
        "CSS",
        "HTML",
        "Bootstrap",
        "Wordpress",
      ],
  },
  {
    title: "Radical Minds Technologies Pvt Ltd",
    position: "Software Developer",
    time: "January 2023 - December 2023",
    location: "Udyog Vihar Phase 2, Gurugram",
    description:
      "As a Software Developer, my role encompassed addressing a spectrum of software issues across multiple platforms such as CRM, Dialer, QMS, Helpdesk Tool, and IMS. This involved not only software development but also database management. I specialized in crafting dynamic and cross-browser compatible pages utilizing HTML5, CSS3, and JavaScript (specifically React and Redux), while consistently delivering new features and functionalities. My responsibilities extended to diagnosing and troubleshooting software problems reported by both external customers and internal users. I meticulously documented and tracked reported issues, ensuring their resolution through a structured ticketing system or support database. Furthermore, I possess extensive proficiency in managing and maintaining the Vicidial Dialer System, a critical open-source call center software. My duties encompassed guaranteeing the stability and optimal performance of the system, which entailed system configuration, troubleshooting, and stringent security measures.",
      tech: [
      
        "React",
        "Node",
        "Javascript",
        "MySQL",
        "CSS",
        "HTML",
        "Bootstrap"
      ],
  },
  
  
];
