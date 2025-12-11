// Resume Data - Extracted from Ahmad_data_engineer_2025.pdf
// All information has been populated from your resume

export const personalInfo = {
  name: 'Ahmad Jamal Abuadas',
  title: 'AI/ML | Data Engineer | Big Data | Data Science | IOT',
  email: 'ahmadabuadas2013@gmail.com',
  phone: '(850) 449-9890',
  location: 'Jacksonville, FL 32256',
  summary: 'Experienced Data Engineer and Data Scientist with 14 years of overall experience in software engineering, specializing in financial data systems. Expert in building and supporting Anti-Money Laundering (AML) systems on cloud platforms, leveraging AI technologies, machine learning tools, and data science methodologies to enhance compliance and risk management. Proficient in Python, SQL, PySpark, and cloud technologies including AWS, Snowflake, and Databricks. Specialized in designing scalable data architectures, implementing AI-powered analytics, and developing automated compliance solutions for financial institutions.',
  profileImage: '/images/profile.jpg', // Add your profile image to public/images/profile.jpg
  resumePdf: '/Ahmad_data_engineer_2025.pdf',
}

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/yourprofile', // Update with your LinkedIn
  github: 'https://github.com/yourusername', // Update with your GitHub
  twitter: '', // Update or remove if not applicable
}

