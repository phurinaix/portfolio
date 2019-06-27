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
            name: "PHURINAT PUEKKHAM",
            portfolio: "PORTFOLIO",
            contact: "ติดต่อ"
        },
        about: {
            topic: "เกี่ยวกับผม",
            name: 'สวัสดีผมชื่อ ภูริณัฐ เผือกขำ',
            detail: `ผมกำลังศึกษาอยู่ชั้นปีที่ 4 คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยธรรมศาสตร์
                    ผมชอบศึกษาและเรียนรู้การเขียนโปรแกรมคอมพิวเตอร์ เนื่องจากช่วยฝึกตรรกะและการคิด โดยด้านที่ผมสนใจเป็นพิเศษคือ 
                    Web Development งานอดิเรกจึงเป็นการเขียนโปรแกรมคอมพิวเตอร์ ส่วนงานอดิเรกอื่นๆนั้นก็มี เล่นหมากรุกสากล 
                    อ่านหนังสือ เล่นเกมส์ เป็นต้น`,
            resume: 'ดู Resume'
        },
        skills: {
            topic: "ทักษะ ความสามารถ"
        },
        portfolio: {
            topic: {
                project1: {
                    topic: "ด้านซอฟต์แวร์",
                    description: "เว็บแอพพลิเคชั่น",
                },
                project2: {
                    topic: "ด้านการออกแบบ",
                    description: "โปสเตอร์",
                },
                project3: {
                    topic: "ด้านบล็อกเชน",
                    description: "บิตคอยและอีเธอเรียม",
                }
            },
            viewDetail: 'ดูรายละเอียด',
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
                        technologies: ["React.js", "Redux", "Javascript ES6", "Sass", "Node.js", "Heroku"],
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
                        detail: `เว็บไซต์นี้สร้างขึ้นมาเพื่อติดต่อสื่อสาร มีฟังก์ชั่นหลักๆคือ สามารถสร้างห้องสนทนาได้ ซึ่งทุกครั้ง
                                ที่สร้างห้องก็จะต้องใส่รหัสผ่านกับชื่อห้องด้วย และสามารถเชิญชวนบุคคลอื่นเข้ามาในห้องสนทนาได้ด้วย`
                    },
                    {
                        id: "3",
                        topic: "Typing Game",
                        technologies: ["Node.js", "Express", "Handlebar.js", "CSS3", "NES.css", "MySQL", "Javascript"],
                        link: "typing-games.herokuapp.com",
                        github: "github.com/phurinaix/typing-game",
                        description: "เว็บไซต์เกมส์ฝึกพิมพ์",
                        detail: `เป็นเว็บไซต์สำหรับผู้ใช้ที่ต้องการวัดระดับความเร็วในการพิมพ์ ผู้ใช้สามารถฝึกพิมพ์ได้ และยังสามารถสร้างบทความได้ด้วย`
                    },
                    {
                        id: "4",
                        topic: "Thammasat University Website",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phurinaix/university-website",
                        description: "เว็บไซต์คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์",
                        detail: `เว็บไซต์คณะวิศวกรรมศาสตร์ ที่แสดงข้อมูลเกี่ยวกับมหาวิทยาลัยธรรมศาสตร์ ศูนย์พัทยา โดยประกอบด้วยส่วนของหน้า
                                แอดมินและส่วนหน้าสำหรับผู้ใช้งานทั่วไป โดยส่วนหน้าแอดมินนั้น สามารถเพิ่มข้อมูลข่าวสาร กิจกรรม บุคลกร หลักสูตร ความเป็นอยู่
                                ภายในมหาวิทยาลัยได้`
                    },
                    {
                        id: "5",
                        topic: "The Million Years Stone Park",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/peterparkers/transportation-and-parking",
                        description: "เว็บไซต์แนะนำสถานที่ท่องเที่ยวอุทยานหินล้านปี",
                        detail: `เว็บไซต์ที่แนะนำการเดินทางไปยังอุทยานหินล้านปี ทั้งทางรถตู้ รถไฟ และรถบัส และมีฟังก์ชั่นสำหรับจองสถานที่จอดรถภายใน
                                อุทยานด้วย ซึ่งเมื่อทำการจองเสร็จเรียบร้อยแล้วจะได้ QR Code เพื่อนำไปยืนยันเมื่อถึงสถานที่แล้ว`
                    },
                    {
                        id: "6",
                        topic: "Dev Me Please",
                        technologies: ["Java", "Socket", "MySQL"],
                        link: "",
                        github: "github.com/phurinaix/devMePlease-java",
                        description: "โปรแกรมจัดการไฟล์",
                        detail: `เป็นโปรแกรมแก้ไขไฟล์จากเครื่อง Client สามารถแก้ไข ลบ ดาวน์โหลด และส่งไปยังเครื่อง server ได้`
                    },
                    {
                        id: "7",
                        topic: "Folder Locked",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phpinproject/piyaproject",
                        description: "เว็บไซต์บริการเก็บไฟล์",
                        detail: "เป็นเว็บไซต์สำหรับเก็บไฟล์รูปภาพ สามารถแชร์รูปภาพได้"
                    },
                    {
                        id: "8",
                        topic: "Pattaya Food",
                        technologies: ["HTML5", "CSS3"],
                        link: "",
                        github: "github.com/phurinaix/pattaya-food",
                        description: "เว็บไซต์แนะนำร้านอาหารบริเวณมหาวิทยาลัยธรรมศาสตร์ ศูนย์พัทยา",
                        detail: `เป็นโปรเจคแรกที่ผมได้ทำเมื่อตอนปี 2016 โดยเป็นเว็บไซต์แนะนำเมนูและร้านอาหารบริเวณมหาวิทยาลัยธรรมศาสตร์
                                ศูนย์พัทยา`
                    },
                    {
                        id: "9",
                        topic: "Cube trainer",
                        technologies: ["Swift"],
                        link: "",
                        github: "github.com/phurinaix/Cubetrainer",
                        description: "แอพพลิเคชั่นสอนเล่นรูบิค",
                        detail: `เป็นแอพพลิเคชั่นสำหรับระบบปฏิบัติการ iOS โดยมีฟังก์ชั่นหลักๆคือ อธิบายวิธีการเล่นรูบิค จับเวลาการเล่นรูบิค เก็บสถิติเวลาการเล่น 
                                และอธิบายสัญลักษณ์ต่างๆของรูบิค`
                    }
                ],
                design: [
                    {
                        id: "1",
                        topic: "Thammasat University Poster",
                        description: "โปสเตอร์มหาวิทยาลัยธรรมศาสตร์ ศูนย์พัทยา"
                    },
                    {
                        id: "2",
                        topic: "Thammasat University Poster",
                        description: "โปสเตอร์มหาวิทยาลัยธรรมศาสตร์ ศูนย์พัทยา"
                    },
                    {
                        id: "3",
                        topic: "Advertisement Poster",
                        description: "โปสเตอร์โฆษณาสินค้าปากกาอัจฉริยะ"
                    },
                    {
                        id: "4",
                        topic: "Debating Poster",
                        description: "โปสเตอร์ชุมนุมปาฐกถาและโต้วาที"
                    }
                ],
                blockchain: [
                    {
                        id: "1",
                        topic: "ระบบการเผยแพร่ที่มีความน่าเชื่อถือและความปลอดภัยสำหรับประกาศนียบัตรและใบแสดงผลการศึกษา",
                        description: "โปรเจคบล็อกเชน",
                        detail: {
                            aboutProjectTopic: "เกี่ยวกับโปรเจค",
                            objectivesTopic: "วัตถุประสงค์",
                            significanceTopic: "ความสำคัญของการวิจัย",
                            currentSystemTopic: "ระบบในปัจจุบัน",
                            proposedSystemTopic: "ระบบที่นำเสนอ",
                            systemWorkflowTopic: "การทำงานของระบบ",
                            applicationTopic: "แอพพลิเคชั่น",
                            resourcesTopic: "แหล่งข้อมูล",
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
            description: "ถ้าคุณมีข้อสงสัย สามารถติดต่อได้ที่อีเมล phurinaix@gmail.com หรือสอบถามโดยใช้ฟอร์มด้านล่างนี้ ...",
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
            contact: "Contact"
        },
        about: {
            topic: "ABOUT ME",
            name: 'Hello, my name is Phurinat Puekkham.',
            detail: `I am a fourth-year student, Faculty of engineering, Software engineering, Thammasat University.
                I like learning to program because it helps to practice logic and thinking. The special aspect that 
                I'm interested in is Web development. My hobby is coding, play chess, play computer games and read a book.`,
            resume: 'See Resume'
        },
        skills: {
            topic: "SKILLS"
        },
        portfolio: {
            topic: {
                project1: {
                    topic: "SOFTWARE PROJECT",
                    description: "Web Application",
                },
                project2: {
                    topic: "DESIGN PROJECT",
                    description: "Poster Design",
                },
                project3: {
                    topic: "BLOCKCHAIN PROJECT",
                    description: "Bitcoin and Ethereum",
                }
            },
            viewDetail: 'View details',
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
                        technologies: ["React.js", "Redux", "Javascript ES6", "Sass", "Node.js", "Heroku"],
                        link: "phurinaix.github.io",
                        github: "github.com/phurinaix/profile",
                        description: "Portfolio website",
                        detail: "The idea behind this project was to create a showcase of everything I've worked on and display the information about me."
                    },
                    {
                        id: "2",
                        topic: "Room Secret Chat",
                        technologies: ["Node.js", "Express", "Socket.io", "HTML5", "CSS3", "Javascript"],
                        link: "room-secret-chat.herokuapp.com",
                        github: "github.com/phurinaix/Room-Secret-Chat",
                        description: "Web chat application",
                        detail: "Web application to communicate with each other. You can create a chat room and invite friends to the room."
                    },
                    {
                        id: "3",
                        topic: "Typing Game",
                        technologies: ["Node.js", "Express", "Handlebar.js", "CSS3", "NES.css", "MySQL", "Javascript"],
                        link: "typing-games.herokuapp.com",
                        github: "github.com/phurinaix/typing-game",
                        description: "Website for practice typing",
                        detail: `Website for practice your typing skill. The user can also create articles.`
                    },
                    {
                        id: "4",
                        topic: "Thammasat University Website",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phurinaix/university-website",
                        description: `Thammasat University website`,
                        detail: `Thammasat University website includes the admin page and user page. For the admin page the main function is 
                                added, edit, delete news, activities, staff and other content.`
                    },
                    {
                        id: "5",
                        topic: "The Million Years Stone Park",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/peterparkers/transportation-and-parking",
                        description: "The Million Years Stone Park",
                        detail: `This website introduces the million years stone park in Pattaya. The user can also book parking.`
                    },
                    {
                        id: "6",
                        topic: "Dev Me Please",
                        technologies: ["Java", "Socket", "MySQL"],
                        link: "",
                        github: "github.com/phurinaix/devMePlease-java",
                        description: "Java desktop application",
                        detail: `The client can upload the file, edit it and send the file to the server.`
                    },
                    {
                        id: "7",
                        topic: "Folder Locked",
                        technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Javascript"],
                        link: "",
                        github: "github.com/phpinproject/piyaproject",
                        description: "Website for keep files",
                        detail: `Website to keep the images from the user. Users can share the images with the other.`
                    },
                    {
                        id: "8",
                        topic: "Pattaya Food",
                        technologies: ["HTML5", "CSS3"],
                        link: "",
                        github: "github.com/phurinaix/pattaya-food",
                        description: "Pattaya Food Restaurant & Bar",
                        detail: `This one is the first project that I was created (11 October 2016). It contains 
                                the information of the restaurant near the Thammasat university Pattaya campus.`
                    },
                    {
                        id: "9",
                        topic: "Cube trainer",
                        technologies: ["Swift"],
                        link: "",
                        github: "github.com/phurinaix/Cubetrainer",
                        description: "Mobile application for iOS",
                        detail: `The user can train to play Rubik's cube with timer and the user can also read the Rubik's cube 
                                information in this application.`
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
                        topic: "A secure and trusted publishing system for university diplomas and transcripts",
                        description: "Blockchain project",
                        detail: {
                            aboutProjectTopic: "About this project",
                            objectivesTopic: "Objectives",
                            significanceTopic: "Significance of the research",
                            currentSystemTopic: "The current system",
                            proposedSystemTopic: "Proposed system overview",
                            systemWorkflowTopic: "System workflow",
                            applicationTopic: "Application",
                            resourcesTopic: "Resources",
                            aboutProject: `Students who are going to graduate, apply for jobs in a large number of companies. 
                                        All students must provide academic transcripts from the university they have studied for the job application. 
                                        The company confirms that the student has actually graduated from the university. 
                                        Confirming the authenticity of the documents, diploma and transcripts is a manual and slow process. 
                                        So the students have to wait for the result of this slow process. Moreover, 
                                        this process is also costly and inefficient. The proposed system can help students and employers a fast and secure 
                                        way of exchanging academic credentials. It avoids forgery and brings trust to the process.`,
                            objectives: `The objective of this study is to improve the service quality and security of the registrar’s office that handles 
                                        the transcript and diploma at Thammasat University. It will also avoid transcript and diploma fraud. Moreover, 
                                        it delivers student credentials to employers in a fast and efficient manner.`,
                            significance: `For any university providing copies of diplomas and transcripts is a major service. 
                                        Providing these document in a fast manner and securely are a vital requirement for any school. 
                                        Moreover, preventing transcript fraud and diploma fraud are also an important requirement. 
                                        Transcript fraud is the alteration of a transcript issued by a legitimate school or university or the 
                                        forgery of completely fake transcripts. Transcript fraud is a growing problem for both educational institutions 
                                        and employers. Providing a secure solution is a worthy objective for universities.`,
                            currentSystem: `It is the current system. It is slow, inefficient and based on manual control of various steps.`,
                            proposedSystem: `This System is an application that helps to certify student transcripts. 
                                        It is efficient, fast and more secure. It reduces the time and procedure of checking the academic transcript of 
                                        the university by an employer or a third party.`,
                            systemWorkflow: ["Add issuer step", "Request credentials step", "Create credentials step", "Issue credentials step", "Verification step"],
                            application: `It will be difficult without an interface to interact with the system by a user. 
                                        So we created an interface to interact with the users and we use third-party applications.`
                        }
                    }
                ]
            }
        },
        contact: {
            topic: "CONTACT",
            description: "If you have any questions, please contact me at phurinaix@gmail.com or contact me using the form below...",
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