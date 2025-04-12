
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TestTube, DropletHalf, Leaf } from "lucide-react";
import { SoilData } from '@/services/recommendationService';
import { toast } from "sonner";

interface SoilDataFormProps {
  onSubmit: (data: SoilData) => void;
}

const SoilDataForm: React.FC<SoilDataFormProps> = ({ onSubmit }) => {
  const [soilData, setSoilData] = useState<SoilData>({
    ph: 6.5,
    nitrogen: 100,
    phosphorus: 50,
    potassium: 80
  });

  const handleChange = (name: keyof SoilData, value: number) => {
    setSoilData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(soilData);
    toast.success("Soil data submitted successfully!");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TestTube className="h-5 w-5 text-primary" />
          Soil Data Input
        </CardTitle>
        <CardDescription>
          Enter your soil test results to get accurate crop recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="soil-ph" className="flex items-center gap-2">
                  <DropletHalf className="h-4 w-4" />
                  Soil pH
                </Label>
                <span className="text-sm font-medium">{soilData.ph}</span>
              </div>
              <Slider
                id="soil-ph"
                min={4.0}
                max={9.0}
                step={0.1}
                value={[soilData.ph]}
                onValueChange={(values) => handleChange('ph', values[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Acidic (4.0)</span>
                <span>Neutral (7.0)</span>
                <span>Alkaline (9.0)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="nitrogen" className="flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    Nitrogen (N)
                  </Label>
                  <span className="text-sm font-medium">{soilData.nitrogen} kg/ha</span>
                </div>
                <div className="pt-1">
                  <Input
                    id="nitrogen"
                    type="number"
                    value={soilData.nitrogen}
                    onChange={(e) => handleChange('nitrogen', Number(e.target.value))}
                    min={0}
                    max={300}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="phosphorus" className="flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    Phosphorus (P)
                  </Label>
                  <span className="text-sm font-medium">{soilData.phosphorus} kg/ha</span>
                </div>
                <div className="pt-1">
                  <Input
                    id="phosphorus"
                    type="number"
                    value={soilData.phosphorus}
                    onChange={(e) => handleChange('phosphorus', Number(e.target.value))}
                    min={0}
                    max={200}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="potassium" className="flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    Potassium (K)
                  </Label>
                  <span className="text-sm font-medium">{soilData.potassium} kg/ha</span>
                </div>
                <div className="pt-1">
                  <Input
                    id="potassium"
                    type="number"
                    value={soilData.potassium}
                    onChange={(e) => handleChange('potassium', Number(e.target.value))}
                    min={0}
                    max={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <CardFooter className="px-0 pt-4">
            <Button type="submit" className="w-full">Generate Recommendations</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default SoilDataForm;