export const experience = [
  {
    title: 'Vice President [Private] (Digital S/W Eng Lead Analyst)',
    company: 'Citi Group',
    logo: '/images/citi.png',
    period: 'SEP 2022 - Present',
    location: 'FL',
    description: 'Effectively harnessed cutting-edge Big Data tools and technologies, including Hadoop Distributed File System (HDFS), Apache Spark, Apache Hive, and Hue. Processing and analyzing large-scale financial data efficiently. Collaborating with cross-functional teams to understand project requirements and formulate data engineering strategies.',
    achievements: [
      'Built Generative AI Solutions using LangChain, OpenAI, and ML Frameworks - Developed intelligent AI agents and LLM-powered workflows for real-world automation tasks',
      'End-to-End Data Platform Migration from Hive to Snowflake - Designed and executed large-scale cloud data migration strategy including schema conversion, data pipeline refactoring, and performance optimization',
      'Engineered Advanced Solutions on Snowflake with Task Automation, Data Quality, and Unit Testing - Implemented Snowflake-native automation using Tasks, Streams, and Procedures',
      'Built AI-Powered Agents with LangChain and OpenAI for Data and Business Automation - Created domain-specific autonomous agents capable of task planning and decision-making',
      'Created and optimized PySpark logic for complex data transformations, significantly improving efficiency and accuracy in reconciliation processes',
      'Utilized automation tools such as Autosys, Jenkins, and RLM for scheduling and orchestrating data jobs, resulting in improved job reliability and minimized downtime',
      'Successfully integrated Continuous Delivery/Continuous Integration (CDCI) practices into the automation framework',
      'Used PySpark and Scala for data analytics on Spark cluster, converting Hive/SQL queries into Spark transformations',
      'Responsible for estimating cluster size, monitoring and troubleshooting Spark jobs on Cloudera CDP',
      'Experience with Snowflake cloud data warehouse and AWS S3 bucket for integrating data from multiple source systems',
      'Used Apache Airflow to manage system workflows',
      'Developed shell scripts and optimized them to run many jobs in UNIX',
      'Created data models for data ingestion, identifying appropriate file formats and proper column data types',
    ],
    technologies: ['Hadoop', 'HDFS', 'Apache Spark', 'Apache Hive', 'Hue', 'PySpark', 'Scala', 'Snowflake', 'AWS S3', 'Autosys', 'Jenkins', 'RLM', 'Airflow', 'LangChain', 'OpenAI', 'ML', 'LLM', 'dbt', 'SQL', 'Cloudera CDP'],
  },
  {
    title: 'IT/OT Data Engineer',
    company: 'Kelvin INC',
    logo: '/images/Kelvin.png',
    period: 'March 2022 – SEP 2022',
    location: 'CA',
    description: 'Demonstrated expertise in setting up AWS EC2 within the Kelvin platform. Designed bridges to connect with devices for data transmission using Python, developed POV UI integrated with the Kelvin platform using Python (Streamlit), and collaborated with the product team to create Kelvin Maps.',
    achievements: [
      'Set up AWS EC2, S3, IAM within the Kelvin platform for test environment',
      'Designed bridges to connect with devices in sending data to the Kelvin platform using Python',
      'Developed POV UI integrated with the Kelvin platform using Python (Streamlit)',
      'Working with the product team to develop Kelvin Maps',
      'Set up control system OPC configuration to extract data and connected it to OPC Bridge/MQTT Bridge for integration into the Kelvin platform',
      'Developed job workflows in Oozie for automating the tasks of loading data into HDFS',
      'Created pipeline and config for MongoDB database and modeled collections for web applications',
      'Used Airflow to schedule and monitor jobs',
      'Designed and implemented test environment on AWS',
      'Developed scripts in Python (Pandas, NumPy, Streamlit) for data ingestion, analyzing, and data cleaning',
    ],
    technologies: ['AWS EC2', 'AWS S3', 'IAM', 'Python', 'Streamlit', 'OPC', 'MQTT', 'MongoDB', 'Airflow', 'Oozie', 'HDFS', 'Pandas', 'NumPy', 'Snowflake'],
  },
  {
    title: 'Software Data Engineer',
    company: 'Johnson & Johnson Vision Health Care',
    logo: '/images/JNJ.png',
    period: 'APR 2019 – APR 2022',
    location: 'FL',
    description: 'Developed data-driven applications using Python, conducted SQL query writing, and utilized R studio to extract processes and visualize data. Established practices for ongoing enhancement and maintenance of the Snowflake Data Warehouse. Implemented solutions and designed real-time data software such as EDHR, RMT, and YAS.',
    achievements: [
      'Engineered real-time data-driven applications using PLC code, DeviseWise, and Oracle database for EDHR (Electronic Device History Record) and RMT (Raw Material Tracking) systems',
      'Pioneered the development of the Yield Analyses System (YAS), a real-time data-driven application extracting data from vision system using Python and advanced ML and Text mining algorithms',
      'Developed an advanced Alarm and Event Tracking System, a real-time data-driven application extracting data from SQL database using Python',
      'Created ETL jobs to load and manage data from logs, systems, ODBC into Mongo and Postgres databases as backend for web applications',
      'Extracted data from diverse devices and orchestrated ingestion into Hadoop HDFS, leveraging PySpark for large-scale data processing and ML model development',
      'Implemented workflow automation using Apache Airflow, ensuring seamless execution of data pipelines and ML workflows',
      'Worked with Google Cloud Platform (GCP) nodes to deploy and manage scalable cloud infrastructure',
      'Implemented streamlined ETL processes, integrating data seamlessly into Snowflake from various sources',
      'Used Talend for data integration and management',
      'Developed automation Rockwell PLC software for 5th generation of contact lenses including SCADA HMI software',
      'Developed logical & physical data model using data warehouse methodologies, including Star schema',
      'Designed and implemented AWS test using Redshift as end data warehouse',
      'Built reports using Tableau, RShiny, Streamlit, SSRS, Excel',
    ],
    technologies: ['Python', 'SQL', 'R', 'RStudio', 'Snowflake', 'PLC', 'DeviseWise', 'Oracle', 'MongoDB', 'PostgreSQL', 'Hadoop', 'HDFS', 'PySpark', 'Scala', 'Airflow', 'GCP', 'Talend', 'Alteryx', 'Tableau', 'RShiny', 'Streamlit', 'SSRS', 'ML', 'Text Mining'],
  },
  {
    title: 'Software Data Engineer',
    company: 'Fibertex Non-Woven',
    logo: '/images/fibertex.png',
    period: 'Aug 2016 – Oct 2018',
    location: 'IL',
    description: 'Development of a Spare Part Management system, utilizing SQL database, Ruby on Rails, and JavaScript. Demonstrated hands-on expertise in managing PLC controllers from AB, Siemens, and components like Simatic step7, Total Integrated Automation (TIA), RS Logix 5000.',
    achievements: [
      'Spearheaded the development of a sophisticated Spare Part Management system using SQL database, Ruby on Rails, and JavaScript',
      'Applied in-depth knowledge in maintaining and troubleshooting Control systems, overseeing PLC controllers from AB, Siemens',
      'Demonstrated proficiency in utilizing Rockwell automation software, including Studio5000, FactoryTalk, HMI client, Diagnostics Viewer',
      'Played a pivotal role in fortifying safety systems by implementing IQ for safety PLCs and designing user-friendly HMI interface',
      'Engineered a Spare Part Management System utilizing Ruby on Rails and JavaScript',
      'Employed PLC coding and HMI applications to securely store sensitive data',
    ],
    technologies: ['SQL', 'Ruby on Rails', 'JavaScript', 'PLC', 'Siemens', 'Simatic step7', 'TIA', 'RS Logix 5000', 'Studio5000', 'FactoryTalk', 'HMI', 'Python', 'R'],
  },
  {
    title: 'Junior Engineer',
    company: 'Public Works and Housing',
    logo: '/images/pwhm.png',
    period: 'Feb 2012 – March 2016',
    location: 'Jordan',
    description: 'Comprehensive evaluation of technical specifications for the ministry\'s software systems. Collaborated closely with contractors to design and implement the Truck Weighing Scale System, overseeing both hardware installation and rigorous software testing.',
    achievements: [
      'Tested the technical specification of the ministry software systems',
      'Worked with contractors to design and implement the Truck Weighing Scale System, including hardware installation and software testing',
      'Validated schematic designs working alongside hardware engineers',
      'Studied technical offers provided by contractors and suppliers in obtaining referral procedures for tenders',
    ],
    technologies: ['Software Testing', 'Hardware Installation', 'System Design'],
  },
]

