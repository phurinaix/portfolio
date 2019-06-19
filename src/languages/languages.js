const languages = {
    th: {
        navigation: {
            home: "หน้าหลัก",
            about: "เกี่ยวกับ",
            skills: "ทักษะ",
            portfolio: "ผลงาน",
            contact: "ติดต่อ"
        },
        home: {
            name: "ภูริณัฐ เผือกขำ",
            portfolio: "เว็บพอร์ตโฟลิโอ",
            contact: "ติดต่อฉัน"
        },
        about: {
            topic: "เกี่ยวกับฉัน"
        },
        skills: {
            topic: "ทักษะ ความสามารถ"
        },
        portfolio: {
            topic: {
                project1: "ด้านซอฟต์แวร์",
                project2: "ด้านการออกแบบ",
                project3: "ด้านบล็อกเช็น"
            },
            moreDetail: 'ดูข้อมูลเพิ่มเติม',
            detailTopic: {
                aboutProject: 'เกี่ยวกับโปรเจค',
                technologies: 'เทคโนโลยีที่ใช้'
            },
            projectList: {
                software: [
                    {
                        id: "1",
                        topic: "Portfolio",
                        technologies: ["React.js", "Redux", "Javascript ES6", "Sass"],
                        link: "phurinaix.github.io",
                        github: "github.com/phurinaix/profile",
                        description: "เว็บไซต์พอร์ตโฟลิโอ",
                        detail: "เว็บไซต์นี้สร้างขึ้นมาเพื่อนำเสนอผลงานที่ผมได้ทำ รวมถึงแนะนำข้อมูลเกี่ยวกับตัวผมเอง"
                    },
                    {
                        id: "2",
                        topic: "Room Secret Chat",
                        technologies: ["Node.js", "Express", "Socket.io", "HTML5", "CSS3", "Javascript"],
                        link: "room-secret-chat.herokuapp.com",
                        github: "github.com/phurinaix/Room-Secret-Chat",
                        description: "เว็บไซต์สำหรับแชท",
                        detail: "เว็บไซต์นี้สร้างขึ้นมาเพื่อการสื่อสารภายกับคนอื่นหลายๆคน และมีความปลอดภัยสูง เนื่องจากข้อความมีการเข้ารหัสทุกครั้ง"
                    },
                    {
                        id: "3",
                        topic: "Thammasat University Website",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phurinaix/university-website",
                        description: "เว็บไซต์คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
                        detail: ""
                    },
                    {
                        id: "4",
                        topic: "The Million Years Stone Park",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/peterparkers/transportation-and-parking",
                        description: "เว็บไซต์แนะนำสถานที่ท่องเที่ยวอุทยานหินล้านปี",
                        detail: ""
                    },
                    {
                        id: "5",
                        topic: "Dev Me Please",
                        technologies: ["Java", "Socket", "MySQL"],
                        link: "",
                        github: "github.com/phurinaix/devMePlease-java",
                        description: "โปรแกรมจัดการไฟล์",
                        detail: ""
                    },
                    {
                        id: "6",
                        topic: "Folder Locked",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phpinproject/piyaproject",
                        description: "เว็บไซต์บริการเก็บไฟล์",
                        detail: ""
                    },
                    {
                        id: "7",
                        topic: "Pattaya Food",
                        technologies: ["HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phurinaix/pattaya-food",
                        description: "เว็บไซต์แนะนำร้านอาหารบริเวณมหาวิทยาลัยธรรมศาสตร์ ศูนย์พัทยา",
                        detail: "This one is the first project that I was created (11 October 2016)."
                    },
                    {
                        id: "8",
                        topic: "Cube trainer",
                        technologies: ["Swift"],
                        link: "",
                        github: "github.com/phurinaix/Cubetrainer",
                        description: "แอพพลิเคชั่นสอนเล่นรูบิค",
                        detail: ""
                    }
                ],
                design: [
                    {
                        id: "1",
                        topic: "Thammasat University Poster",
                        description: "Thammasat University Pattaya Campus poster"
                    },
                    {
                        id: "2",
                        topic: "Thammasat University Poster",
                        description: "Thammasat University Pattaya Campus poster"
                    },
                    {
                        id: "3",
                        topic: "Advertisement Poster",
                        description: "The poster for advertise a genius pen"
                    },
                    {
                        id: "4",
                        topic: "Debating Poster",
                        description: "The poster for debating activity"
                    }
                ],
                blockchain: [
                    {
                        id: "1",
                        topic: "ระบบการเผยแพร่ที่มีความน่าเชื่อถือและความปลอดภัยสำหรับประกาศนียบัตรและใบแสดงผลการศึกษา",
                        description: "โปรเจคจบ",
                        detail: {
                            aboutProjectTopic: "เกี่ยวกับโปรเจค",
                            objectivesTopic: "วัตถุประสงค์",
                            significanceTopic: "ความสำคัญของการวิจัย",
                            currentSystemTopic: "ระบบในปัจจุบัน",
                            proposedSystemTopic: "ระบบที่นำเสนอ",
                            systemWorkflowTopic: "การทำงานของระบบ",
                            applicationTopic: "แอพพลิเคชั่น",
                            aboutProject: `สำหรับนักศึกษาที่กำลังจะจบการศึกษานั้น การสมัครงานในบริษัทคือเป้าหมายต่อไป และในการสมัครงานนั้น 
                                        นักศึกษาทุกคนก็จะเป็นที่จะต้องใช้ใบรับรองผลการศึกษาจากมหาวิทยาลัยที่ตนเองได้เรียนประกอบกับใบสมัครงานของบริษัทเพื่อยืนยันว่าตัวนักศึกษา
                                        ได้จบจากมหาวิทยาลัยนั้นจริงๆ สำหรับการขอใบรับรองจากมหาวิทยาลัยของนักศึกษานั้น ทางมหาวิทยาลัยจำเป็นจะต้องตรวจสอบเอกสารของนักศึกษา
                                        ซึ่งใช้เวลาค่อนข้างมาก ทางผู้จัดทำเล็งเห็นถึงปัญหาในส่วนนี้ที่นักศึกษาต้องรอให้ทางมหาวิทยาลัยใช้เวลาตรวจสอบใบรับรองผลการศึกษา 
                                        จึงได้พัฒนาระบบที่สามารถช่วยให้นักศึกษารอเวลาในการตรวจสอบน้อยลง และเพิ่มความปลอดภัยเพื่อป้องกันการปลอมแปลงใบรับรองผลการศึกษาและประกาศนียบัตร`,
                            objectives: `วัตถุประสงค์ของการศึกษาในครั้งนี้เพื่อพัฒนาคุณภาพการบริการและความปลอดภัยของระบบนั่นคือสำนักงานทะเบียนที่จัดการเกี่ยวกับใบรับรองผลการศึกษาและประกาศนียบัตร
                                        ของมหาวิทยาลัยธรรมศาสตร์ และยังช่วยหลีกเลี่ยงการปลอมแปลงใบรับรองผลการศึกษาและประกาศนียบัตร`,
                            significance: `สำหรับมหาวิทยาลัยที่ให้สำเนาใบรับรองผลการศึกษาและประกาศนียบัตรซึ่งถือได้ว่าเป็นงานบริการที่สำคัญ 
                                        การที่จะจัดการกับเอกสารเหล่านี้จำเป็นต้องมีการทำงาน การจัดการที่รวดเร็วและมีความปลอดภัยสูงเป็นเรื่องสำคัญต่อทุกมหาวิทยาลัย 
                                        เพื่อป้องกันปัญหาการปลอมแปลงใบรับรองผลการศึกษาหรือประกาศนียบัตรที่ออกโดยมหาวิทยาลัย ซึ่งปัญหานี้เป็นปัญหาที่ส่งผลกระทบต่อ
                                        ทั้งมหาวิทยาลัยและบริษัทหรือองค์กรผู้ว่าจ้าง ดังนั้นการค้นหาแนวทางเพื่อเพิ่มความปลอดภัยนั้นจึงเป็นเป้าหมายที่สำคัญต่อมหาวิทยาลัย`,
                            currentSystem: `ระบบในปัจจุบันนั้นช้า ไม่มีประสิทธิภาพและขั้นตอนหลายๆอย่างยังใช้คนในการจัดการ`,
                            proposedSystem: `ระบบนี้เป็นโปรแกรมที่ช่วยให้การรับรองใบแสดงผลการศึกษาของนักศึกษานั้นมีประสิทธิภาพ รวดเร็ว และมีความปลอดภัยมากขึ้น 
                                        ทำให้ลดระยะเวลาและขั้นตอนของการตรวจสอบใบแสดงผลการศึกษาของมหาวิทยาลัย`,
                            systemWorkflow: ["ขั้นตอนเพิ่มมหาวิทยาลัย", "ขั้นตอนส่งคำร้องขอใบรับรองผลการศึกษา", "ขั้นตอนการสร้างใบรับรองผลการศึกษา", "ขั้นตอนการนำใบรับรองผลการศึกษาลงสู่ระบบ Blockchain", "ขั้นตอนการตรวจสอบใบรับรองผลการศึกษา"],
                            application: `จะเป็นการยากหากระบบไม่มีส่วนติดต่อประสานงานกับผู้ใช้ ดังนั้นผู้พัฒนาจึงได้พัฒนาส่วนของเว็บแอพพลิเคชั่นและได้ใช้งานไลบรารี่ภายนอก`
                        }
                    }
                ]
            }
        },
        contact: {
            topic: "ติดต่อ",
            description: "ถ้าคุณมีข้อสงสัย สามารถติดต่อได้ที่อีเมลล์ phurinaix@gmail.com หรือสอบถามโดยใช้ฟอร์มด้านล่างนี้ ...",
            form: {
                name: "ชื่อ",
                email: "อีเมล",
                subject: "หัวข้อ",
                message: "ข้อความ",
                submit: "ส่ง"
            }
        }
    },
    en: {
        navigation: {
            home: "HOME",
            about: "ABOUT",
            skills: "SKILLS",
            portfolio: "PORTFOLIO",
            contact: "CONTACT"
        },
        home: {
            name: "PHURINAT PUEKKHAM",
            portfolio: "PORTFOLIO",
            contact: "CONTACT ME"
        },
        about: {
            topic: "ABOUT ME"
        },
        skills: {
            topic: "SKILLS"
        },
        portfolio: {
            topic: {
                project1: "SOFTWARE PROJECT",
                project2: "DESIGN PROJECT",
                project3: "BLOCKCHAIN PROJECT"
            },
            moreDetail: 'MORE DETAIL',
            detailTopic: {
                aboutProject: 'About this project',
                technologies: 'Technologies'
            },
            projectList: {
                software: [
                    {
                        id: "1",
                        topic: "Portfolio",
                        technologies: ["React.js", "Redux", "Javascript ES6", "Sass"],
                        link: "phurinaix.github.io",
                        github: "github.com/phurinaix/profile",
                        description: "Portfolio website",
                        detail: "The idea behind this project was to create a showcase of everything I've worked on and display the information about me"
                    },
                    {
                        id: "2",
                        topic: "Room Secret Chat",
                        technologies: ["Node.js", "Express", "Socket.io", "HTML5", "CSS3", "Javascript"],
                        link: "room-secret-chat.herokuapp.com",
                        github: "github.com/phurinaix/Room-Secret-Chat",
                        description: "Web chat application",
                        detail: "Web appliation for communicate with each other"
                    },
                    {
                        id: "3",
                        topic: "Thammasat University Website",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phurinaix/university-website",
                        description: "Thammasat University website",
                        detail: ""
                    },
                    {
                        id: "4",
                        topic: "The Million Years Stone Park",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/peterparkers/transportation-and-parking",
                        description: "The Million Years Stone Park",
                        detail: ""
                    },
                    {
                        id: "5",
                        topic: "Dev Me Please",
                        technologies: ["Java", "Socket", "MySQL"],
                        link: "",
                        github: "github.com/phurinaix/devMePlease-java",
                        description: "Java desktop application",
                        detail: ""
                    },
                    {
                        id: "6",
                        topic: "Folder Locked",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phpinproject/piyaproject",
                        description: "Website for keep files",
                        detail: ""
                    },
                    {
                        id: "7",
                        topic: "Pattaya Food",
                        technologies: ["HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phurinaix/pattaya-food",
                        description: "Pattaya Food Restaurant & Bar",
                        detail: "This one is the first project that I was created (11 October 2016)."
                    },
                    {
                        id: "8",
                        topic: "Cube trainer",
                        technologies: ["Swift"],
                        link: "",
                        github: "github.com/phurinaix/Cubetrainer",
                        description: "Mobile application for IOS",
                        detail: ""
                    }
                ],
                design: [
                    {
                        id: "1",
                        topic: "Thammasat University Poster",
                        description: "Thammasat University Pattaya Campus poster"
                    },
                    {
                        id: "2",
                        topic: "Thammasat University Poster",
                        description: "Thammasat University Pattaya Campus poster"
                    },
                    {
                        id: "3",
                        topic: "Advertisement Poster",
                        description: "The poster for advertise a genius pen"
                    },
                    {
                        id: "4",
                        topic: "Debating Poster",
                        description: "The poster for debating activity"
                    }
                ],
                blockchain: [
                    {
                        id: "1",
                        topic: "A secure and trusted publishing systems for university diplomas and transcripts",
                        description: "Graduation project",
                        detail: {
                            aboutProjectTopic: "About this project",
                            objectivesTopic: "Objectives",
                            significanceTopic: "Significance of the research",
                            currentSystemTopic: "The current system",
                            proposedSystemTopic: "Proposed system overview",
                            systemWorkflowTopic: "System workflow",
                            applicationTopic: "Application",
                            aboutProject: `Students who are going to graduate, apply for jobs in a large number of companies 
                                        for jobs, All students must provide academic transcripts from the university they have 
                                        studied for the job application.The company confirms that the student has actually graduated 
                                        from the university. Confirming the authenticity of the documents diploma and transcripts 
                                        is a manual and slow process. So the students have to wait the result of this slow process.
                                        Moreover this process is also costly and inefficient.The proposed system can help students 
                                        and employers a fast and secure way of exchanging academic credentials.It avoids forgery and 
                                        brings trust to the process.`,
                            objectives: `The objective of this study is to improve the service quality and security of the system i.e., 
                                        the registrar’s office that handles the transcript and diploma in the Thammasat university. 
                                        It will also avoid transcript and diploma fraud.Moreover, it delivers the student credentials 
                                        to employers in a fast and efficient manner.`,
                            significance: `For any university providing copies of diplomas and transcripts is a major service. 
                                        Providing these document in a fast manner and securely are a vital requirement for any school. 
                                        Moreover, preventing transcript fraud and diploma fraud are also an important requirement. 
                                        Transcript fraud is the alteration of a transcript issued by a legitimate school or university or the 
                                        forgery of completely fake transcripts. Transcript fraud is a growing problem for both educational 
                                        institutions and employers. Providing a secure solution is a worthy objective for the universities.`,
                            currentSystem: `The current system is slow, inefficient and based on manual control of various steps.`,
                            proposedSystem: `This System is a program that helps to certify student transcripts that are efficient, fast 
                                        and more secure. It reduce the time and procedure of checking the academic transcript of the 
                                        university by an employer or a third party.`,
                            systemWorkflow: ["Add issuer step", "Request credentials step", "Create credentials step", "Issue credentials step", "Verification step"],
                            application: `It will be difficult without an interface to interact with user. So the developer created 
                                        an interface to interact with user and use third-party application.`
                        }
                    }
                ]
            }
        },
        contact: {
            topic: "CONTACT",
            description: "If you have any question, please contact me at phurinaix@gmail.com or contact using form below...",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                submit: "Submit"
            }
        }
    }
}

export default languages;