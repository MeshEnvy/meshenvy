export interface Officer {
  name: string;
  title: string;
}

export interface Chapter {
  name: string;
  location: string;
  description: string;
  meetupSchedule: string;
  focus: string[];
  officers: Officer[];
  contactUrl: string;
  isHomeChapter?: boolean;
}

export const chaptersData: Chapter[] = [
  {
    name: "Reno Chapter",
    location: "Reno, Nevada",
    description:
      "The founding chapter of MeshEnvy, based in Reno, Nevada. We organize regular meetups, workshops, and community events to grow the local Meshtastic network.",
    meetupSchedule: "Monthly workshops and events",
    focus: ["Education", "Network building", "Community engagement"],
    officers: [
      {
        name: "Ben Allfree",
        title: "President",
      },
    ],
    contactUrl: "https://discord.gg/gRWAccbEWN",
    isHomeChapter: true,
  },
];