export const education = [
  {
    degree: 'Master\'s in Information Technology',
    institution: 'Walden University',
    logo: '/images/walden.png',
    period: 'Completed',
    location: 'USA',
    description: 'Comprehensive graduate program covering Data Architecture, Big Data technologies, Cloud computing, and Data Governance. This academic journey provided advanced theoretical knowledge and best practices that complement extensive hands-on experience in enterprise data solutions.',
    achievements: ['Data Architecture', 'Big Data', 'Cloud Computing', 'Data Governance'],
    gpa: '',
  },
  {
    degree: 'Bachelor\'s in Mechatronics Engineering',
    institution: 'Al Balqa University',
    logo: '/images/balqa.png',
    period: 'Completed',
    location: 'Jordan',
    description: 'Completed degree in Mechatronics Engineering with specialization in AI/IOT and Control Systems. This foundation provided comprehensive knowledge in computer science, programming, IoT systems, embedded systems, and software development.',
    achievements: ['Specialized in AI/IOT', 'Specialized in Control Systems'],
    gpa: '',
  },
]

export const skills = {
  programming: [
    { name: 'Python', level: 95, icon: 'SiPython' },
    { name: 'R', level: 90, icon: 'SiR' },
    { name: 'SQL', level: 95, icon: 'FaDatabase' },
    { name: 'Java', level: 85, icon: 'SiJava' },
    { name: 'JavaScript', level: 80, icon: 'SiJavascript' },
    { name: 'Scala', level: 85, icon: 'SiScala' },
    { name: 'Ruby', level: 75, icon: 'SiRuby' },
    { name: 'C#', level: 70, icon: 'SiCsharp' },
  ],
  bigData: [
    { name: 'Hadoop', level: 95, icon: 'SiApache' },
    { name: 'HDFS', level: 95, icon: 'SiApache' },
    { name: 'Apache Spark', level: 95, icon: 'SiApachespark' },
    { name: 'PySpark', level: 95, icon: 'SiApachespark' },
    { name: 'Hive', level: 90, icon: 'SiApache' },
    { name: 'HBase', level: 85, icon: 'SiApache' },
    { name: 'Kafka', level: 90, icon: 'SiApachekafka' },
    { name: 'Snowflake', level: 95, icon: 'SiSnowflake' },
    { name: 'Databricks', level: 90, icon: 'SiDatabricks' },
  ],
  cloud: [
    { name: 'AWS', level: 95, icon: 'SiAmazonaws' },
    { name: 'S3', level: 95, icon: 'SiAmazonaws' },
    { name: 'EC2', level: 90, icon: 'SiAmazonaws' },
    { name: 'Redshift', level: 90, icon: 'SiAmazonaws' },
    { name: 'EMR', level: 85, icon: 'SiAmazonaws' },
    { name: 'GCP', level: 80, icon: 'SiGooglecloud' },
    { name: 'Docker', level: 85, icon: 'SiDocker' },
    { name: 'Kubernetes', level: 80, icon: 'SiKubernetes' },
  ],
  tools: [
    { name: 'Apache Airflow', level: 95, icon: 'SiApacheairflow' },
    { name: 'Jenkins', level: 90, icon: 'SiJenkins' },
    { name: 'Git', level: 90, icon: 'SiGit' },
    { name: 'PostgreSQL', level: 90, icon: 'SiPostgresql' },
    { name: 'MongoDB', level: 90, icon: 'SiMongodb' },
    { name: 'Oracle', level: 85, icon: 'SiOracle' },
    { name: 'MySQL', level: 85, icon: 'SiMysql' },
    { name: 'Tableau', level: 90, icon: 'SiTableau' },
    { name: 'Streamlit', level: 95, icon: 'SiStreamlit' },
    { name: 'RShiny', level: 85, icon: 'SiR' },
    { name: 'Machine Learning', level: 90, icon: 'FaBrain' },
    { name: 'LangChain', level: 85, icon: 'FaBrain' },
    { name: 'OpenAI', level: 85, icon: 'FaBrain' },
  ],
}

