
export interface CropRequirement {
  soil_ph: { min: number; max: number; optimal: number };
  temperature: { min: number; max: number; optimal: number };
  rainfall: { min: number; max: number; optimal: number };
  nitrogen: { min: number; max: number; optimal: number };
  phosphorus: { min: number; max: number; optimal: number };
  potassium: { min: number; max: number; optimal: number };
  yield_factors: {
    base_yield: number;
    rainfall_factor: number;
    temperature_factor: number;
    soil_factor: number;
  };
  description: string;
  imageUrl: string;
}

export interface CropDatabase {
  [key: string]: CropRequirement;
}

export const cropData: CropDatabase = {
  "rice": {
    "soil_ph": {"min": 5.5, "max": 6.5, "optimal": 6.0},
    "temperature": {"min": 20, "max": 35, "optimal": 25},
    "rainfall": {"min": 1000, "max": 2000, "optimal": 1500},
    "nitrogen": {"min": 80, "max": 120, "optimal": 100},
    "phosphorus": {"min": 30, "max": 60, "optimal": 45},
    "potassium": {"min": 40, "max": 80, "optimal": 60},
    "yield_factors": {
      "base_yield": 3500, // kg/hectare
      "rainfall_factor": 0.8,
      "temperature_factor": 0.9,
      "soil_factor": 0.85
    },
    "description": "Rice is a staple food for over half the world's population and thrives in warm, wet conditions. It requires significant water and careful nutrient management.",
    "imageUrl": "https://images.unsplash.com/photo-1536054880414-bb47cf4b3544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGZpZWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  "wheat": {
    "soil_ph": {"min": 6.0, "max": 7.5, "optimal": 6.5},
    "temperature": {"min": 15, "max": 25, "optimal": 20},
    "rainfall": {"min": 500, "max": 700, "optimal": 600},
    "nitrogen": {"min": 100, "max": 150, "optimal": 120},
    "phosphorus": {"min": 50, "max": 80, "optimal": 60},
    "potassium": {"min": 60, "max": 100, "optimal": 80},
    "yield_factors": {
      "base_yield": 3000,
      "rainfall_factor": 0.7,
      "temperature_factor": 0.85,
      "soil_factor": 0.9
    },
    "description": "Wheat is one of the world's most important cereal crops, adaptable to a wide range of conditions. It performs best in well-drained soils with moderate rainfall.",
    "imageUrl": "https://images.unsplash.com/photo-1467045733862-2c99563396cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  "corn": {
    "soil_ph": {"min": 5.8, "max": 7.0, "optimal": 6.5},
    "temperature": {"min": 18, "max": 32, "optimal": 25},
    "rainfall": {"min": 500, "max": 800, "optimal": 650},
    "nitrogen": {"min": 150, "max": 200, "optimal": 180},
    "phosphorus": {"min": 50, "max": 90, "optimal": 70},
    "potassium": {"min": 80, "max": 150, "optimal": 100},
    "yield_factors": {
      "base_yield": 4500,
      "rainfall_factor": 0.75,
      "temperature_factor": 0.9,
      "soil_factor": 0.8
    },
    "description": "Corn (maize) is a versatile crop used for food, feed, and fuel. It requires warm conditions and moderate to high levels of nutrients for optimal growth.",
    "imageUrl": "https://images.unsplash.com/photo-1589918321263-ff9abee74130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  "soybeans": {
    "soil_ph": {"min": 6.0, "max": 7.0, "optimal": 6.5},
    "temperature": {"min": 20, "max": 30, "optimal": 25},
    "rainfall": {"min": 450, "max": 700, "optimal": 550},
    "nitrogen": {"min": 30, "max": 60, "optimal": 45},
    "phosphorus": {"min": 60, "max": 100, "optimal": 80},
    "potassium": {"min": 100, "max": 150, "optimal": 125},
    "yield_factors": {
      "base_yield": 2800,
      "rainfall_factor": 0.7,
      "temperature_factor": 0.85,
      "soil_factor": 0.8
    },
    "description": "Soybeans are a legume crop rich in protein and oils. They have nitrogen-fixing abilities that help enrich the soil and thrive in well-drained conditions.",
    "imageUrl": "https://images.unsplash.com/photo-1628352081089-a90d94972903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  "cotton": {
    "soil_ph": {"min": 5.8, "max": 8.0, "optimal": 6.5},
    "temperature": {"min": 20, "max": 35, "optimal": 28},
    "rainfall": {"min": 700, "max": 1300, "optimal": 900},
    "nitrogen": {"min": 120, "max": 180, "optimal": 150},
    "phosphorus": {"min": 40, "max": 80, "optimal": 60},
    "potassium": {"min": 80, "max": 140, "optimal": 100},
    "yield_factors": {
      "base_yield": 1200,
      "rainfall_factor": 0.65,
      "temperature_factor": 0.8,
      "soil_factor": 0.75
    },
    "description": "Cotton is a soft, fluffy fiber crop that grows in a boll around the seeds. It requires warm temperatures, abundant sunshine, and moderate rainfall.",
    "imageUrl": "https://images.unsplash.com/photo-1595269402061-2aeb6037114e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  "potato": {
    "soil_ph": {"min": 5.0, "max": 6.5, "optimal": 5.8},
    "temperature": {"min": 15, "max": 25, "optimal": 18},
    "rainfall": {"min": 500, "max": 700, "optimal": 600},
    "nitrogen": {"min": 100, "max": 180, "optimal": 150},
    "phosphorus": {"min": 80, "max": 150, "optimal": 100},
    "potassium": {"min": 150, "max": 250, "optimal": 200},
    "yield_factors": {
      "base_yield": 25000,
      "rainfall_factor": 0.75,
      "temperature_factor": 0.8,
      "soil_factor": 0.9
    },
    "description": "Potatoes are a starchy tuber crop that's a staple food in many regions. They grow best in loose, well-drained soil and cool but frost-free conditions.",
    "imageUrl": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  }
};
