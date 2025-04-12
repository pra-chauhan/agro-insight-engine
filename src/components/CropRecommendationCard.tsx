
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Sprout, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RecommendationResult } from '@/services/recommendationService';
import { cropData } from '@/data/cropData';

interface CropRecommendationCardProps {
  recommendation: RecommendationResult;
}

const CropRecommendationCard: React.FC<CropRecommendationCardProps> = ({ recommendation }) => {
  const { cropName, suitabilityScore, estimatedYield } = recommendation;
  const crop = cropData[cropName.toLowerCase()];

  const getBadgeColor = (score: number) => {
    if (score >= 85) return "bg-green-500 hover:bg-green-600";
    if (score >= 70) return "bg-green-400 hover:bg-green-500";
    if (score >= 60) return "bg-yellow-500 hover:bg-yellow-600";
    if (score >= 50) return "bg-yellow-400 hover:bg-yellow-500";
    return "bg-red-400 hover:bg-red-500";
  };

  return (
    <Card className="w-full card-hover">
      <div className="h-40 overflow-hidden rounded-t-lg">
        <img 
          src={crop.imageUrl} 
          alt={cropName} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-primary" />
            {cropName}
          </CardTitle>
          <Badge className={getBadgeColor(suitabilityScore)}>
            {suitabilityScore}% Match
          </Badge>
        </div>
        <CardDescription className="flex justify-between items-center">
          <span>Estimated Yield</span>
          <span className="font-medium text-foreground">{estimatedYield} kg/ha</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Suitability Score</span>
            <span>{suitabilityScore}%</span>
          </div>
          <Progress value={suitabilityScore} className="h-2" />
        </div>
        
        <div className="text-sm text-muted-foreground line-clamp-3">
          {crop.description}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Info className="h-4 w-4" />
                Details
              </Button>
            </TooltipTrigger>
            <TooltipContent className="w-80 p-4">
              <div className="space-y-2">
                <p className="font-medium">Growing Requirements:</p>
                <ul className="text-sm space-y-1">
                  <li>Soil pH: {crop.soil_ph.min} - {crop.soil_ph.max} (optimal: {crop.soil_ph.optimal})</li>
                  <li>Temperature: {crop.temperature.min}°C - {crop.temperature.max}°C</li>
                  <li>Rainfall: {crop.rainfall.min} - {crop.rainfall.max} mm</li>
                  <li>Nitrogen: {crop.nitrogen.min} - {crop.nitrogen.max} kg/ha</li>
                  <li>Phosphorus: {crop.phosphorus.min} - {crop.phosphorus.max} kg/ha</li>
                  <li>Potassium: {crop.potassium.min} - {crop.potassium.max} kg/ha</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default CropRecommendationCard;
