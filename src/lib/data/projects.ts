import type { Project } from "$lib/utils/types";

export default [
  {
    name: 'LinkedIn Scraper',
    description: 'A web scraper for LinkedIn profiles. Discontinued since well... there is AI for that.',
    image: 'images/projects/li-scraper.png',
    githubLink: 'https://github.com/yazeed-eldigair/linkedin-scraper',
    tags: [{ label: 'Chrome extension' }, { label: 'Web scraping' }]
  },
  {
    name: 'Professional Cloud Architect (GCP)',
    description: 'Designing, developing and managing robust, secure, scalable, highly available dynamic solution using Google Cloud to drive business objects.',
    image: 'images/projects/gcp-badge.png',
    externalLink: { label: 'View certification', href: 'https://google.accredible.com/d6772933-37b4-4f86-9fb3-ebccd28f38e4' },
    tags: [{ label: 'Google Cloud' }, { label: 'Certification', color: 'secondary' }]
  },
  {
    name: 'AI Robot Teacher Assistant',
    // description: 'An AI and computer vision based teacher assitant robot that proctors exams autnomously and detects cheating, contactlessly scans exam paper submissions, interacts with humans with a voice and provides personalised academic content.',
    description: 'A robot that does a bunch of stuff.',
    image: 'images/projects/reacher.png',
    externalLink: { label: 'View publication', href: 'https://www.mdpi.com/2076-3417/11/21/10449' },
    tags: [{ label: 'Machine learning' }, { label: 'Computer vision' }, { label: 'MDPI', color: 'secondary' }]
  },
  // {
  //   name: 'Automoated Drone-based Monitoring of Pit Deformation',
  //   description: 'An AI and computer vision based teacher assitant robot that proctors exams autnomously and detects cheating, contactlessly scans exam paper submissions, interacts with humans with a voice and provides personalised academic content.',
  //   image: 'images/projects/themeable.jpg',
  //   externalLink: { label: 'View publication', href: 'https://icsoba.org/proceedings/39th-conference-and-exhibition-icsoba-2021/?doc=57' },
  //   tags: [{ label: 'Machine learning' }, { label: 'Computer vision' }, { label: 'Conference', color: 'secondary' }]
  // },
] as Project[];