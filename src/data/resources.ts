export interface Resource {
  title: string;
  url: string;
  description: string;
}

export interface ResourceCategory {
  category: string;
  description?: string;
  resources: Resource[];
}

export const resourcesData: ResourceCategory[] = [
  {
    category: "Official Meshtastic Resources",
    description:
      "Essential links to official Meshtastic documentation and tools",
    resources: [
      {
        title: "Meshtastic Official Website",
        url: "https://meshtastic.org",
        description:
          "The official Meshtastic project website with comprehensive documentation and guides.",
      },
      {
        title: "Meshtastic Documentation",
        url: "https://meshtastic.org/docs/introduction",
        description:
          "Complete documentation covering installation, configuration, and advanced features.",
      },
      {
        title: "Meshtastic GitHub",
        url: "https://github.com/meshtastic",
        description:
          "Official GitHub organization containing firmware, apps, and related projects.",
      },
    ],
  },
  {
    category: "Community & Support",
    description: "Connect with the Meshtastic community",
    resources: [
      {
        title: "Meshtastic Discord",
        url: "https://discord.gg/ktMAKGBnBs",
        description:
          "Active community Discord server for real-time help and discussion.",
      },
      {
        title: "Meshtastic Forum",
        url: "https://meshtastic.discourse.group",
        description: "Community forum for longer-form discussions and support.",
      },
    ],
  },
  {
    category: "Apps & Tools",
    description: "Software to interact with your Meshtastic devices",
    resources: [
      {
        title: "Meshtastic Android App",
        url: "https://play.google.com/store/apps/details?id=com.geeksville.mesh",
        description:
          "Official Android app for configuring and using Meshtastic devices.",
      },
      {
        title: "Meshtastic iOS App",
        url: "https://apps.apple.com/us/app/meshtastic/id1586432531",
        description: "Official iOS app for iPhone and iPad.",
      },
      {
        title: "Meshtastic Web Flasher",
        url: "https://flasher.meshtastic.org",
        description: "Browser-based tool to flash firmware to your devices.",
      },
    ],
  },
  {
    category: "Hardware & Equipment",
    description: "Where to find compatible devices and accessories",
    resources: [
      {
        title: "MeshEnvy Equipment Guide",
        url: "/equipment",
        description:
          "Our curated list of recommended Meshtastic hardware to get started.",
      },
      {
        title: "Supported Hardware List",
        url: "https://meshtastic.org/docs/hardware/devices/",
        description: "Official list of all supported hardware devices.",
      },
    ],
  },
  {
    category: "Learning Resources",
    description: "Tutorials, guides, and educational content",
    resources: [
      {
        title: "Getting Started Guide",
        url: "https://meshtastic.org/docs/getting-started",
        description:
          "Step-by-step guide to set up your first Meshtastic device.",
      },
      {
        title: "LoRa Technology Explained",
        url: "https://meshtastic.org/docs/overview/radio-settings",
        description: "Understanding the radio technology behind Meshtastic.",
      },
    ],
  },
];
