export interface WaterNeeds {
  level: string;
  frequency: string;
}

export interface TemperatureRange {
  min: number;
  max: number;
}

export interface Nutrition {
  calories: string;
  protein: string;
  vitaminC?: string;
  vitaminD?: string;
  vitaminA?: string;
  potassium?: string;
}

export interface PlantItem {
  id: string;
  name: string;
  image: string;
  description: string;
  growthDuration: string;
  waterNeeds: WaterNeeds;
  sunlightNeeds: string;
  temperatureRange: TemperatureRange;
  soilType: string;
  pests: string[];
  diseases: string[];
  plantingInstructions: string;
  harvestInstructions: string;
  nutrition: Nutrition;
  history: string;
}
