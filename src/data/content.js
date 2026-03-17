// ============================================================
// PORTFOLIO CONTENT — Edit everything here easily
// ============================================================

// ✏️ PERSONAL INFO
export const personal = {
  name: "Estela Teo",
  nameShort: "Estela Teo",
  role: "Media Portfolio",
  tagline: "Sit Application · 2025",
  intro: [
    "I am a storyteller drawn to the intersection of visual narrative and authentic human experience. My work spans documentary, short film, and creative media — each piece a study in moments that matter.",
    "Currently applying to study Film & Media at university, I bring a focused perspective shaped by years of independent production, thoughtful observation, and a deep love for the craft of cinema.",
  ],
  closingStatement: "Thank you.",
  closingSubtext: "I look forward to the opportunity to contribute and grow.",
}

// ✏️ VIDEO CATEGORIES
// Each category has:
//   - id       : unique number
//   - label    : the category heading shown on screen
//   - subtitle : short description shown below the heading
//   - videos   : array of video objects in this category
//
// To add a new category: copy a full { id, label, subtitle, videos: [...] } block.
// To add a video: copy a video block inside the videos array of that category.

export const videoCategories = [
  {
    id: 1,
    label: "NYP Sanda Martial Arts Night Promotional Video (2024–2025)",// ✏️ Category heading
    subtitle: "Produced promotional videos to support the publicity of NYP Sanda for Martial Arts Night, used on social media and during the event to showcase the sport and highlight the performances.", // ✏️ Category subtitle
    videos: [
      {
        id: 1,
        title: "Martial Arts Night 2024",
        role: "Videographer & Editor",
        embedUrl: "https://www.youtube.com/embed/sCaILSHTW24?si=Re7hT75Pxiyjem01",
        category: "Event Promotion Video",
        year: "2024",
      },
      {
        id: 2,
        title: "Martial Arts Night 2025",
        role: "Editor",
        embedUrl: "https://www.youtube.com/embed/7An849OEZHI?si=GUMagMH65fe5CjeP", // ✏️ Replace
        category: "Event Promotion Video",
        year: "2025",
      },
      // ✏️ Add more promotional videos here
    ],
  },
  {
    id: 2,
    label: "Hello Kitty Carnival – 3 Generations Campaign",                                    // ✏️ Category heading
    subtitle: "Produced three promotional videos targeted at Generation Z, Millennials, and Generation X to promote the Hello Kitty Carnival at Changi Airport and encourage attendance from different audience groups.", // ✏️ Category subtitle
    videos: [
      {
        id: 3,
        title: "GENX HELLO KITTY CHANGI FESTIVE VILLAGE",                     // ✏️ Replace
        role: "Director, Videographer & Editor",                  // ✏️ Replace
        embedUrl: "https://www.youtube.com/embed/azIuq_P7U0s?si=_vSHMtXrF6nwj2t-", // ✏️ Replace
        category: "Promotional Campaign Video",
        year: "2024",
      },
      {
        id: 4,
        title: "GENZ HELLO KITTY CHANGI FESTIVE VILLAGE",                     // ✏️ Replace
        role: "Director, Videographer & Editor",                  // ✏️ Replace
        embedUrl: "https://www.youtube.com/embed/jeyqG1hDzI0", // ✏️ Replace
        category: "Promotional Campaign Video",
        year: "2024",
      },
      {
        id: 5,
        title: "MILLENNIAL HELLO KITTY CHANGI FESTIVE VILLAGE",                     // ✏️ Replace
        role: "Director, Videographer & Editor",                  // ✏️ Replace
        embedUrl: "https://www.youtube.com/embed/6PCbIGfRlO4?si=r88OZJAOM3bIOf2N", // ✏️ Replace
        category: "Promotional Campaign Video",
        year: "2024",
      },
      // ✏️ Add more documentary videos here
    ],
  },
  {
    id: 3,
    label: "Internship Event Coverage – IT Day & Intern Day (2025)",// ✏️ Category heading
    subtitle: "Produced highlight videos documenting IT Day and Intern Day during my internship, capturing key moments and activities from the events.", // ✏️ Category subtitle
    videos: [
      {
        id: 6,
        title:"JW Marriott Systems Administrative Day Video 2025",
        role: "Videographer & Editor",
        embedUrl: "https://www.youtube.com/embed/pOkDDnwM80Y?si=NfvNLV5tFgfZF_cf",
        category: "Event Highlight Video",
        year: "2024",
      },
      {
        id: 7,
        title: "JW Marriott Intern Day Video 2025",
        role: "Videographer & Editor",
        embedUrl: "https://www.youtube.com/embed/f7ZZAGI3sTU?si=zSugaCTEZWP0EREs", // ✏️ Replace
        category: "Event Highlight Video",
        year: "2025",
      },
    ],
  },
  {
    id: 4,
    label: "ITE Work-Study Recruitment Video (2025)",// ✏️ Category heading
    subtitle: "Contributed to the production of a recruitment video promoting the ITE Work-Study Programme to prospective applicants.", // ✏️ Category subtitle
    videos: [
      {
        id: 8,
        title:"JW Marriott ITE Work Study Diploma Recruitment Video 2025",
        role: "Videographer & Editor",
        embedUrl: "https://www.youtube.com/embed/lG3Ik4hu0w8?si=INqDtK3wb79afZ9f",
        category: "Recruitment Video",
        year: "2024",
      },
    ],
  },
  {
    id: 5,
    label: "Corporate Farewell Video (2025)",// ✏️ Category heading
    subtitle: "Produced a farewell tribute video for the company’s General Manager, compiling memorable moments and messages from colleagues.", // ✏️ Category subtitle
    videos: [
      {
        id: 9,
        title: "JW Marriott General Manager Farewell",
        role: "Videographer & Editor",
        embedUrl: "https://www.youtube.com/embed/Vwh70frIAd0?si=kY7mYRkXxVEtfcbU",
        category: "Corporate Tribute Video",
        year: "2024",
      },
    ],
  },
  // ✏️ Add a new category by copying the block above
]
