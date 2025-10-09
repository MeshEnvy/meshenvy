export interface ProjectUpdate {
  date: Date;
  title: string;
  description: string;
}

export interface ChecklistItem {
  title: string;
  description?: string;
  completed: boolean;
  difficulty: "easy" | "medium" | "hard";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "active" | "planning" | "completed" | "on-hold";
  startDate: Date;
  updates: ProjectUpdate[];
  checklist?: ChecklistItem[];
}

export const projectsData: Project[] = [
  {
    id: "solar-node-base-unit",
    title: "Solar Node Base Unit Prototype",
    description:
      "Developing a solar-powered Meshtastic node prototype designed for remote deployment across Nevada. This base unit will serve as a foundation for our network infrastructure, providing reliable, off-grid connectivity.",
    status: "active",
    startDate: new Date("2025-09-01"),
    updates: [
      {
        date: new Date("2025-10-09"),
        title: "Project Initiated",
        description:
          "Beginning research and design phase for solar-powered node prototype.",
      },
    ],
  },
  {
    id: "reno-spokes",
    title: "Reno Spokes",
    description:
      "Establishing communication links (spokes) from Reno to other regions across Nevada, including very remote areas. This project aims to connect Nevada's mesh network by creating reliable pathways to distant communities.",
    status: "planning",
    startDate: new Date("2025-10-09"),
    updates: [
      {
        date: new Date("2025-10-09"),
        title: "Project Planning",
        description:
          "Identifying target regions and planning initial spoke connections.",
      },
    ],
    checklist: [
      {
        title: "Virginia City Link",
        description:
          "Establish connection to Virginia City (~25 miles south) - Historic mining town",
        completed: false,
        difficulty: "easy",
      },
      {
        title: "Carson City Link",
        description: "Establish connection to Carson City (~30 miles south)",
        completed: false,
        difficulty: "easy",
      },
      {
        title: "Fernley Link",
        description: "Establish connection to Fernley (~30 miles east)",
        completed: false,
        difficulty: "easy",
      },
      {
        title: "Truckee Link",
        description: "Establish connection to Truckee, CA (~30 miles west)",
        completed: false,
        difficulty: "easy",
      },
      {
        title: "Pyramid Lake Reservation Link",
        description:
          "Establish connection to Pyramid Lake Paiute Tribe (~40 miles northeast) - Important indigenous community",
        completed: false,
        difficulty: "easy",
      },
      {
        title: "Fallon Link",
        description: "Establish connection to Fallon (~60 miles east)",
        completed: false,
        difficulty: "medium",
      },
      {
        title: "Lovelock Link",
        description:
          "Establish connection to Lovelock (~90 miles northeast) - Rural community on I-80",
        completed: false,
        difficulty: "medium",
      },
      {
        title: "Gerlach Link",
        description:
          "Establish connection to Gerlach (~110 miles north) - Gateway to Black Rock Desert and Burning Man",
        completed: false,
        difficulty: "medium",
      },
      {
        title: "Black Rock Desert/Playa Link",
        description:
          "Establish connection to Black Rock Desert Playa (~120 miles north) - Site of Burning Man, extremely remote",
        completed: false,
        difficulty: "medium",
      },
      {
        title: "Hawthorne Link",
        description:
          "Establish connection to Hawthorne (~130 miles southeast) - Remote military town",
        completed: false,
        difficulty: "medium",
      },
      {
        title: "Winnemucca Link",
        description:
          "Establish connection to Winnemucca (~165 miles northeast)",
        completed: false,
        difficulty: "medium",
      },
      {
        title: "Austin Link",
        description:
          "Establish connection to Austin (~170 miles east) - Extremely remote historic mining town",
        completed: false,
        difficulty: "hard",
      },
      {
        title: "Battle Mountain Link",
        description:
          "Establish connection to Battle Mountain (~200 miles northeast) - Remote mining community",
        completed: false,
        difficulty: "hard",
      },
      {
        title: "Tonopah Link",
        description:
          "Establish connection to Tonopah (~250 miles southeast) - Remote mining town, critical junction",
        completed: false,
        difficulty: "hard",
      },
      {
        title: "Elko Link",
        description: "Establish connection to Elko (~290 miles northeast)",
        completed: false,
        difficulty: "hard",
      },
      {
        title: "Ely Link",
        description: "Establish connection to Ely (~320 miles east)",
        completed: false,
        difficulty: "hard",
      },
      {
        title: "Great Basin National Park Link",
        description:
          "Establish connection to Great Basin National Park (~360 miles east) - Remote wilderness area near Utah border",
        completed: false,
        difficulty: "hard",
      },
      {
        title: "Las Vegas Link",
        description: "Establish connection to Las Vegas (~450 miles southeast)",
        completed: false,
        difficulty: "hard",
      },
    ],
  },
  {
    id: "nsf-grant-proposal",
    title: "NSF Grant Proposal",
    description:
      "Exploring the possibility of securing National Science Foundation funding for statewide LoRa mesh network infrastructure. The NSF has shown interest in regional connectivity proposals, and this project would involve partnership with NSHE institutions or qualifying non-profits to bring comprehensive mesh coverage to Nevada.",
    status: "planning",
    startDate: new Date("2025-10-09"),
    updates: [
      {
        date: new Date("2025-10-09"),
        title: "Initial Concept",
        description:
          "Identified NSF as potential funding source for statewide LoRa infrastructure. Next steps include reviewing 2025 NSF solicitations and identifying potential NSHE or non-profit partners.",
      },
    ],
  },
];
