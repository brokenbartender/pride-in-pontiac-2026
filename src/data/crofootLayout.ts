export interface LayoutItem {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  capacity?: number;
  type: "stage" | "social" | "outdoor" | "zone" | "service";
  description?: string;
}

export interface POI {
  id: string;
  name: string;
  x: number;
  y: number;
  type: "restroom" | "accessibility" | "safety" | "vendor" | "food" | "community" | "quiet" | "info";
  description?: string;
}

export const crofootLayout: { rooms: LayoutItem[]; zones: LayoutItem[]; pois: POI[] } = {
  rooms: [
    {
      id: "ballroom",
      name: "Crofoot Ballroom",
      x: 350,
      y: 60,
      width: 450,
      height: 380,
      capacity: 1100,
      type: "stage",
      description: "The main venue space. Features a large stage, wrap-around balcony, and massive GA floor."
    },
    {
      id: "pike",
      name: "The Pike Room",
      x: 50,
      y: 60,
      width: 280,
      height: 180,
      capacity: 250,
      type: "stage",
      description: "Intimate upstairs venue space with fantastic acoustics and a dedicated bar."
    },
    {
      id: "vernors",
      name: "Vernors Room",
      x: 50,
      y: 260,
      width: 280,
      height: 180,
      capacity: 100,
      type: "stage",
      description: "Located on the lower level, this raw space is perfect for underground/intimate sets."
    },
    {
      id: "cafe",
      name: "Crofoot Cafe",
      x: 350,
      y: 460,
      width: 250,
      height: 110,
      capacity: 75,
      type: "social",
      description: "A relaxed gathering spot for drinks, networking, and pre-show meetups."
    },
    {
      id: "patio",
      name: "The Patio",
      x: 620,
      y: 460,
      width: 180,
      height: 110,
      capacity: 150,
      type: "outdoor",
      description: "Open-air social space for fresh air, smoking, and connecting between sets."
    }
  ],

  zones: [
    {
      id: "entrance_saginaw",
      name: "Saginaw St Entrance",
      x: 380,
      y: 575,
      width: 60,
      height: 20,
      type: "zone",
      description: "Main attendee entrance and box office location."
    },
    {
      id: "green_rooms",
      name: "Artist Green Rooms",
      x: 350,
      y: 20,
      width: 450,
      height: 40,
      type: "service",
      description: "Restricted area for performers."
    },
    {
      id: "merch",
      name: "Merch Lounge",
      x: 100,
      y: 460,
      width: 230,
      height: 110,
      type: "social",
      description: "Pick up your favorite artist merchandise."
    }
  ],

  pois: [
    {
      id: "restroom_ballroom",
      name: "Main Restrooms",
      x: 370,
      y: 100,
      type: "restroom",
      description: "Gender-neutral restrooms with ADA accessibility."
    },
    {
      id: "restroom_cafe",
      name: "Cafe Restrooms",
      x: 370,
      y: 530,
      type: "restroom",
      description: "Additional gender-neutral restrooms."
    },
    {
      id: "ada_seating_ballroom",
      name: "ADA Seating Zone",
      x: 400,
      y: 350,
      type: "accessibility",
      description: "Reserved seating with clear sightlines to the main stage."
    },
    {
      id: "first_aid",
      name: "First Aid & Security",
      x: 440,
      y: 540,
      type: "safety",
      description: "Medical assistance and event security operations."
    },
    {
      id: "bar_ballroom",
      name: "Ballroom Bar",
      x: 770,
      y: 220,
      type: "food",
      description: "Full service bar providing water and beverages."
    },
    {
      id: "food_patio",
      name: "Patio Food Trucks",
      x: 710,
      y: 515,
      type: "food",
      description: "Local queer-owned food vendors."
    },
    {
      id: "quiet_zone",
      name: "Sensory Quiet Room",
      x: 190,
      y: 350,
      type: "quiet",
      description: "Low-stimulation decompression zone with soft seating and dim lighting."
    },
    {
      id: "vendor_market",
      name: "Queer Marketplace",
      x: 215,
      y: 515,
      type: "vendor",
      description: "Shop local LGBTQ+ artists, makers, and non-profits."
    },
    {
      id: "info_desk",
      name: "Info & Volunteer Desk",
      x: 430,
      y: 500,
      type: "info",
      description: "Lost & found, schedules, and event support."
    }
  ]
};

