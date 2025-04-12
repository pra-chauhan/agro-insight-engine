
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Thermometer, Droplets, Wind } from "lucide-react";
import { WeatherData } from '@/services/recommendationService';

interface WeatherWidgetProps {
  data: WeatherData;
  location?: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data, location = "Your Location" }) => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-yellow-500" />
          Weather Data
        </CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-md">
            <Thermometer className="h-6 w-6 text-red-500 mb-2" />
            <p className="text-xs text-muted-foreground">Temperature</p>
            <p className="text-2xl font-bold">{data.temperature}°C</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-md">
            <Droplets className="h-6 w-6 text-blue-500 mb-2" />
            <p className="text-xs text-muted-foreground">Annual Rainfall</p>
            <p className="text-2xl font-bold">{data.rainfall} mm</p>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="text-xs text-muted-foreground mb-1">Weather Conditions</div>
          <div className="text-sm">
            Favorable for crop growth with moderate temperature and adequate rainfall.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
