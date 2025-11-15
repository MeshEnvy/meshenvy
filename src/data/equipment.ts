export interface EquipmentProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  tip?: string;
  buyUrl: string;
}

export const equipmentData: EquipmentProduct[] = [
  {
    id: "sensecap-t1000-e",
    title: "SenseCAP Card Tracker T1000-E for Meshtastic",
    description:
      "High-performance and long-lasting. As small as a credit card, effortlessly fitting in your pocket. Uses the Meshtastic iOS or Android companion app to configure and send messages.",
    price: "$40",
    image: "/sensecap-t1000-e.jpg",
    imageAlt: "SenseCAP Card Tracker T1000-E for Meshtastic",
    tip: "Buy 2 units so you can test basic communication without needing anyone else around!",
    buyUrl:
      "https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html",
  },
  {
    id: "wismesh-repeater-mini",
    title: "WisMesh Repeater Mini",
    description:
      "Ready-to-use off-grid Meshtastic repeater with 3200mAh battery and solar panel. Become a mesh network hero in your community.",
    price: "$99",
    image: "/wismesh-repeater-mini-and-antenna.webp",
    imageAlt: "WisMesh Repeater Mini and Antenna",
    buyUrl:
      "https://store.rakwireless.com/products/wishmesh-meshtastic-solar-repeater-mini",
  },
  {
    id: "lilygo-t-deck",
    title: "LILYGO® T-Deck",
    description:
      "All-in-one handheld Meshtastic communicator with a mechanical keyboard, IPS display, and built-in speaker for true field readiness.",
    price: "$110",
    image: "/t-deck-whitekey.webp",
    imageAlt: "LILYGO T-Deck front view",
    tip: "Pair with a SenseCAP tracker so you have both a handheld and ultra-portable device.",
    buyUrl:
      "https://store.rokland.com/products/lilygo-t-deck-portable-microcontroller-programmer-lora-915-mhz-h642?variant=43009954906195",
  },
];
