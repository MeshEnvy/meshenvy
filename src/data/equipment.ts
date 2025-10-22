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
];
