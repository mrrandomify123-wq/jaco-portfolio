// ============================================================
// SITE CONFIG
// ============================================================
export const siteConfig = {
  name: 'Jaco Yang',
  location: 'Melbourne, Victoria',
  tagline: 'Designer with a background in Architecture',
  intro:
    'With over 3 years of commercial and residential architecture experience, I bring a unique perspective to digital design. I create solutions that meet user needs and align with business goals.',
  email: 'yangjaco@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jacoyang/',
  resume:
    'https://drive.google.com/file/d/11EmCelKIfI70AO4KtItCcUaSWpss2eJL/view?usp=sharing',
};

// ============================================================
// UX / PRODUCT DESIGN PROJECTS
// ============================================================
export const uxProjects = [
  {
    id: 'starlight',
    title: "Starlight Children's Foundation",
    date: 'Feb 2024',
    tags: ['UX Research', 'UI Design', 'Hi-Fi Prototyping'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664e993893294483cbfb9c28_Frame%20792.png',
    href: '/work/starlight',
    featured: true,
  },
  {
    id: 'big-issue',
    title: 'The Big Issue',
    date: 'Jun 2024',
    tags: ['Hi-Fi Prototyping', 'UI Design', 'UX Research'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/668e3b2efc57d1c673cb3a6c_Frame%2021118.png',
    href: '/work/big-issue',
    featured: true,
  },
  {
    id: 'peoples-first',
    title: 'People First Bank',
    date: 'Apr 2024',
    tags: ['Data Analysis', 'UX Research'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c1e8352be1664d3337432_Frame%2024.png',
    href: '/work/peoples-first',
    featured: true,
  },
];

// ============================================================
// ARCHITECTURE PROJECTS
// ============================================================
export const architectureProjects = [
  {
    id: 'pca-refurb',
    title: 'Porsche Australia Office Refurbishment',
    date: 'Completed 2023',
    tags: ['Concept Design', 'Construction Documentation'],
    image: '/images/architecture/pca-refurb/img-01.jpg',
    href: '/work/pca-refurb',
  },
  {
    id: 'pca-adelaide',
    title: 'Porsche Center Adelaide and BMW Medindie',
    date: 'Completed 2024',
    tags: ['Concept Design', 'Construction Documentation'],
    image: '/images/architecture/pca-adelaide/img-01.jpg',
    href: '/work/pca-adelaide',
  },
  {
    id: 'pc-melbourne',
    title: 'Porsche Center Melbourne',
    date: 'Under construction',
    tags: ['Concept Design'],
    image: '/images/architecture/pc-melbourne/img-01.jpg',
    href: '/work/pc-melbourne',
  },
  {
    id: 'kia',
    title: 'Adrian Brian Kia Medindie',
    date: 'Completed 2023',
    tags: ['Concept Design', 'Construction Documentation'],
    image: '/images/architecture/kia/exterior.jpg',
    href: '/work/kia',
  },
  {
    id: 'williams',
    title: 'Williams Residence',
    date: 'Completed 2022',
    tags: ['Concept Design', 'Construction Documentation'],
    image: '/images/architecture/williams/exterior.jpg',
    href: '/work/williams',
  },
  {
    id: 'truck-storage',
    title: 'Truck and Storage Complex',
    date: 'Under construction',
    tags: ['Concept Design', 'Construction Documentation'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c30454d0e8083c081c6dd_Nuriootpa%20Traders%20Site%20Render.jpg',
    href: '/work/truck-storage',
  },
];

// ============================================================
// SIDE PROJECTS (apps in development)
// ============================================================
export const sideProjects = [
  {
    id: 'peckish',
    name: 'Peckish',
    tagline: 'Discover restaurants from your saved reels',
    description:
      'Peckish scrapes shared Instagram Reels and TikToks to automatically extract restaurant data, building your personal dining wishlist without any manual effort. Save, sort, and explore.',
    tags: ['iOS', 'React Native', 'Food & Dining'],
    status: 'Coming Soon',
  },
  {
    id: 'arch-buddy',
    name: 'Registration Buddy',
    tagline: 'Your architectural registration companion',
    description:
      'Log your experience hours, prep for AACA competency interviews, and test your knowledge with built-in flashcard quizzes. Everything you need for architectural registration in one place.',
    tags: ['iOS', 'Architecture', 'Career Tools'],
    status: 'Coming Soon',
  },
  {
    id: 'flashstacks',
    name: 'FlashStacks',
    tagline: 'Smarter flashcards for language and beyond',
    description:
      'Spaced repetition flashcards built for language learning and any subject that benefits from active recall. Beautiful, minimal, and surprisingly effective.',
    tags: ['iOS', 'Learning', 'Language'],
    status: 'Coming Soon',
  },
];

// ============================================================
// PROJECT CASE STUDIES (detail pages)
// ============================================================
export const caseStudies = {
  starlight: {
    title: "Starlight Children's Foundation",
    category: 'UX / Product Design',
    date: 'February 2024',
    tags: ['UX Research', 'UI Design', 'Hi-Fi Prototyping'],
    heroImage: '/images/starlight/hero.png',
    overview:
      "Starlight Children's Foundation is an Australian charity that provides support to seriously ill children and their families through various programs and services. They aim to bring joy, comfort, and relief to children facing medical challenges by granting wishes, organising enrichment events, and providing resources to improve their quality of life. The project brief outlined a need for UX design recommendations to improve the conversion of website visitors to monthly and one-off donors.",
    role: 'UX Designer',
    timeline: '10 weeks',
    tools: 'Figma, Miro',
    type: 'Bootcamp Project',
    problem: {
      title: 'The Problem',
      body: [
        "Large numbers of potential donors fell off at various touchpoints of the online donation experience. Following stakeholder interviews with Starlight's National Digital Marketing Manager, Direct Marketing Executive, and Digital Marketing Lead, we uncovered that the existing donation process was cumbersome and put off many potential one-time donors.",
        "Our analysis also showed that a substantial number of users accessed Starlight's website via mobile devices, yet the current mobile experience was suboptimal. Navigation was often confusing, load times were slow, and key information was difficult to find. These issues led to high dropout rates among mobile users.",
      ],
      insight: "Potential donors were more likely to contribute when they understood the specific impact of their donation. The current experience lacked compelling narratives that illustrated how different amounts could make a difference.",
    },
    process: [
      {
        num: '01',
        title: 'Discovery and Stakeholder Interviews',
        description: 'Conducted stakeholder interviews with Starlight coordinators and ran a contextual review of the existing donation experience. Mapped pain points across the full donor journey.',
        image: '/images/starlight/research-1.jpg',
      },
      {
        num: '02',
        title: 'User Research and Persona',
        description: 'Synthesised interview findings into a user persona and consolidated journey map. Six key research insights emerged covering shared values, transparency, design credibility, impact clarity, navigation confidence, and data visualisation.',
        image: '/images/starlight/persona.jpg',
      },
      {
        num: '03',
        title: 'Ideation with SCAMPER',
        description: 'Used the SCAMPER method to systematically evaluate the current website experience and identify what worked and what needed to change. Developed initial sketches incorporating all research findings.',
        image: '/images/starlight/research-2.jpg',
      },
      {
        num: '04',
        title: 'Wireframes and User Testing',
        description: 'Developed wireframes for a minimalist homepage design that invited users to scroll and explore. Tested with 7 participants. Positive feedback: credible organisation, digestible information. Areas improved: donation descriptions, payment frequency options.',
        image: '/images/starlight/wireframes.png',
      },
    ],
    processNote: 'We followed a Human Centered Design (HCD) methodology throughout, returning to users at each stage to validate assumptions before progressing.',
    designImages: [
      { src: '/images/starlight/journey-map.png', caption: 'Journey map: consolidated from stakeholder and user interviews' },
      {
        src: '/images/starlight/prototype.png',
        caption: 'Hi-fi prototype: full interactive mobile experience',
        link: 'https://www.figma.com/proto/lEtsIdnSO4sZcHOynEYsGA/Starlight-Project-File?page-id=209%3A2386&type=design&node-id=209-2461&viewport=4305%2C270%2C0.35&t=1qsDuzJ5xSM03ff1-1&scaling=scale-down&starting-point-node-id=209%3A2461&mode=design',
      },
    ],
    finalImage: null,
    features: [
      {
        num: 'Key Feature 01',
        title: 'Inviting users to scroll and learn more.',
        body: "We designed the mobile website with visually appealing elements and interactive features that invited users to scroll and learn more about Starlight. By incorporating captivating imagery, compelling storytelling, and clear calls-to-action, we created a seamless narrative that guided users through Starlight's mission and impact.",
        image: '/images/starlight/final-deck-3.png',
        imageAlt: 'Starlight final design — full presentation overview',
        link: 'https://www.figma.com/proto/lEtsIdnSO4sZcHOynEYsGA/Starlight-Project-File?page-id=209%3A2386&type=design&node-id=209-2461&viewport=4305%2C270%2C0.35&t=1qsDuzJ5xSM03ff1-1&scaling=scale-down&starting-point-node-id=209%3A2461&mode=design',
        linkLabel: 'View Prototype',
      },
      {
        num: 'Key Feature 02',
        title: 'A more user friendly donation experience.',
        body: 'We streamlined the donation experience by minimising the number of steps required, providing clear instructions, and offering multiple payment options. By implementing intuitive form designs and ensuring that each element was easy to navigate, we reduced friction points that typically deter users from completing their donations. Progress indicators and confirmation messages kept users informed throughout the process.',
        image: '/images/starlight/final-2.png',
        imageAlt: 'Starlight donation flow redesign',
      },
      {
        num: 'Key Feature 03',
        title: 'Playful and engaging design.',
        body: "We focused on creating a playful design system that maintained the Starlight aesthetic while clearly communicating system status through interactions. By integrating dynamic and engaging visual elements, we ensured that the design was both fun and functional. Interactive feedback such as animations and visual cues provided users with real-time responses to their actions.",
        image: '/images/starlight/prototype-animation.gif',
        imageAlt: 'Starlight animated interactions and design system',
      },
    ],
    designSystem: {
      label: 'Design System',
      heading: 'A playful system built for clarity and accessibility.',
      subtext: 'Every component was designed to align with the Starlight brand while maintaining accessibility standards and mobile-first usability.',
      items: [
        {
          image: '/images/starlight/ds-textfields.png',
          title: 'Form Components',
          body: 'Accessible input fields and form elements designed for ease of use across all device sizes.',
        },
        {
          image: '/images/starlight/ds-frame-1.jpg',
          title: 'Visual Language',
          body: 'Typography, colour, and spacing decisions grounded in the Starlight brand palette and accessibility guidelines.',
        },
        {
          image: '/images/starlight/ds-frame-2.jpg',
          title: 'UI Patterns',
          body: 'Reusable UI patterns and interaction states that maintain consistency across the entire donation flow.',
        },
      ],
    },
    testimonials: [
      {
        quote: "I really liked your donation process and how streamlined it was. I also appreciated your language, especially the 'I want to give' statement. I thought it was a powerful yet simple statement to have on a donation form.",
        author: 'Vanessa Rodrigues',
        role: 'Digital Marketing Lead, Starlight Children\'s Foundation',
      },
      {
        quote: "I loved the rocket ship on the thank you page — it's something that has actually been floated a couple of times. I was very impressed to see it. It's very Starlighty and it really makes an impact on the thank you page.",
        author: 'Maddison Guthridge',
        role: "Direct Marketing Executive, Starlight Children's Foundation",
      },
      {
        quote: "I love the customer journey summary as well. The payment summary really packs a punch and is very engaging. I also love how you've made a clear call to action to make this donation monthly.",
        author: 'Onur Ekinci',
        role: 'Mentor & CEO of CalcTree',
      },
    ],
    projectLinks: [
      {
        label: 'View Prototype',
        href: 'https://www.figma.com/proto/lEtsIdnSO4sZcHOynEYsGA/Starlight-Project-File?page-id=209%3A2386&type=design&node-id=209-2461&viewport=4305%2C270%2C0.35&t=1qsDuzJ5xSM03ff1-1&scaling=scale-down&starting-point-node-id=209%3A2461&mode=design',
        icon: 'figma',
      },
      {
        label: 'Final Presentation',
        href: 'https://drive.google.com/file/d/1jP9g2Q8S_fcv1eR17Rv9WOcXu4MLerqV/view?usp=sharing',
        icon: 'doc',
      },
    ],
    outcome: {
      title: 'Outcome',
      body: "The redesigned mobile experience was presented to Starlight stakeholders at the end of the engagement. Usability testing with 7 participants showed a significant reduction in task completion time for key donation workflows. The impact dashboard resonated strongly: multiple participants said seeing their donation translated into 'wishes granted' made them feel more connected to the organisation's mission. Stakeholder feedback validated the streamlined donation process and the use of emotionally resonant language throughout.",
    },
    reflection: "This project taught me that the emotional context of a product matters as much as its functional requirements. We weren't just designing a donation form. We were designing a moment of connection between a donor and a child in hospital. Getting that emotional register right required listening more carefully than I had in any previous project. I also learned how much business goals and user goals overlap when the design is right: a better donor experience directly translates to more completed donations.",
    next: { id: 'big-issue', title: 'The Big Issue' },
  },

  'big-issue': {
    title: 'The Big Issue',
    category: 'UX / Product Design',
    date: 'June 2024',
    tags: ['Hi-Fi Prototyping', 'UI Design', 'UX Research'],
    heroImage: '/images/big-issue/final-2.png',
    overview:
      "The Big Issue is a not-for-profit organisation dedicated to providing opportunities for people experiencing homelessness, marginalisation, and disadvantage. The brief asked for a teacher portal that made it easy for teachers to organise and manage excursions to The Big Issue Classroom, whilst providing clear and accessible information and giving staff the tools to streamline customer requests.",
    role: 'UX Designer',
    timeline: '12 weeks',
    tools: 'Figma, Miro, FigJam',
    type: 'Bootcamp Project',
    problem: {
      title: 'The Problem',
      body: [
        "Teachers organising The Big Issue Classroom excursions have limited time to manage the process. From prior research by Harness student Debbie Yee, we learned that 'teachers are chronically time-poor due to the multifaceted challenges and pain points of their profession.' Without a centralised platform, coordinators managed vendor schedules and teacher-student placements through spreadsheets and phone calls.",
        "The challenge was to design a system that worked equally well for two very different user groups: admin coordinators managing logistics, and teachers tracking student progress and resources. The portal needed to accommodate all types of teachers regardless of technological literacy.",
      ],
      insight: "Two user groups with different mental models, different levels of digital literacy, and very different stakes. One wrong booking affects someone's income and a teacher's entire excursion.",
    },
    process: [
      {
        num: '01',
        title: 'Research and Stakeholder Interviews',
        description: 'Interviewed The Big Issue Manager of Education Enterprises and Program Coordinator. Three key insights emerged: the primary goals are customer retention and time savings; the portal must accommodate all levels of technological literacy; and the experience must be engaging enough to encourage rebooking.',
        image: '/images/big-issue/sketches.png',
      },
      {
        num: '02',
        title: 'User Flows',
        description: "Mapped separate task flows for admin and teacher user types. Identified divergence points where the same data needed to look and behave differently for each audience. Identifying 'jobs to be done' helped prioritise features that would provide the most value.",
        image: '/images/big-issue/flow-admin.png',
      },
      {
        num: '03',
        title: 'Wireframes',
        description: 'Focused on a clean, intuitive interface that would be easy for teachers to navigate. Key elements included: Dashboard Overview, Booking Calendar, Resource Library, Communication Tools, and a FAQ page. Validated with stakeholders before moving to high fidelity.',
        image: '/images/big-issue/wireframes.png',
      },
      {
        num: '04',
        title: 'User Testing',
        description: '5 user tests conducted across varying levels of technological literacy. Positive: easy navigation, clean aesthetic, clear resource organisation. Improvements made: added an onboarding tour for new users and a colour-coded booking status system based on feedback.',
        image: '/images/big-issue/dashboard.png',
      },
    ],
    processNote: 'The dual-interface challenge required constantly asking: is this the same problem, or two different problems that share data? Getting that distinction right shaped every design decision.',
    designImages: [
      { src: '/images/big-issue/flow-teacher.png', caption: 'Teacher user flow: from login through to excursion management' },
      {
        src: '/images/big-issue/prototype-teacher.png',
        caption: 'Hi-fi prototype: teacher dashboard and booking view',
        link: 'https://www.figma.com/proto/yNVHfgwhz7mSOy9I4ynAH4/The-Big-Issue-Project-File?node-id=334-29284&viewport=1168%2C511%2C0.06&t=mboqaqkaI9VGR6o2-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=334%3A29284&show-proto-sidebar=1',
      },
      {
        src: '/images/big-issue/prototype-admin.png',
        caption: 'Hi-fi prototype: admin coordinator interface',
        link: 'https://www.figma.com/proto/yNVHfgwhz7mSOy9I4ynAH4/The-Big-Issue-Project-File?node-id=473-31255&viewport=1168%2C511%2C0.06&t=mboqaqkaI9VGR6o2-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=473%3A31255&show-proto-sidebar=1',
      },
    ],
    finalImage: null,
    userTesting: {
      heading: 'We asked users to find out more information about a booking and to locate a document.',
      body: 'I conducted 5 different user tests to get feedback on the portal design. Although our participants were not teachers, they provided us with a range of different levels of technological literacy that applies to our range of target users.',
      positive: [
        {
          title: 'Easy to Use Navigation',
          body: 'Participants found the navigation straightforward and intuitive, allowing them to move seamlessly through the portal without confusion.',
        },
        {
          title: 'Clean and Minimalistic Aesthetic',
          body: 'The clean and minimalistic design of the portal was praised for making the interface visually appealing and less cluttered.',
        },
        {
          title: 'Clear Organization of Resources',
          body: 'Participants found it easy to locate and access educational materials and other resources, which saved them valuable time.',
        },
      ],
      improvements: [
        {
          title: 'Initial Overwhelm',
          body: 'Some participants felt a bit overwhelmed when first using the portal. To address this, we added an onboarding process to guide new users through the main features and functionalities, helping them get started more comfortably.',
        },
        {
          title: 'Colour Coding',
          body: 'Feedback indicated that adding colour coding could help users quickly identify different bookings and statuses at a glance. We incorporated a colour-coded system to enhance visual clarity and improve the overall user experience.',
        },
      ],
    },
    features: [
      {
        num: 'Key Feature 01',
        title: 'Centralised Resources Hub.',
        body: 'The Centralised Resource Hub provides easy access to all essential planning materials, including risk assessments and educational resources. This ensures that teachers have everything they need in one place, making the excursion planning process more efficient and less time-consuming.',
        image: '/images/big-issue/resources-card.png',
        imageAlt: 'Big Issue centralised resources hub',
      },
      {
        num: 'Key Feature 02',
        title: 'Streamlined booking and calendar management.',
        body: 'Teachers can view, create, and manage excursion bookings from a single list view. Colour-coded status indicators make it immediately clear which bookings are confirmed, pending, or require action — reducing administrative back-and-forth significantly.',
        image: '/images/big-issue/bookings-list.png',
        imageAlt: 'Big Issue bookings list view',
      },
      {
        num: 'Key Feature 03',
        title: 'Support and FAQs.',
        body: "The Support and FAQs section offers comprehensive assistance to users. It includes answers to common questions and provides detailed guidance on using the portal's features. This ensures that teachers can quickly resolve any issues and make the most of the available resources.",
        image: '/images/big-issue/contact.png',
        imageAlt: 'Big Issue support and FAQs page',
      },
    ],
    uiPrinciples: {
      label: 'User Interface Design Principles',
      heading: 'The design adhered to key UI principles: simplicity, consistency, and accessibility.',
      subtext: "We used a clean and modern aesthetic that aligned with The Big Issue's branding, ensuring that the portal was visually appealing and easy to use.",
      items: [
        {
          image: '/images/big-issue/ease-of-use.png',
          title: 'Ease of Use',
          body: 'The interface is intuitive and user-friendly, allowing teachers to navigate effortlessly through planning, booking, and managing excursions without unnecessary complexity.',
        },
        {
          image: '/images/big-issue/clarity.png',
          title: 'Clarity',
          body: 'Clear and concise information presentation helps teachers quickly find and understand the resources and tools they need, minimising confusion and enhancing usability.',
        },
        {
          image: '/images/big-issue/efficiency.png',
          title: 'Efficiency',
          body: 'The portal streamlines administrative tasks, providing quick access to essential tools and resources, saving teachers valuable time and reducing effort.',
        },
      ],
    },
    designSystem: {
      label: 'Design System',
      heading: 'A component library built for scale and consistency.',
      subtext: "Every UI element — from buttons to status badges — was designed as a reusable component, ensuring consistency across both the teacher and admin interfaces.",
      items: [
        { image: '/images/big-issue/design-system/buttons.png', title: 'Buttons' },
        { image: '/images/big-issue/design-system/navigation.png', title: 'Navigation' },
        { image: '/images/big-issue/design-system/forms.png', title: 'Forms' },
        { image: '/images/big-issue/design-system/cards.png', title: 'Cards' },
        { image: '/images/big-issue/design-system/status.png', title: 'Status Indicators' },
        { image: '/images/big-issue/design-system/dialogue.png', title: 'Dialogue & Modals' },
      ],
    },
    devHandoff: {
      label: 'Developer Handoff',
      heading: 'Annotated specs for both interfaces.',
      body: 'Each prototype screen was annotated with spacing, typography, component states, and interaction notes to ensure accurate implementation without ambiguity.',
      images: [
        { src: '/images/big-issue/dev-handoff-teacher.png', caption: 'Teacher interface — annotated prototype specs' },
        { src: '/images/big-issue/dev-handoff-admin.png', caption: 'Admin interface — annotated prototype specs' },
      ],
    },
    testimonials: [
      {
        quote: "I really liked the booking management system. I liked the way that you had it all separated into the relevant sections, and it was all just there. I thought that was really clever and made it easy to see the different sections and tasks.",
        author: 'Danya Sterling',
        role: 'Manager, Education Enterprises and Program Development, The Big Issue',
      },
      {
        quote: "I think less is more when it comes to file organisation and I think you really did a good job with it, especially with the colours as well.",
        author: 'Candy Russo',
        role: 'Mentor & Senior UX/UI Designer',
      },
    ],
    projectLinks: [
      {
        label: 'Teacher Prototype',
        href: 'https://www.figma.com/proto/yNVHfgwhz7mSOy9I4ynAH4/The-Big-Issue-Project-File?node-id=334-29284&viewport=1168%2C511%2C0.06&t=mboqaqkaI9VGR6o2-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=334%3A29284&show-proto-sidebar=1',
        icon: 'figma',
      },
      {
        label: 'Admin Prototype',
        href: 'https://www.figma.com/proto/yNVHfgwhz7mSOy9I4ynAH4/The-Big-Issue-Project-File?node-id=473-31255&viewport=1168%2C511%2C0.06&t=mboqaqkaI9VGR6o2-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=473%3A31255&show-proto-sidebar=1',
        icon: 'figma',
      },
      {
        label: 'Final Presentation',
        href: 'https://drive.google.com/file/d/13leZ89ZFXtNSbmCkNC2WOfhAWxiBwIN/view?usp=drive_link',
        icon: 'doc',
      },
    ],
    outcome: {
      title: 'Outcome',
      body: "Delivered complete hi-fi prototypes for both the admin and teacher interfaces, validated through usability testing. Coordinators felt the booking conflict detection and colour-coded status system would save them significant time each week. Teachers appreciated having student progress and resources in a single view. Stakeholder feedback highlighted the booking management system and file organisation as standout features.",
    },
    reflection: "Designing for two distinct user types forced me to be more rigorous about separating user needs from business needs. The shared data model meant technical constraints shaped the design. Learning to work within those constraints rather than around them was one of the most valuable skills I developed on this project. I also learned that paying attention to the smallest details, from colour contrast to spacing between elements, directly affects whether a product feels credible and trustworthy.",
    next: { id: 'peoples-first', title: 'People First Bank' },
  },

  'peoples-first': {
    title: 'People First Bank',
    category: 'UX / Product Design',
    date: 'April 2024',
    tags: ['Data Analysis', 'UX Research'],
    heroImage: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c1e8352be1664d3337432_Frame%2024.png',
    overview:
      "Approached by Heritage Bank and People's Choice, alongside a talented team from Harness Projects, to conduct user research and analysis for People First Bank. Our goal was to determine how the newly merged bank could effectively convey an engaging message to its younger target audience and identify which products or features were most important to them. People First Bank is Australia's new leading member-owned bank, serving over 700,000 members as a robust national mutual alternative to the big banks.",
    role: 'UX Researcher',
    timeline: '7 weeks',
    tools: 'Miro, Dovetail, Figma',
    type: 'Bootcamp Project',
    problem: {
      title: 'The Challenge',
      body: [
        "The merger of Heritage Bank and People's Choice created a new challenge: two customer bases with different mental models, different digital banking habits, and different expectations, now expected to converge on a single platform. The bank traditionally served older generations but now needed to attract and retain Gen Z and Millennials.",
        "Midway through the project, the brief shifted. The client was no longer interested in researching potential design options for the new homepage. Instead, People First Bank wanted insights and actionable recommendations for engaging and attracting their younger target audience, specifically around which products and features mattered most to them.",
      ],
      insight: "Customers valued the community feel of a credit union but measured trust by digital capability. The merger risked losing both if the transition was handled without understanding what the younger demographic actually wanted.",
    },
    process: [
      {
        num: '01',
        title: 'Stakeholder Interviews',
        description: "Conducted in-depth interviews with Heritage Bank and People's Choice stakeholders to uncover five key business areas: target demographic priorities, technological capabilities, merger goals, ESG values, and product offerings. The bank was looking to streamline 200+ products and needed insight into which mattered most to younger users.",
        image: null,
      },
      {
        num: '02',
        title: 'Competitive Platform Review',
        description: "Reviewed both legacy digital banking platforms side by side, benchmarking against industry standards and cataloguing UX patterns, information architecture, and feature parity. This formed the baseline for understanding the gap between current state and target state.",
        image: '/images/peoples-first/existing.png',
      },
      {
        num: '03',
        title: 'User Interviews and Surveys',
        description: 'Recruited Millennial and Gen Z participants for 1-on-1 long-form interviews and surveys. Research objectives covered understanding of mutual banks, key products and offerings, and the role of ESG values and reputation in financial decision-making.',
        image: '/images/peoples-first/research.jpg',
      },
      {
        num: '04',
        title: 'Synthesis and Proto-Persona',
        description: 'Synthesised interview and survey data into a proto-persona illustrating the target demographic goals, needs, pain points, and motivations. This grounded our five key insights and three recommendations in real user data rather than assumptions.',
        image: '/images/peoples-first/peoples.png',
      },
    ],
    processNote: 'This was a research-heavy engagement with no hi-fi design output. The deliverable was evidence and insight that the product team could act on. That required a different kind of rigour: communicating findings clearly is itself a design problem.',
    designImages: [],
    finalImage: null,
    insights: [
      {
        num: '01',
        title: 'Millennials lack knowledge of mutual banks',
        body: 'Millennials lack knowledge of what a mutual bank is and the benefits that come with being a member-owned institution. This represents a significant education opportunity for People First Bank.',
      },
      {
        num: '02',
        title: 'Competitive products are the top priority',
        body: 'Millennials prioritise competitive products above all else. Interest rates, fees, and product features outweigh brand affinity or community values when choosing a financial institution.',
      },
      {
        num: '03',
        title: 'Seamless digital experience is expected',
        body: 'Millennials value a seamless, efficient, and enjoyable user experience. A subpar digital experience is a dealbreaker, regardless of how competitive the products are.',
      },
      {
        num: '04',
        title: 'ESG is expected, not a differentiator',
        body: "Millennials expect ESG practices from their banks — it is no longer their main driver. Ethical positioning alone will not attract or retain younger customers; it must be paired with strong products and a great digital experience.",
      },
      {
        num: '05',
        title: 'Reputation and values are not priorities',
        body: 'Contrary to assumptions, reputation and alignment of values are not primary drivers for Millennials choosing a bank. Product and experience quality consistently ranked higher.',
      },
    ],
    recommendations: [
      {
        num: '01',
        title: 'Social media education campaign',
        body: "Educate younger audiences on the benefits of mutual banking via Instagram and TikTok with videos and testimonials showcasing community focus and environmental responsibility. Leverage People First Bank's community story as a differentiator once competitive products are in place.",
      },
      {
        num: '02',
        title: 'Invest in competitive products',
        body: 'Investigate and develop best-in-market products with minimal fees. Conduct a market analysis for product enhancement and consolidation of the existing 200+ product catalogue. Younger customers will not consider a bank that cannot compete on core financial products.',
      },
      {
        num: '03',
        title: 'Holistic digital experience uplift',
        body: 'Assess and improve the comprehensive digital experience through streamlined platforms, chatbot support, optimised navigation, and enhanced mobile app functionality. The digital experience must match the quality of the products to retain younger customers.',
      },
    ],
    projectLinks: [
      {
        label: 'Final Report',
        href: 'https://drive.google.com/file/d/1fY_bXCzLK6WISWgHhCa2bx4OzclQV-9i/view?usp=sharing',
        icon: 'doc',
      },
      {
        label: 'Final Presentation',
        href: 'https://drive.google.com/file/d/1dLqxwPQR-RITj8VRoEeZBPb0xuZgY2Xk/view?usp=sharing',
        icon: 'doc',
      },
    ],
    outcome: {
      title: 'Outcome',
      body: "Delivered a synthesis report and presentation identifying the top UX and product priorities for the People First Bank digital platform. Five key insights gave the product team a clear picture of what Millennials actually value, cutting through assumptions about ESG and brand loyalty. Three actionable recommendations provided a sequenced roadmap: educate on mutual banking, build competitive products, then invest in digital experience uplift.",
    },
    reflection: "Research projects without a design output taught me that communicating findings clearly is a design problem in itself. The way you frame a recommendation determines whether it gets acted on. I came out of this project a stronger communicator and a more structured thinker. I also learned to be adaptable: when the brief changed midway through, we had to quickly reframe our research objectives without losing the work already done.",
    next: { id: 'starlight', title: "Starlight Children's Foundation" },
  },

  // ── Architecture case studies ──────────────────────────────

  'pca-refurb': {
    title: 'Porsche Australia Office Refurbishment',
    category: 'Architecture',
    date: 'Completed 2023',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: '/images/architecture/pca-refurb/img-01.jpg',
    overview:
      "Interior refurbishment of the Porsche Cars Australia national headquarters in Melbourne. The project involved redesigning the open-plan workspace, executive meeting suites, and staff amenities to align with Porsche's updated global design language.",
    role: 'Architectural Designer',
    timeline: '8 months',
    tools: 'Revit, AutoCAD, SketchUp',
    type: 'Commercial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "Porsche Cars Australia required a refurbishment of their national HQ that reflected the brand's premium positioning while improving day-to-day working conditions for staff. The existing office felt dated and disconnected from the quality of the product the business sold.",
      ],
    },
    galleryImages: [
      '/images/architecture/pca-refurb/img-01.jpg',
      '/images/architecture/pca-refurb/img-02.jpg',
      '/images/architecture/pca-refurb/img-03.jpg',
      '/images/architecture/pca-refurb/img-04.jpg',
      '/images/architecture/pca-refurb/img-05.jpg',
      '/images/architecture/pca-refurb/img-06.jpg',
      '/images/architecture/pca-refurb/img-07.jpg',
      '/images/architecture/pca-refurb/img-08.jpg',
    ],
    outcome: {
      title: 'Outcome',
      body: "The refurbishment was completed on schedule and received positive feedback from Porsche AG during a regional review. The project demonstrated my ability to work within strict brand frameworks while delivering a space that functioned well for its occupants.",
    },
    next: { id: 'pca-adelaide', title: 'Porsche Center Adelaide and BMW Medindie' },
  },

  'pca-adelaide': {
    title: 'Porsche Center Adelaide and BMW Medindie',
    category: 'Architecture',
    date: 'Completed 2024',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: '/images/architecture/pca-adelaide/img-01.jpg',
    overview:
      "Concept design and documentation for two concurrent premium automotive dealership projects in Adelaide: a Porsche Center and BMW dealership, both requiring compliance with their respective manufacturer design standards.",
    role: 'Architectural Designer',
    timeline: '12 months',
    tools: 'Revit, AutoCAD, Lumion',
    type: 'Commercial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "Automotive dealerships are among the most brand-controlled built environments. The challenge was to meet those standards across two different brands simultaneously, within the constraints of local planning requirements and client budget.",
      ],
    },
    galleryImages: [
      '/images/architecture/pca-adelaide/img-01.jpg',
      '/images/architecture/pca-adelaide/img-02.jpg',
      '/images/architecture/pca-adelaide/img-03.jpg',
      '/images/architecture/pca-adelaide/img-04.jpg',
      '/images/architecture/pca-adelaide/img-05.jpg',
      '/images/architecture/pca-adelaide/img-06.jpg',
      '/images/architecture/pca-adelaide/img-07.jpg',
      '/images/architecture/pca-adelaide/img-08.jpg',
      '/images/architecture/pca-adelaide/img-09.jpg',
    ],
    outcome: {
      title: 'Outcome',
      body: "Both projects received manufacturer CI approval and building permits. The Porsche Center Adelaide was completed in early 2024. The BMW Medindie project progressed to construction during the same period.",
    },
    next: { id: 'pc-melbourne', title: 'Porsche Center Melbourne' },
  },

  'pc-melbourne': {
    title: 'Porsche Center Melbourne',
    category: 'Architecture',
    date: 'Under construction',
    tags: ['Concept Design'],
    heroImage: '/images/architecture/pc-melbourne/img-01.jpg',
    overview:
      "Concept design for a new flagship Porsche Center in Melbourne, one of the brand's most visible Australian locations and a key project in their national network expansion.",
    role: 'Architectural Designer',
    timeline: 'Ongoing',
    tools: 'Revit, SketchUp, Lumion',
    type: 'Commercial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "Porsche's Melbourne flagship required a design that could serve as a landmark for the brand — a showroom experience that matched the emotional quality of the cars themselves. The brief called for a design that went beyond CI compliance to create a genuinely differentiated customer experience.",
      ],
    },
    galleryImages: [
      '/images/architecture/pc-melbourne/img-01.jpg',
      '/images/architecture/pc-melbourne/img-02.jpg',
      '/images/architecture/pc-melbourne/img-03.jpg',
      '/images/architecture/pc-melbourne/img-04.jpg',
      '/images/architecture/pc-melbourne/img-05.jpg',
      '/images/architecture/pc-melbourne/img-06.jpg',
    ],
    outcome: {
      title: 'Outcome',
      body: "The concept design received approval from Porsche AG and the project has progressed to construction documentation. The facade design was cited by the client as the strongest aspect of the scheme.",
    },
    next: { id: 'kia', title: 'Adrian Brian Kia Medindie' },
  },

  'kia': {
    title: 'Adrian Brian Kia Medindie',
    category: 'Architecture',
    date: 'Completed 2023',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: '/images/architecture/kia/exterior.jpg',
    overview:
      "Design and documentation for a premium Kia dealership in Medindie, South Australia. The project delivered a multi-brand automotive facility accommodating showroom, service, and retail functions across a constrained urban site.",
    role: 'Architectural Designer',
    timeline: '10 months',
    tools: 'Revit, AutoCAD, Lumion',
    type: 'Commercial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "The client required a facility that balanced the Kia brand identity with a multi-brand service offering, all within a tight urban site footprint. The design had to create a premium customer experience from the street while maintaining operational efficiency for the service team.",
      ],
    },
    galleryImages: [
      '/images/architecture/kia/exterior.jpg',
      '/images/architecture/kia/showroom.jpg',
      '/images/architecture/kia/car-display.jpg',
      '/images/architecture/kia/bar.jpg',
      '/images/architecture/kia/multi-brand.jpg',
    ],
    outcome: {
      title: 'Outcome',
      body: "The completed dealership met all Kia CI requirements and opened to positive reception. The multi-brand service workshop layout was identified by the client as a key operational improvement over their previous facility.",
    },
    next: { id: 'williams', title: 'Williams Residence' },
  },

  'williams': {
    title: 'Williams Residence',
    category: 'Architecture',
    date: 'Completed 2022',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: '/images/architecture/williams/exterior.jpg',
    overview:
      "Residential design for a private dwelling in South Australia, delivering a considered response to the site's landscape and orientation. The project involved full concept design and construction documentation.",
    role: 'Architectural Designer',
    timeline: '12 months',
    tools: 'Revit, AutoCAD, SketchUp',
    type: 'Residential Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "The clients sought a home that felt connected to its landscape, with generous natural light and a clear relationship between indoor and outdoor living. The design needed to respond to the site's topography and orientation while meeting the practical needs of a family home.",
      ],
    },
    galleryImages: [
      '/images/architecture/williams/exterior.jpg',
      '/images/architecture/williams/interior.jpg',
    ],
    outcome: {
      title: 'Outcome',
      body: "The completed residence was well-received by the clients. The orientation strategy maximised natural light year-round, and the indoor-outdoor connection was cited as the standout feature of the design.",
    },
    next: { id: 'truck-storage', title: 'Truck and Storage Complex' },
  },

  'truck-storage': {
    title: 'Truck and Storage Complex',
    category: 'Architecture',
    date: 'Under construction',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c30454d0e8083c081c6dd_Nuriootpa%20Traders%20Site%20Render.jpg',
    overview:
      "Industrial facility design for a logistics operator in regional South Australia, covering a large-scale truck servicing and storage complex designed for operational efficiency and future expansion.",
    role: 'Architectural Designer',
    timeline: '10 months',
    tools: 'Revit, AutoCAD',
    type: 'Industrial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "The client required a purpose-built facility that could accommodate heavy vehicle servicing, long-term truck storage, and ancillary office functions on a constrained rural site. The primary challenge was designing for operational workflow: how trucks move through the site, how the servicing bay connects to storage, and how staff and vehicles are separated for safety.",
      ],
    },
    galleryImages: [],
    outcome: {
      title: 'Outcome',
      body: "The project received development approval and commenced construction. The operational workflow design was validated by the client's operations manager as a significant improvement over their existing facility.",
    },
    next: { id: 'starlight', title: "Starlight Children's Foundation" },
  },
};
