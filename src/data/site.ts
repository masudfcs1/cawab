import {
  GiSwordWound, GiNetworkBars, GiBookCover, GiEarthAmerica, GiMegaphone,
  GiPalette, GiShield, GiCampingTent, GiScales, GiTruck, GiHelmet,
  GiHealthNormal, GiGraduateCap, GiCircuitry, GiPublicSpeaker, GiTrophyCup, GiLightBulb,
} from "react-icons/gi";

export const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Overview", to: "/about#overview" },
      { label: "History", to: "/about#history" },
      { label: "Mission & Vision", to: "/about#mission" },
      { label: "Founders", to: "/about#founders" },
      { label: "Executive Committee", to: "/about#executive" },
    ],
  },
  { label: "Departments", to: "/departments", mega: "departments" },
  { label: "Institutions", to: "/institutions", mega: "institutions" },
  {
    label: "Activities",
    to: "/activities",
    children: [
      { label: "Events", to: "/activities#events" },
      { label: "Sports", to: "/activities#sports" },
      { label: "Cultural Programs", to: "/activities#culture" },
      { label: "Volunteer Work", to: "/activities#volunteer" },
      { label: "Relief Programs", to: "/activities#relief" },
    ],
  },
  {
    label: "Media",
    to: "/media",
    children: [
      { label: "Gallery", to: "/media#gallery" },
      { label: "Videos", to: "/media#videos" },
      { label: "Publications", to: "/media#publications" },
      { label: "Press Releases", to: "/media#press" },
    ],
  },
  {
    label: "Membership",
    to: "/membership",
    children: [
      { label: "Become a Member", to: "/membership#join" },
      { label: "Membership Benefits", to: "/membership#benefits" },
      { label: "Verification", to: "/membership#verify" },
      { label: "Alumni Registration", to: "/membership#alumni" },
    ],
  },
  { label: "Contact", to: "/contact" },
] as const;

export const DEPARTMENTS = [
  { name: "Alumni Affairs", icon: GiNetworkBars, desc: "Strengthening lifelong cantonment bonds." },
  { name: "Membership Affairs", icon: GiShield, desc: "Verified, structured membership growth." },
  { name: "University Affairs", icon: GiGraduateCap, desc: "Supporting members in higher education." },
  { name: "Foreign Affairs", icon: GiEarthAmerica, desc: "Global cantonmentian diaspora outreach." },
  { name: "Media & Publication", icon: GiMegaphone, desc: "Stories, journals and bulletins." },
  { name: "Culture & Sports", icon: GiTrophyCup, desc: "Tournaments, festivals, expression." },
  { name: "Disaster Management", icon: GiCampingTent, desc: "Rapid relief and recovery response." },
  { name: "Institutional Affairs", icon: GiBookCover, desc: "Liaison with cantonment institutions." },
  { name: "Law & Justice", icon: GiScales, desc: "Advisory and legal welfare." },
  { name: "Land & Logistics", icon: GiTruck, desc: "Operations, infrastructure, mobility." },
  { name: "Military Affairs", icon: GiHelmet, desc: "Coordination with armed forces alumni." },
  { name: "Health & Welfare", icon: GiHealthNormal, desc: "Medical aid and wellness programs." },
  { name: "Education", icon: GiGraduateCap, desc: "Scholarships, mentoring, tutoring." },
  { name: "IT Affairs", icon: GiCircuitry, desc: "Digital infrastructure and platforms." },
  { name: "Public Relations", icon: GiPublicSpeaker, desc: "Engagement with public stakeholders." },
  { name: "Branding & Fundraising", icon: GiPalette, desc: "Identity, campaigns, partnerships." },
  { name: "Innovation & Entrepreneurship", icon: GiLightBulb, desc: "Incubating member ventures." },
  { name: "Cadet Heritage", icon: GiSwordWound, desc: "Preserving cantonment legacy." },
];

export const INSTITUTION_CATEGORIES = [
  {
    key: "public",
    label: "Cantonment Public",
    items: [
      "Adamjee Cantonment College",
      "Chattogram Cantonment Public College",
      "Mirpur Cantonment Public School & College",
      "Jessore Cantonment Public College",
      "Rangpur Cantonment Public College",
    ],
  },
  {
    key: "english",
    label: "Cantonment English",
    items: [
      "Torch International School",
      "Bangladesh International School",
      "Dhaka Cantonment English School",
      "Chattogram Cantonment English School",
    ],
  },
  {
    key: "board",
    label: "Cantonment Board",
    items: [
      "Qadirabad Cantonment Public School",
      "Shaheed Ramiz Uddin Cantonment School",
      "Cantonment Board School Saidpur",
      "Cantonment Board School Bogura",
    ],
  },
  {
    key: "bn",
    label: "BN Colleges",
    items: [
      "Bangladesh Noubahini School & College Dhaka",
      "Navy Anchorage School & College",
      "BN School & College Chattogram",
    ],
  },
  {
    key: "baf",
    label: "BAF Shaheen Colleges",
    items: [
      "BAF Shaheen College Dhaka",
      "BAF Shaheen College Kurmitola",
      "BAF Shaheen College Jessore",
      "BAF Shaheen College Chattogram",
    ],
  },
] as const;

export const TIMELINE = [
  { year: "2015", title: "Foundation", text: "CAWAB was envisioned by cantonment alumni seeking a unified welfare alliance." },
  { year: "2017", title: "First Convention", text: "Inaugural national convention bringing together representatives from 40+ institutions." },
  { year: "2019", title: "Departmental Structure", text: "Seventeen departments formalized to organize welfare across domains." },
  { year: "2021", title: "Pandemic Response", text: "Mobilized relief, oxygen and medical aid across cantonment communities." },
  { year: "2023", title: "Scholarship Wing", text: "Launched the merit & need-based scholarship program for cantonmentian students." },
  { year: "2025", title: "Global Chapter", text: "Foreign Affairs department opened official diaspora chapters worldwide." },
];

export const STATS = [
  { value: 17, suffix: "+", label: "Departments" },
  { value: 60, suffix: "+", label: "Institutions" },
  { value: 25000, suffix: "+", label: "Members" },
  { value: 120, suffix: "+", label: "Programs / Year" },
];
