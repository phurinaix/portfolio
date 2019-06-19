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
            name: "ยินดีต้อนรับสู่ ภูริณัฐ เผือกขำ",
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
            aboutProject: 'เกี่ยวกับโปรเจค',
            technologies: 'เทคโนโลยีที่ใช้',
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
                        topic: "A secure and trusted publishing systems for university diplomas and transcripts",
                        description: "Graduation project"
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
            aboutProject: 'About this project',
            technologies: 'Technologies',
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
                        description: "Graduation project"
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