/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SDGItem, Programme, CoreValue, Testimonial, DonationTier } from './types';

export const HERO_TAGLINE = "Empowering Her Today. Transforming Nations Tomorrow.";
export const LOGO_URL = "https://www.image2url.com/r2/default/images/1780994429407-1ce0eb55-9d2d-40ce-aca6-8d9302d37ea2.jpeg";

export const STATS = [
  { value: 2, suffix: "", label: "Countries Active" },
  { value: 500, suffix: "+", label: "Women Supported Directly" },
  { value: 4, suffix: "", label: "Core Impact Programmes" },
  { value: 15, suffix: "+", label: "Community Partners" }
];

export const PROGRAMMES: Programme[] = [
  {
    id: "economic-empowerment",
    title: "Economic Empowerment & Livelihood Support",
    shortDescription: "Empowering women with financial literacy, micro-grants, and cooperative models to achieve financial independence.",
    fullDescription: "Financial autonomy is a foundational stone of empowerment. Through our Livelihood Support initatives, we create robust savings circles, provide interest-free starter capital, and host intensive financial literacy bootcamps designed for grassroots traders and emerging scale-ups alike.",
    iconName: "Briefcase",
    bullets: [
      "Micro-funding & Interest-free loan circles for small business launch",
      "Financial planning and bookkeeping structured training",
      "Cooperative markets creation and global distribution access support",
      "Mentorship pairing with seasoned international entrepreneurs"
    ],
    imageUrl: "/src/assets/images/about_story_1780994563322.png" // Beautiful custom workspace photo!
  },
  {
    id: "skills-development",
    title: "Skills Development & Capacity Building",
    shortDescription: "Bridging the digital divide and vocational gaps through tech courses, trade apprenticeships, and leadership programs.",
    fullDescription: "We prepare women for the workspace of tomorrow. By hosting certified bootcamps in digital design, coding basics, and modern computing, paired alongside specialized physical vocational crafts, we elevate her employability and self-reliance.",
    iconName: "Award",
    bullets: [
      "Digital literacy, software basics, and tech career pathways",
      "Vocational crafts: tailored production, artisanal works, organic cosmetic formulation",
      "Public speaking, personal branding, and communication design seminars",
      "UK-Africa collaborative cross-continental virtual bootcamps"
    ],
    imageUrl: "/src/assets/images/skills_training_1780994580740.png" // Beautiful custom skills photo!
  },
  {
    id: "health-wellbeing",
    title: "Health, Fitness & Wellbeing",
    shortDescription: "Promoting physical health, nutrition guidance, mental health spaces, and fitness workshops for a balanced lifestyle.",
    fullDescription: "A healthy mind in a strong body translates to sustainable growth. We offer active yoga and fitness clubs, safe-space peer mental health group sessions, and run vital nutritional awareness events in close partnership with primary local healthcare bodies.",
    iconName: "Heart",
    bullets: [
      "Weekly community outdoor fitness, yoga, and physical strength sessions",
      "One-on-one and group mental health wellness circles guided by specialists",
      "Maternal health and family planning education networks",
      "Sanitary pack distributions (Pads-for-All Campaign) in secondary schools"
    ],
    imageUrl: "https://picsum.photos/seed/wellbeing_well/800/600"
  },
  {
    id: "community-education",
    title: "Community Education & Awareness",
    shortDescription: "Sensitizing local communities on gender equality, child education advocacy, and women's rights.",
    fullDescription: "Societal shift requires full-circle community engagement. We execute advocacy drives in markets and schools, educating on human rights, legal protections, child enrollment support, and challenging systems that place obstacles in a girl's educational progression.",
    iconName: "Users",
    bullets: [
      "Know-Your-Rights workshops focusing on family law, legacy, and work equality",
      "Incentivized primary and secondary education scholarship drives for girl-children",
      "Community elder and youth engagement circles on gender equality benefit sharing",
      "Domestic violence support hotlines and active safety networks"
    ],
    imageUrl: "https://picsum.photos/seed/community_edu/800/600"
  }
];

