import {
  faWandMagicSparkles,
  faImage,
  faTrophy,
  faBell,
  faShieldBlank,
  faCrown,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";

export const ProductsOptions = [
  {
    title: "Mint engine",
    description: "Production Minting smart Contract",
    icon: faWandMagicSparkles,
    link: "/products/mint-engine",
  },
  {
    title: "NFT generator",
    description: "Intitutive UI for Generating NFT art",
    icon: faImage,
    link: "/products/nft-generator",
  },
  {
    title: "Rarity Rankings",
    description: "Generate rarity rankings for your NFT collection",
    icon: faTrophy,
    link: "/products/nft-rarity-ranking",
  },
  {
    title: "Sales Bot & Trades Tracker",
    description: "Get a Sales page + Discord Sale Alert Bot",
    icon: faBell,
    link: "/products/nft-sales-bot-recent-trades",
  },
  {
    title: "Bot Protection & Gating",
    description: "On-chain-Bot-proof Minting",
    icon: faShieldBlank,
    link: "/products/bot-protection-gating",
  },
  {
    title: "Nova Pass Discord Verification",
    description: "Automatic Nft Holder Role Assignment",
    icon: faCrown,
    link: "/products/novapass-discord-nft-verification",
  },
  {
    title: "NFT Collection Analysis & Reporting",
    description: "Intelligence on holders & transactions",
    icon: faWaveSquare,
    link: "/products/nft-projects-analysis-reporting",
  },
];

export const OptionsMenu = [
  { label: "Technology", to: "/" },
  { label: "Roadmap", to: "/" },
  { label: "Careers", to: "/" },
  { label: "Doxxed", to: "/" },
];
