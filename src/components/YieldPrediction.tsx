
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from "lucide-react";
import { RecommendationResult } from '@/services/recommendationService';

interface YieldPredictionProps {
  recommendations: RecommendationResult[];
}

const YieldPrediction: React.FC<YieldPredictionProps> = ({ recommendations }) => {
  // Prepare data for chart (top 5 recommendations)
  const chartData = recommendations.slice(0, 5).map(rec => ({
    name: rec.cropName,
    yield: rec.estimatedYield,
    suitability: rec.suitabilityScore
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Yield Prediction
        </CardTitle>
        <CardDescription>
          Estimated yield based on your soil data and local conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={60} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left"
                label={{ value: 'Yield (kg/ha)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                domain={[0, 100]}
                label={{ value: 'Suitability (%)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'yield') return [`${value} kg/ha`, 'Estimated Yield'];
                  if (name === 'suitability') return [`${value}%`, 'Suitability Score'];
                  return [value, name];
                }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="yield" fill="#2E7D32" name="Estimated Yield" />
              <Bar yAxisId="right" dataKey="suitability" fill="#1976D2" name="Suitability" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default YieldPrediction;
