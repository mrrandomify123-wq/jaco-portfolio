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
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c2881f20d14f69f91b89c_PCA_Office_003_HR_lo.jpg',
    href: '/work/pca-refurb',
  },
  {
    id: 'pca-adelaide',
    title: 'Porsche Center Adelaide and BMW Medindie',
    date: 'Completed 2024',
    tags: ['Concept Design', 'Construction Documentation'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c294d36cf815452a745e3_1300x735px_porsche-001.jpg',
    href: '/work/pca-adelaide',
  },
  {
    id: 'truck-storage',
    title: 'Truck and Storage Complex',
    date: 'Under construction',
    tags: ['Concept Design', 'Construction Documentation'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c30454d0e8083c081c6dd_Nuriootpa%20Traders%20Site%20Render.jpg',
    href: '/work/truck-storage',
  },
  {
    id: 'pc-melbourne',
    title: 'Porsche Center Melbourne',
    date: 'Under construction',
    tags: ['Concept Design'],
    image: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664ea4d7f43a8a93cf317f3d_Exterior%20v2%20no%20logo.jpg',
    href: '/work/pc-melbourne',
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
      "Redesigning the volunteer coordination experience for Starlight Children's Foundation, a charity that brings happiness to seriously ill children and their families across Australia.",
    role: 'UX Designer',
    timeline: '10 weeks',
    tools: 'Figma, Miro',
    type: 'Bootcamp Project',
    problem: {
      title: 'The Problem',
      body: [
        "Starlight's volunteer operations relied on scattered tools and manual processes. Coordinators juggled spreadsheets, emails, and phone calls to manage events, track hours, and onboard new volunteers, creating friction in an already emotionally demanding environment.",
        "Through stakeholder interviews we learned coordinators were spending 3 to 4 hours each week on administrative tasks that a well-designed system could automate. Meanwhile, volunteers had no clear way to see their contributed hours or understand the real-world impact of their time.",
      ],
      insight: "Volunteers don't just want to help. They want to feel connected to the impact of their help. The existing system made that invisible.",
    },
    process: [
      {
        num: '01',
        title: 'Discovery',
        description: 'Conducted stakeholder interviews with Starlight coordinators and ran a contextual review of existing tools to map pain points and uncover unmet needs.',
        image: '/images/starlight/research-1.jpg',
      },
      {
        num: '02',
        title: 'Research',
        description: 'Synthesised findings into a user persona and a consolidated journey map covering the full volunteer lifecycle, from sign-up through to event day and post-event reflection.',
        image: '/images/starlight/persona.jpg',
      },
      {
        num: '03',
        title: 'Ideation',
        description: 'Ran a SCAMPER ideation workshop with the team to generate solutions. Prioritised ideas using an impact vs effort matrix before moving into wireframes.',
        image: '/images/starlight/research-2.jpg',
      },
      {
        num: '04',
        title: 'Prototype',
        description: 'Designed high-fidelity screens in Figma with interactive states, covering the full coordinator dashboard, event booking flow, and volunteer impact tracker.',
        image: '/images/starlight/prototype.png',
      },
    ],
    processNote: 'We followed a Human Centered Design (HCD) methodology throughout, returning to users at each stage to validate assumptions before progressing.',
    designImages: [
      { src: '/images/starlight/wireframes.png', caption: 'Wireframes: coordinator dashboard and key task flows' },
      { src: '/images/starlight/journey-map.png', caption: 'Journey map: consolidated from 8 volunteer interviews' },
      { src: '/images/starlight/final-1.png', caption: 'Hi-fi prototype: event management dashboard' },
      { src: '/images/starlight/final-2.png', caption: 'Hi-fi prototype: volunteer onboarding flow' },
    ],
    finalImage: '/images/starlight/final-3.png',
    outcome: {
      title: 'Outcome',
      body: "The redesigned portal was presented to Starlight stakeholders at the end of the engagement. Usability testing with 5 volunteers showed a 40% reduction in task completion time for key coordinator workflows. The impact dashboard resonated strongly: multiple participants said seeing their hours translated into 'wishes granted' made them feel more connected to the organisation's mission.",
    },
    reflection: "This project taught me that the emotional context of a product matters as much as its functional requirements. We weren't just designing a scheduling tool. We were designing something that volunteers would use on the most meaningful days of their year. Getting that emotional register right required listening more carefully than I had before.",
    next: { id: 'big-issue', title: 'The Big Issue' },
  },

  'big-issue': {
    title: 'The Big Issue',
    category: 'UX / Product Design',
    date: 'June 2024',
    tags: ['Hi-Fi Prototyping', 'UI Design', 'UX Research'],
    heroImage: '/images/big-issue/final-2.png',
    overview:
      "Designing a dual-interface booking and resource management platform for The Big Issue, a social enterprise that employs people experiencing homelessness and operates Charcoal Lane, a training restaurant and employment program.",
    role: 'UX Designer',
    timeline: '12 weeks',
    tools: 'Figma, Miro, FigJam',
    type: 'Bootcamp Project',
    problem: {
      title: 'The Problem',
      body: [
        "Without a centralised platform, coordinators managed vendor schedules and teacher-student placements through spreadsheets and phone calls. This led to miscommunications, double bookings, and missed sessions that directly impacted the livelihoods of vendors and the training outcomes for students.",
        "The challenge was to design a system that worked equally well for two very different user groups: admin coordinators managing logistics, and teachers tracking student progress and resources.",
      ],
      insight: "Two user groups with different mental models, different levels of digital literacy, and very different stakes. One wrong booking affects someone's income.",
    },
    process: [
      {
        num: '01',
        title: 'Research',
        description: 'Conducted interviews with program coordinators and reviewed existing documentation to understand how bookings were managed and where handoffs broke down.',
        image: '/images/big-issue/sketches.png',
      },
      {
        num: '02',
        title: 'User Flows',
        description: 'Mapped separate task flows for admin and teacher user types. Identified divergence points where the same data needed to look and behave differently for each audience.',
        image: '/images/big-issue/flow-admin.png',
      },
      {
        num: '03',
        title: 'Wireframes',
        description: 'Rapid wireframing across both interfaces to validate structural decisions before moving to high fidelity. Tested with users to confirm navigation patterns.',
        image: '/images/big-issue/wireframes.png',
      },
      {
        num: '04',
        title: 'Design System',
        description: 'Built a lightweight design system covering buttons, forms, cards, navigation states, and status indicators to ensure consistency across both interfaces.',
        image: '/images/big-issue/dashboard.png',
      },
    ],
    processNote: 'The dual-interface challenge required us to constantly ask: is this the same problem, or two different problems that share data? Getting that distinction right shaped every design decision.',
    designImages: [
      { src: '/images/big-issue/bookings.png', caption: 'Bookings list view: admin interface' },
      { src: '/images/big-issue/resources.png', caption: 'Resources folder: teacher interface' },
      { src: '/images/big-issue/prototype-teacher.png', caption: 'Hi-fi prototype: teacher scheduling view' },
      { src: '/images/big-issue/prototype-admin.png', caption: 'Hi-fi prototype: admin coordinator dashboard' },
    ],
    finalImage: '/images/big-issue/final-1.png',
    outcome: {
      title: 'Outcome',
      body: "Delivered a complete hi-fi prototype covering both the admin and teacher interfaces, validated through usability testing. Key feedback: coordinators felt the booking conflict detection feature would save them significant time each week, and teachers appreciated having student progress and resources in a single view rather than split across tools.",
    },
    reflection: "Designing for two distinct user types forced me to be more rigorous about separating user needs from business needs. The shared data model meant technical constraints shaped the design. Learning to work with those constraints rather than around them was one of the most valuable skills I developed on this project.",
    next: { id: 'peoples-first', title: 'People First Bank' },
  },

  'peoples-first': {
    title: 'People First Bank',
    category: 'UX / Product Design',
    date: 'April 2024',
    tags: ['Data Analysis', 'UX Research'],
    heroImage: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c1e8352be1664d3337432_Frame%2024.png',
    overview:
      "UX research and competitive analysis supporting the post-merger transition of People's Choice Credit Union and Heritage Bank into People First Bank, one of Australia's largest customer-owned banks.",
    role: 'UX Researcher',
    timeline: '8 weeks',
    tools: 'Miro, Dovetail, Figma',
    type: 'Bootcamp Project',
    problem: {
      title: 'The Problem',
      body: [
        "The merger of two legacy banks created a critical UX challenge: two customer bases with different mental models, different digital banking habits, and different expectations, now expected to converge on a single platform.",
        "The product team needed to understand which digital features mattered most to customers from each legacy bank, where the biggest UX gaps existed, and how to sequence the roadmap for the new unified People First Bank app.",
      ],
      insight: "Customers valued the community feel of a credit union but measured trust by digital capability. The merger risked losing both if handled poorly.",
    },
    process: [
      {
        num: '01',
        title: 'Competitive Audit',
        description: "Conducted a detailed audit of both legacy digital banking platforms, benchmarking against industry standards and identifying feature gaps between the two existing experiences.",
        image: '/images/peoples-first/existing.png',
      },
      {
        num: '02',
        title: 'Platform Analysis',
        description: 'Reviewed the existing Heritage Bank and People\'s Choice digital platforms side by side, cataloguing UX patterns, information architecture, and feature parity across both.',
        image: '/images/peoples-first/heritage.png',
      },
      {
        num: '03',
        title: 'Research Synthesis',
        description: 'Analysed customer sentiment data and synthesised findings into a prioritised list of UX recommendations, organised by customer impact and implementation effort.',
        image: '/images/peoples-first/peoples.png',
      },
      {
        num: '04',
        title: 'Research Workshop',
        description: 'Ran a collaborative workshop session to validate findings with stakeholders and align on the opportunity areas that would most directly affect customer satisfaction post-merger.',
        image: '/images/peoples-first/research.jpg',
      },
    ],
    processNote: 'This was a research-heavy project with no hi-fi design output. The deliverable was evidence and insight that the product team could act on. That required a different kind of rigour.',
    designImages: [],
    finalImage: null,
    outcome: {
      title: 'Outcome',
      body: "Delivered a synthesis report identifying the top UX priorities for the People First Bank digital platform. Key recommendations included a unified account overview, consistent notification system, and simplified onboarding flow for customers migrating from either legacy platform. The research highlighted that seamless access to existing account history was the single most important trust factor for migrating customers.",
    },
    reflection: "Research projects without a design output taught me that communicating findings clearly is a design problem in itself. The way you frame a recommendation determines whether it gets acted on. I came out of this project a stronger communicator and a more structured thinker.",
    next: { id: 'starlight', title: "Starlight Children's Foundation" },
  },

  // Architecture case studies
  'pca-refurb': {
    title: 'Porsche Australia Office Refurbishment',
    category: 'Architecture',
    date: 'Completed 2023',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c2881f20d14f69f91b89c_PCA_Office_003_HR_lo.jpg',
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
        "The challenge was balancing brand consistency (adhering to Porsche's global design standards) with practical workplace functionality and the constraints of an existing building.",
      ],
      insight: "Brand and function are not in tension. When the design is right, the space communicates the brand simply by working well.",
    },
    process: [
      { num: '01', title: 'Concept Design', description: 'Developed concept directions aligned with Porsche global brand guidelines, presenting options to local and international stakeholders.', image: null },
      { num: '02', title: 'Design Development', description: 'Refined the selected concept through material selection, spatial planning, and coordination with specialist subcontractors.', image: null },
      { num: '03', title: 'Documentation', description: 'Produced full construction documentation packages for building permit and contractor tender.', image: null },
      { num: '04', title: 'Construction', description: 'Provided construction observation services and coordinated responses to RFIs throughout the build phase.', image: null },
    ],
    processNote: null,
    designImages: [],
    finalImage: null,
    outcome: {
      title: 'Outcome',
      body: "The refurbishment was completed on schedule and received positive feedback from Porsche AG during a regional review. The project demonstrated my ability to work within strict brand frameworks while delivering a space that functioned well for its occupants.",
    },
    reflection: "Working within a global brand system taught me how to find creative solutions within constraints, a skill that translates directly into design systems work in product design.",
    next: { id: 'pca-adelaide', title: 'Porsche Center Adelaide and BMW Medindie' },
  },

  'pca-adelaide': {
    title: 'Porsche Center Adelaide and BMW Medindie',
    category: 'Architecture',
    date: 'Completed 2024',
    tags: ['Concept Design', 'Construction Documentation'],
    heroImage: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664c294d36cf815452a745e3_1300x735px_porsche-001.jpg',
    overview:
      "Concept design and documentation for two concurrent premium automotive dealership projects in Adelaide: a Porsche Center and BMW dealership, both requiring compliance with their respective manufacturer design standards.",
    role: 'Architectural Designer',
    timeline: '12 months',
    tools: 'Revit, AutoCAD, Lumion',
    type: 'Commercial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "Automotive dealerships are among the most brand-controlled built environments. Every surface, material, and spatial proportion is governed by manufacturer standards. The challenge was to meet those standards across two different brands simultaneously, within the constraints of local planning requirements and client budget.",
        "Both projects required close collaboration with the manufacturer CI (Corporate Identity) teams in Germany and the UK, requiring clear communication and careful documentation management.",
      ],
      insight: "Managing two brand systems in parallel clarified something: good constraints produce better outcomes when you understand the why behind each rule.",
    },
    process: [
      { num: '01', title: 'CI Compliance', description: 'Mapped both brands\' Corporate Identity requirements and identified conflicts with local planning codes, resolving each through negotiation with manufacturers.', image: null },
      { num: '02', title: 'Concept Design', description: 'Developed site-specific concept designs for each project, adapting global templates to local site conditions.', image: null },
      { num: '03', title: 'Documentation', description: 'Produced permit and construction documentation packages for both projects, managing the coordination between local consultants and international brand teams.', image: null },
    ],
    processNote: null,
    designImages: [],
    finalImage: null,
    outcome: {
      title: 'Outcome',
      body: "Both projects received manufacturer CI approval and building permits. The Porsche Center Adelaide was completed in early 2024. The BMW Medindie project progressed to construction during the same period.",
    },
    reflection: "Running two complex projects in parallel required the kind of systematic thinking and documentation discipline that I now bring to design work: clear naming conventions, version control, and stakeholder communication.",
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
        "The remote site location added complexity to material procurement and construction sequencing.",
      ],
      insight: "Industrial design is pure UX for physical space. If the workflow doesn't work, nothing else matters.",
    },
    process: [
      { num: '01', title: 'Site Analysis', description: 'Assessed site constraints including access roads, flood risk zones, and utility connections to inform building placement and orientation.', image: null },
      { num: '02', title: 'Operational Design', description: 'Worked with the client to map vehicle movement patterns and servicing workflows, using this as the basis for the spatial organisation.', image: null },
      { num: '03', title: 'Documentation', description: 'Produced full construction documentation including structural coordination with engineers and authority submissions.', image: null },
    ],
    processNote: null,
    designImages: [],
    finalImage: null,
    outcome: {
      title: 'Outcome',
      body: "The project received development approval and commenced construction. The operational workflow design was validated by the client's operations manager as a significant improvement over their existing facility.",
    },
    reflection: "Designing for operational efficiency in an industrial context is fundamentally the same problem as designing for task completion in a digital product. Understand the job to be done, then get out of the way.",
    next: { id: 'pc-melbourne', title: 'Porsche Center Melbourne' },
  },

  'pc-melbourne': {
    title: 'Porsche Center Melbourne',
    category: 'Architecture',
    date: 'Under construction',
    tags: ['Concept Design'],
    heroImage: 'https://cdn.prod.website-files.com/65e6a01f2073c7705362cda6/664ea4d7f43a8a93cf317f3d_Exterior%20v2%20no%20logo.jpg',
    overview:
      "Concept design for a new flagship Porsche Center in Melbourne, one of the brand's most visible Australian locations and a key project in their national network expansion.",
    role: 'Architectural Designer',
    timeline: 'Ongoing',
    tools: 'Revit, SketchUp, Lumion',
    type: 'Commercial Architecture',
    problem: {
      title: 'The Brief',
      body: [
        "Porsche's Melbourne flagship required a design that could serve as a landmark for the brand, a showroom experience that matched the emotional quality of the cars themselves. The brief called for a design that went beyond CI compliance to create a genuinely differentiated customer experience.",
        "The site's visibility from a major arterial road made facade design a key consideration, while internal planning needed to balance showroom display, service workshop, parts storage, and customer lounge functions.",
      ],
      insight: "A premium brand showroom is a physical UX. The customer journey through the space is as deliberate as any digital flow.",
    },
    process: [
      { num: '01', title: 'Concept Design', description: 'Developed multiple concept directions exploring the tension between Porsche\'s precision engineering and the sensory quality of the customer experience.', image: null },
      { num: '02', title: 'Facade Design', description: 'Designed the main street facade to function as a display surface, showcasing vehicles to passing traffic while maintaining the quality and restraint of the Porsche brand.', image: null },
      { num: '03', title: 'Interior Planning', description: 'Developed the interior spatial sequence from arrival through showroom to customer lounge, optimising both customer experience and operational efficiency.', image: null },
    ],
    processNote: null,
    designImages: [],
    finalImage: null,
    outcome: {
      title: 'Outcome',
      body: "The concept design received approval from Porsche AG and the project has progressed to construction documentation. The facade design was cited by the client as the strongest aspect of the scheme.",
    },
    reflection: "This project crystallised the connection between architecture and product design for me. The showroom experience, the sequence of spaces, the way light falls on a car, the moment of arrival, is a designed journey. Thinking about physical experience design was the foundation for how I now think about digital experience design.",
    next: { id: 'starlight', title: "Starlight Children's Foundation" },
  },
};
