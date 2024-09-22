import {
  LeafIcon,
  SnowflakeIcon,
  BeakerIcon,
  ThermometerIcon,
  WrenchIcon,
  VibrateIcon,
  HdmiPortIcon,
  NetworkIcon,
  CuboidIcon,
} from "./src/Components/Icons/Icons"; 

const materials = [
  {
    name: "Natural Rubber",
    description:
      "Known for its excellent elasticity and high resilience, natural rubber is ideal for applications requiring flexibility and wear resistance.",
    Icon: LeafIcon,
    iconBg: "bg-primary",
  },
  {
    name: "EPDM",
    description:
      "EPDM (Ethylene Propylene Diene Monomer) rubber is renowned for its outstanding weather resistance, making it perfect for outdoor applications.",
    Icon: SnowflakeIcon,
    iconBg: "bg-secondary",
  },
  {
    name: "Neoprene",
    description:
      "Neoprene rubber offers excellent resistance to oils, chemicals, and weathering, making it a versatile choice for a wide range of industries.",
    Icon: BeakerIcon,
    iconBg: "bg-muted",
  },
  {
    name: "Silicone",
    description:
      "Silicone rubber is known for its superior temperature resistance, remaining flexible in extreme heat and cold, making it suitable for demanding environments.",
    Icon: ThermometerIcon,
    iconBg: "bg-primary",
  },
  {
    name: "Nitrile",
    description:
      "Nitrile rubber, or Buna-N, is highly resistant to oils, fuels, and other chemicals, making it the go-to material for automotive and industrial applications.",
    Icon: WrenchIcon,
    iconBg: "bg-secondary",
  },
  {
    name: "Viton Rubber",
    description:
      "Viton rubber is a high-performance fluoroelastomer known for its exceptional chemical resistance, especially in harsh environments.",
    Icon: VibrateIcon,
    iconBg: "bg-secondary",
  },
  {
    name: "HDPE",
    description:
      "HDPE (High-Density Polyethylene) is a strong and durable material, resistant to impact, chemicals, and weather, making it ideal for heavy-duty applications.",
    Icon: HdmiPortIcon,
    iconBg: "bg-secondary",
  },
  {
    name: "Nylon",
    description:
      "Nylon is a versatile synthetic polymer, valued for its high strength, abrasion resistance, and low friction properties, suitable for various industrial uses.",
    Icon: NetworkIcon,
    iconBg: "bg-secondary",
  },
  {
    name: "PU",
    description:
      "Polyurethane offers excellent abrasion resistance, flexibility, and resilience, making it a popular choice for applications requiring toughness and durability.",
    Icon: CuboidIcon,
    iconBg: "bg-secondary",
  },
];

export default materials;