export const SDGS_DATA: SDGItem[] = [
  {
    number: 1,
    name: "No Poverty",
    color: "#E5243B",
    contribution: "We alleviate extreme poverty through structured micro-grants and co-operative resource-sharing hubs that ensure vulnerable women secure sustainable daily income channels."
  },
  {
    number: 3,
    name: "Good Health and Well-being",
    color: "#4C9F38",
    contribution: "By coordinating mental health counseling peer networks, physical fitness meetups, and hosting community nutritional awareness clinics, we support full-spectrum physical and mental wellness."
  },
  {
    number: 4,
    name: "Quality Education",
    color: "#C5192D",
    contribution: "We sponsor scholarships for out-of-school girls and deliver certified tech, coding, and vocational classes to help young women acquire relevant, modern market skills."
  },
  {
    number: 5,
    name: "Gender Equality",
    color: "#FF3A21",
    contribution: "Our core mission rests on tearing down systemic bias. We educate communities on girls’ rights, dismantle outdated gender taboos, and actively nurture resilient women leaders."
  },
  {
    number: 8,
    name: "Decent Work & Economic Growth",
    color: "#A21942",
    contribution: "We open direct pathways to high-value tech, digital, and vocational careers, enabling women to participate fully in localized and cross-border commercial systems."
  },
  {
    number: 10,
    name: "Reduced Inequalities",
    color: "#DD1367",
    contribution: "By creating hubs in Lagos and London, we bridge global inequality gaps, connecting grassroots African women with seasoned cross-border networks and advanced international systems."
  },
  {
    number: 11,
    name: "Sustainable Cities",
    color: "#FD9D24",
    contribution: "Empowered mothers build safe, self-reliant households. By strengthening rural-to-urban immigrant support systems, we make local settlements more resilient and inclusive."
  },
  {
    number: 13,
    name: "Climate Action",
    color: "#3F7E44",
    contribution: "Many of our cooperative startups operate with strict ecological awareness—leading community cleanup activities, clean cooking fuel advocacy, and upcycling-based trades."
  },
  {
    number: 17,
    name: "Partnerships for the Goals",
    color: "#19486A",
    contribution: "We actively collaborate with international organizations, government boards, corporate partners, and local healthcare structures to fuel wide-radius national changes."
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Empathy",
    description: "Listening without judgment and grounding all operations in mutual horizontal care.",
    iconName: "Heart"
  },
  {
    title: "Resilience",
    description: "Nurturing the strength inside every woman to stand tall and transform challenges into opportunities.",
    iconName: "ShieldAlert" // Let's use Shield Check or another strong icon details
  },
  {
    title: "Equality",
    description: "Advocating fiercely for gender parity, fair distribution of resources, and respect.",
    iconName: "Scale"
  },
  {
    title: "Cooperative Growth",
    description: "Unlocking collective potential through collaborative circles and peer support networks.",
    iconName: "Users"
  },
  {
    title: "Innovation",
    description: "Adopting modern technological literacy to transcend historical and geographical borders.",
    iconName: "Sparkles"
  },
  {
    title: "Accountability",
    description: "Maintaining strict transparency, direct integrity, and measurable impact tracking.",
    iconName: "TrendingUp"
  },
  {
    title: "Local Leadership",
    description: "Encouraging community-authored solutions guided by indigenous insights and local champions.",
    iconName: "Compass"
  },
  {
    title: "Global Collaboration",
    description: "Building reliable networks of mutual advocacy spanning from Lagos hubs to UK centers.",
    iconName: "Globe"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "HerDream Nation gave me my very first start-up loan of £100. Today, I employ four other young women and supply fresh cassava across Lagos.",
    author: "Grace Adebisi",
    role: "Cooperative Agribusiness Lead",
    location: "Lagos, Nigeria"
  },
  {
    quote: "The mental wellness circles provided a sanctuary when I newly arrived in the UK. I felt seen, supported, and was introduced to my current cloud certification training course.",
    author: "Zainab Mensah",
    role: "IT Support Analyst & Hub Graduate",
    location: "London, United Kingdom"
  },
  {
    quote: "We partner with this NGO on grassroots secondary school projects. Their menstrual health hygiene hygiene packs ensure girls do not miss critical school exam periods.",
    author: "Dr. Chioma Nwachukwu",
    role: "Community Public Health Liaison",
    location: "Enugu, Nigeria"
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: "tier-1",
    amount: 15,
    title: "School Hygiene Package",
    description: "Provides two months of eco-friendly menstrual pads, hygiene guidance, and reproductive health booklets for 5 secondary school girls."
  },
  {
    id: "tier-2",
    amount: 50,
    title: "Tech Bootcamp Scholar",
    description: "Sponsors one young woman's access to a 6-week software, coding, or visual layout digital design training program including workspace hub access."
  },
  {
    id: "tier-3",
    amount: 120,
    title: "Livelihood Startup Fund",
    description: "Funds a micro-grant and basic commercial bookkeeping setup toolkit to assist an ambitious mother starting her local culinary or tailoring trade."
  },
  {
    id: "tier-4",
    amount: 300,
    title: "Community Safe Circle Support",
    description: "Sponsors a complete health, wellness, and local counselling outreach seminar for up to 40 women in rural or low-income urban localities."
  }
];
