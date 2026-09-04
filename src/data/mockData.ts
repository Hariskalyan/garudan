export interface FleetItem {
  id: string;
  name: string;
  category: 'double-axle' | 'triple-axle' | 'container' | 'tanker';
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
  name: "Garudan Logistics & Transport",
  tagline: "Specialized Double & Triple Axle Trailers & Container Freight Transport",
  establishedYear: 2008,
  leadership: {
    name: "T. Naveen",
    title: "Managing Director",
    image: "/images/naveen-owner.jpg",
    bio: "Under the leadership of Managing Director T. Naveen, Garudan Logistics & Transport operates an elite company-owned fleet of heavy trailers, container chassis, and bulk liquid tankers committed to 100% safe, on-time delivery across South India and pan-India routes.",
    phone: "+91 93451 52717"
  },
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
    address: "No.6/1065 P.S.A Complex, E.B Colony, Paramathi Road, Namakkal, Tamil Nadu",
    headOffice: "No.6/1065 P.S.A Complex, E.B Colony, Paramathi Road, Namakkal, Tamil Nadu",
    operatingHours: "24/7 Dispatch & Fleet Operations"
  }
};

export const FLEET_DATA: FleetItem[] = [
  {
    id: "fl-01",
    name: "Garudan Heavy Duty 5525 Trailer",
    category: "triple-axle",
    capacity: "40 - 55 Tons Payload",
    length: "40 Feet Flatbed / High-Bed",
    image: "/images/garudan-5525-trailer.jpg",
    status: "Available",
    features: ["Heavy Duty Engine Performance", "Safety Side Railings", "Reinforced Triple-Axle Chassis", "High-Load Steel Deck"],
    description: "Our flagship heavy tractor-trailer designed for heavy industrial loads, structural steel, and long-haul interstate freight."
  },
  {
    id: "fl-02",
    name: "Garudan Express Goods Carrier Fleet",
    category: "double-axle",
    capacity: "25 - 32 Tons Payload",
    length: "32 Feet High-Bed",
    image: "/images/garudan-fleet-pair.jpg",
    status: "Available",
    features: ["Custom Garudan Branding", "All-India Heavy Transit Permit", "Dual GPS Telematics", "Air Suspension System"],
    description: "Company-owned express goods carriers engineered for reliable point-to-point raw material and manufactured freight movement."
  },
  {
    id: "fl-03",
    name: "Garudan Bulk Liquid & Gas Tanker",
    category: "tanker",
    capacity: "28 - 35 Tons / Liquid Volume",
    length: "High-Capacity Sealed Tanker",
    image: "/images/garudan-gas-carrier.jpg",
    status: "Available",
    features: ["Hazardous Cargo Certified", "Safety Pressure Valves", "24/7 Telematics & Speed Limiter", "Government Duty Compliant"],
    description: "Specialized bulk gas and liquid chemical transporter equipped with advanced pressure monitoring and full safety compliance."
  },
  {
    id: "fl-04",
    name: "Garudan Heavy Goods High-Bed Truck",
    category: "double-axle",
    capacity: "22 - 28 Tons Payload",
    length: "32 Feet Open Deck",
    image: "/images/garudan-front-truck.jpg",
    status: "Available",
    features: ["Heavy Chassis Build", "Custom Eagle Emblem Front", "Tie-Down Racks & Winches", "Interstate Route Permit"],
    description: "Heavy-duty goods carrier for fast dispatch of industrial machinery, timber, pipes, and bulk commodities."
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
