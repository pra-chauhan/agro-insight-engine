import React, { useState } from 'react';
import SoilDataForm from '@/components/SoilDataForm';
import WeatherWidget from '@/components/WeatherWidget';
import CropRecommendationCard from '@/components/CropRecommendationCard';
import YieldPrediction from '@/components/YieldPrediction';
import { SoilData, WeatherData, getWeatherData, calculateCropSuitability, RecommendationResult } from '@/services/recommendationService';
import { Leaf, ArrowDown } from 'lucide-react';

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 25,
    rainfall: 1200
  });
  
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [hasRecommendations, setHasRecommendations] = useState(false);

  const handleSoilDataSubmit = (soilData: SoilData) => {
    // In a real app, we would fetch weather data based on location
    // For now, we'll use mock data
    const newWeatherData = getWeatherData(0, 0); // Placeholder coordinates
    setWeatherData(newWeatherData);
    
    // Calculate crop recommendations
    const results = calculateCropSuitability(soilData, newWeatherData);
    setRecommendations(results);
    setHasRecommendations(true);
    
    // Scroll to recommendations section
    setTimeout(() => {
      document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 gradient-bg">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              AgroInsight Engine
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Make data-driven decisions with smart crop recommendations, yield predictions, 
              and actionable insights based on your soil conditions and local weather.
            </p>
            
            <div className="flex items-center justify-center w-full gap-2">
              <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
              <span className="text-sm font-medium">Enter your soil data below</span>
              <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <SoilDataForm onSubmit={handleSoilDataSubmit} />
            </div>
            <div className="md:col-span-1">
              <WeatherWidget data={weatherData} location="Your Farm Location" />
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      {hasRecommendations && (
        <section id="recommendations" className="py-12 bg-muted/50">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Crop Recommendations</h2>
            
            <div className="mb-12">
              <YieldPrediction recommendations={recommendations} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.slice(0, 6).map((recommendation) => (
                <CropRecommendationCard 
                  key={recommendation.cropName}
                  recommendation={recommendation}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-medium">AgroInsight Engine</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with advanced agricultural science and machine learning
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
