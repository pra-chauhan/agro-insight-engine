
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Leaf, 
  Plant, 
  BarChart3, 
  CloudSun, 
  ArrowRight, 
  Search,
  Sprout,
  Droplets,
  Sun,
  Wind,
  ThermometerSun
} from "lucide-react";

const AlternativeLanding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">AgroInsight</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/welcome" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Link to="/">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with angled design */}
      <section className="relative bg-gradient-to-br from-primary/10 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">Smart Farming Solutions</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Revolutionize Your Farming with Data-Driven Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Make smarter decisions about crop selection, resource management, and yield optimization with AI-powered agricultural intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    Try Crop Recommendations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/welcome">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
              <div className="relative bg-card border rounded-xl p-6 shadow-xl">
                <div className="text-2xl font-bold mb-4">Soil Analysis Results</div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Nitrogen (N)</div>
                      <div className="text-xl font-semibold">37 mg/kg</div>
                    </div>
                    <div className="bg-background p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Phosphorus (P)</div>
                      <div className="text-xl font-semibold">42 mg/kg</div>
                    </div>
                    <div className="bg-background p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Potassium (K)</div>
                      <div className="text-xl font-semibold">198 mg/kg</div>
                    </div>
                    <div className="bg-background p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">pH Level</div>
                      <div className="text-xl font-semibold">6.8</div>
                    </div>
                  </div>
                  <Alert className="bg-primary/10 border-primary/20">
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">Excellent soil</span> for growing wheat, barley, and oats.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto bg-card rounded-xl p-6 shadow-sm border relative -mt-8 z-20">
            <h2 className="text-xl font-semibold mb-4 text-center">Find Optimal Crops for Your Farm</h2>
            <div className="flex gap-2">
              <div className="flex-1">
                <Input type="text" placeholder="Enter your location" className="w-full" />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive agricultural insights to help maximize your farm's potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary overflow-hidden transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Smart Crop Selection</CardTitle>
                <CardDescription>
                  AI-powered recommendations based on soil composition, climate conditions, and historical yield data
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-secondary overflow-hidden transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl mb-2">Predictive Analytics</CardTitle>
                <CardDescription>
                  Forecast harvest yields, identify potential issues, and optimize resource allocation
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-accent overflow-hidden transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <CloudSun className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl mb-2">Climate Insights</CardTitle>
                <CardDescription>
                  Adapt to changing weather patterns with real-time data and long-term climate trend analysis
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather & Climate Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">Climate Intelligence</Badge>
              <h2 className="text-3xl font-bold mb-4">Advanced Weather Integration</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform combines historical climate data, real-time weather information, and predictive models to help you make informed decisions.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sun className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Seasonal Forecasting</h3>
                    <p className="text-sm text-muted-foreground">Plan your planting and harvesting schedule with confidence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplets className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Rainfall Prediction</h3>
                    <p className="text-sm text-muted-foreground">Optimize irrigation based on expected precipitation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ThermometerSun className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Temperature Analysis</h3>
                    <p className="text-sm text-muted-foreground">Protect crops from extreme temperature variations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Wind className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Wind Pattern Monitoring</h3>
                    <p className="text-sm text-muted-foreground">Plan for proper crop placement and protection</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-[#e1f5fe] to-[#bbdefb] dark:from-blue-900/30 dark:to-blue-800/30 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Current Temperature</p>
                      <h3 className="text-4xl font-bold mt-2">24°C</h3>
                    </div>
                    <ThermometerSun className="h-10 w-10" />
                  </div>
                  <p className="text-sm mt-4">Optimal for corn growth</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] dark:from-green-900/30 dark:to-green-800/30 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Humidity</p>
                      <h3 className="text-4xl font-bold mt-2">65%</h3>
                    </div>
                    <Droplets className="h-10 w-10" />
                  </div>
                  <p className="text-sm mt-4">Good for vegetable crops</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#fff9c4] to-[#fff59d] dark:from-yellow-900/30 dark:to-yellow-800/30 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Sunlight</p>
                      <h3 className="text-4xl font-bold mt-2">8.5 hrs</h3>
                    </div>
                    <Sun className="h-10 w-10" />
                  </div>
                  <p className="text-sm mt-4">Excellent for sunflowers</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] dark:from-cyan-900/30 dark:to-cyan-800/30 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Wind Speed</p>
                      <h3 className="text-4xl font-bold mt-2">12 km/h</h3>
                    </div>
                    <Wind className="h-10 w-10" />
                  </div>
                  <p className="text-sm mt-4">Safe for all crops</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Transform Your Farming Approach?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of farmers who are already using AgroInsight Engine to increase yields and optimize resource utilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" variant="secondary">
                  Start Free Analysis
                </Button>
              </Link>
              <Link to="/welcome">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Agricultural Insights</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest farming techniques, crop recommendations, and agricultural news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Label htmlFor="email" className="sr-only">Email address</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
              </div>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 mt-auto">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-bold text-lg">AgroInsight</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Empowering farmers with data-driven agricultural insights and recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Crop Recommendations</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Yield Predictions</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Weather Integration</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Soil Analysis</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Knowledge Base</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">contact@agroinsight.example</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
              © 2025 AgroInsight. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlternativeLanding;
