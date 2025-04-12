
import { cropData, CropRequirement } from '../data/cropData';

export interface SoilData {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

export interface WeatherData {
  temperature: number;
  rainfall: number;
}

export interface RecommendationResult {
  cropName: string;
  suitabilityScore: number;
  estimatedYield: number;
}

// Calculate how suitable a parameter is based on min, max, and optimal values
const calculateParameterScore = (
  value: number,
  requirement: { min: number; max: number; optimal: number }
): number => {
  if (value < requirement.min || value > requirement.max) {
    // Outside viable range
    return 0;
  }
  
  // Distance from optimal (normalized)
  const range = Math.max(requirement.max - requirement.min, 1);
  const distance = Math.abs(value - requirement.optimal) / range;
  
  // Convert to score (1 is perfect, 0 is unsuitable)
  return Math.max(0, 1 - distance);
};

// Calculate crop suitability based on soil and weather conditions
export const calculateCropSuitability = (
  soilData: SoilData,
  weatherData: WeatherData
): RecommendationResult[] => {
  const scores: RecommendationResult[] = [];
  
  for (const [cropName, requirements] of Object.entries(cropData)) {
    // Calculate individual parameter scores
    const phScore = calculateParameterScore(soilData.ph, requirements.soil_ph);
    const temperatureScore = calculateParameterScore(weatherData.temperature, requirements.temperature);
    const rainfallScore = calculateParameterScore(weatherData.rainfall, requirements.rainfall);
    const nitrogenScore = calculateParameterScore(soilData.nitrogen, requirements.nitrogen);
    const phosphorusScore = calculateParameterScore(soilData.phosphorus, requirements.phosphorus);
    const potassiumScore = calculateParameterScore(soilData.potassium, requirements.potassium);
    
    // Calculate total suitability score (weighted average)
    const totalScore = (
      phScore * 0.15 +
      temperatureScore * 0.2 +
      rainfallScore * 0.2 +
      nitrogenScore * 0.15 +
      phosphorusScore * 0.15 +
      potassiumScore * 0.15
    );
    
    // Calculate estimated yield
    const estimatedYield = calculateEstimatedYield(
      requirements,
      {
        phScore,
        temperatureScore,
        rainfallScore,
        nitrogenScore,
        phosphorusScore,
        potassiumScore
      }
    );
    
    scores.push({
      cropName,
      suitabilityScore: Math.round(totalScore * 100),
      estimatedYield
    });
  }
  
  // Sort by suitability score (highest first)
  return scores.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
};

interface ScoreFactors {
  phScore: number;
  temperatureScore: number;
  rainfallScore: number;
  nitrogenScore: number;
  phosphorusScore: number;
  potassiumScore: number;
}

// Calculate estimated yield based on crop requirements and actual conditions
const calculateEstimatedYield = (
  cropRequirements: CropRequirement,
  scores: ScoreFactors
): number => {
  const { base_yield, rainfall_factor, temperature_factor, soil_factor } = cropRequirements.yield_factors;
  
  // Calculate environmental modifiers
  const rainfallModifier = scores.rainfallScore * rainfall_factor + (1 - rainfall_factor);
  const temperatureModifier = scores.temperatureScore * temperature_factor + (1 - temperature_factor);
  
  // Calculate soil modifiers (average of ph, N, P, K)
  const soilScoreAvg = (scores.phScore + scores.nitrogenScore + scores.phosphorusScore + scores.potassiumScore) / 4;
  const soilModifier = soilScoreAvg * soil_factor + (1 - soil_factor);
  
  // Calculate final yield
  const estimatedYield = base_yield * rainfallModifier * temperatureModifier * soilModifier;
  
  return Math.round(estimatedYield);
};

// Get mock weather data (in a real app, this would come from an API)
export const getWeatherData = (latitude: number, longitude: number): WeatherData => {
  // Mock data - in a real app, this would call a weather API
  return {
    temperature: 25, // °C
    rainfall: 1200, // mm per year
  };
};
