export interface FleetItem {
  id: string;
  name: string;
  category: 'double-axle' | 'triple-axle' | 'container';
  capacity: string;
  length: string;
  image: string;
  status: 'Available' | 'On Route';
  features: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  badge?: string;
}

export const COMPANY_DETAILS = {
  name: "Garudan Brothers Transport",
  tagline: "Specialized Double & Triple Axle Trailers & Container Freight Transport",
  establishedYear: 2008,
  stats: {
    tripsCompleted: "85,000+",
    onTimeRate: "99.8%",
    activeFleet: "150+",
    happyClients: "1,200+",
    safetyRating: "100%"
  },
  contactInfo: {
    primaryPhone: "+91 93451 52717",
    secondaryPhone: "+91 63828 84563",
    whatsappNumber: "+91 93451 52717",
    email: "garudanbrothers1251@gmail.com",
    supportEmail: "hariskalyanselvaraj@gmail.com",
    address: "C E B Colony, Back side to Maharisi Medical, Paramathi Rd, Namakkal, Tamil Nadu 637001",
    headOffice: "C E B Colony, Back side to Maharisi Medical, Paramathi Rd, Namakkal, Tamil Nadu 637001",
    operatingHours: "24/7 Dispatch & Fleet Operations"
  }
};

export const FLEET_DATA: FleetItem[] = [
  {
    id: "fl-01",
    name: "Garudan Double Axle High-Bed Trailer",
    category: "double-axle",
    capacity: "22 - 28 Tons",
    length: "32 Feet High-Bed",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    status: "Available",
    features: ["Dual Rear Axles", "Heavy Steel Floor", "Reinforced Chassis", "Twist-Lock Mounts"],
    description: "Versatile double axle trailer ideal for steel coils, industrial raw materials, timber, and medium freight loads."
  },
  {
    id: "fl-02",
    name: "Garudan Triple Axle Super-Duty Heavy Trailer",
    category: "triple-axle",
    capacity: "35 - 42 Tons",
    length: "40 Feet Heavy Bed",
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&q=80&w=800",
    status: "Available",
    features: ["Heavy Triple Axle Suspension", "High Load Capacity", "Air Brakes System", "Tie-Down Winches"],
    description: "Heavy-duty triple axle trailer engineered for heavy structural steel, industrial girders, and dense freight."
  },
  {
    id: "fl-03",
    name: "Garudan 40ft High Cube Container Chassis",
    category: "container",
    capacity: "32 Tons Payload",
    length: "40 Feet Container Chassis",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
    status: "Available",
    features: ["ISO Twist-Lock Chassis", "Customs Seal Compatible", "High Cube Clearance", "Fast Port Drayage"],
    description: "Dedicated 40ft container chassis trailer for seamless port drayage, ICD transfers, and factory delivery."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Double Axle Trailer Freight",
    iconName: "Truck",
    shortDesc: "Dedicated double axle high-bed & flatbed trailer transport for standard and medium heavy freight.",
    fullDesc: "Reliable 22-28 ton payload capacity. Perfect for steel coils, bagged cargo, industrial pipes, and manufacturing goods.",
    highlights: ["22-28 Ton Payload Capacity", "32ft Flatbed & High-Bed Trailers", "Point-to-Point Direct Linehaul", "GPS Telematics Tracking"],
    badge: "Double Axle"
  },
  {
    id: "srv-2",
    title: "Triple Axle Heavy Trailer Run",
    iconName: "ShieldAlert",
    shortDesc: "Heavy duty triple axle trailers engineered for dense loads up to 42 tons without axle load violation.",
    fullDesc: "Maximum legal payload capacity with triple axle weight distribution. Built for heavy girders, stone blocks, and structural steel.",
    highlights: ["35-42 Ton Heavy Load Capacity", "Triple Axle Load Distribution", "Air Suspension Safety", "Interstate Transit Clearances"],
    badge: "Triple Axle"
  },
  {
    id: "srv-3",
    title: "20ft & 40ft Container Trailer Drayage",
    iconName: "Ship",
    shortDesc: "ISO shipping container chassis trailers for 20ft, 40ft, and 40ft High Cube port and ICD movements.",
    fullDesc: "Customs sealed container movement between seaports, inland container depots (ICDs), and factory unloading bays.",
    highlights: ["20ft & 40ft Container Chassis", "Customs Seal Security", "Port Gate Fast-Track Clearance", "Demurrage Reduction"],
    badge: "Containers"
  }
];