export const projects = [
  {
    title: 'End-to-End Data Platform Migration from Hive to Snowflake',
    description: 'Designed and executed a large-scale cloud data migration strategy including schema conversion, data pipeline refactoring, performance optimization, and validation. Migrated entire data platform from Hive to Snowflake.',
    technologies: ['Snowflake', 'Hive', 'SQL', 'Python', 'dbt', 'AWS'],
    github: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    highlights: [
      'Large-scale cloud data migration',
      'Schema conversion and data pipeline refactoring',
      'Performance optimization and validation',
    ],
  },
  {
    title: 'Generative AI Solutions with LangChain and OpenAI',
    description: 'Built intelligent AI agents and LLM-powered workflows for real-world automation tasks. Integrated with vector databases and orchestrated via LangChain. Created domain-specific autonomous agents capable of task planning and decision-making.',
    technologies: ['LangChain', 'OpenAI', 'LLM', 'Python', 'ML', 'Vector Databases', 'RAG'],
    github: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    highlights: [
      'AI agents and LLM-powered workflows',
      'Integration with vector databases',
      'Autonomous agents for task planning',
    ],
  },
  {
    title: 'Real-time Data-Driven Applications (EDHR, RMT, YAS)',
    description: 'Engineered real-time data-driven applications using PLC code, DeviseWise, and Oracle database. Developed EDHR (Electronic Device History Record), RMT (Raw Material Tracking), and YAS (Yield Analyses System) systems.',
    technologies: ['PLC', 'DeviseWise', 'Oracle', 'Python', 'Java', 'ML', 'Text Mining'],
    github: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    highlights: [
      'Real-time data processing',
      'PLC integration and automation',
      'ML and Text mining algorithms',
    ],
  },
  {
    title: 'Big Data Analytics Platform with PySpark',
    description: 'Extracted data from diverse devices and orchestrated ingestion into Hadoop HDFS. Leveraged PySpark for large-scale data processing, cleaning, and ML model development, predicting defects and reject numbers. Implemented workflow automation using Apache Airflow.',
    technologies: ['PySpark', 'Hadoop', 'HDFS', 'Scala', 'Airflow', 'ML', 'GCP'],
    github: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    highlights: [
      'Large-scale data processing with PySpark',
      'ML model development for defect prediction',
      'Workflow automation with Airflow',
    ],
  },
  {
    title: 'Spare Part Management System',
    description: 'Developed a sophisticated Spare Part Management system using SQL database, Ruby on Rails, and JavaScript, ensuring seamless maintenance and troubleshooting of Control systems.',
    technologies: ['Ruby on Rails', 'JavaScript', 'SQL', 'PLC'],
    github: '',
    demo: '',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    highlights: [
      'Full-stack web application',
      'Control system integration',
      'Maintenance and troubleshooting tools',
    ],
  },
]

export const certifications = [
  // Add your certifications here when available
  // Example format:
  // {
  //   name: 'AWS Certified Solutions Architect',
  //   issuer: 'Amazon Web Services',
  //   date: '2023',
  //   credentialId: 'AWS-XXXX-XXXX',
  //   link: 'https://aws.amazon.com/certification/',
  // },
]

export const achievements = [
  'Over a decade of experience in software engineering, with 7 years specializing in Data and Big Data Engineering',
  'Successfully migrated entire data platform from Hive to Snowflake at Citi Group',
  'Built AI-powered agents with LangChain and OpenAI for data and business automation',
  'Engineered multiple real-time data-driven applications (EDHR, RMT, YAS) for Johnson & Johnson',
  'Developed advanced PySpark solutions for complex data transformations and reconciliation processes',
  'Implemented Continuous Delivery/Continuous Integration (CDCI) practices into automation frameworks',
  'Created and optimized data pipelines processing large-scale financial data efficiently',
  'Specialized in Big Data ecosystem: Ingestion, Modeling, Storage Analysis, Integration, and Data Processing',
]
