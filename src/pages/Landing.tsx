
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Seedling, BarChart3, CloudSun, Award, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Welcome to AgroInsight Engine
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your intelligent farming assistant for optimal crop selection and yield prediction
            </p>
            
            <Link to="/">
              <Button size="lg" className="mt-4 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make data-driven decisions with our suite of agricultural tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Seedling className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Crop Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get personalized crop recommendations based on your soil conditions and local climate
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Yield Predictions</h3>
                  <p className="text-muted-foreground">
                    Forecast your harvest potential with our advanced machine learning models
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CloudSun className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Weather Integration</h3>
                  <p className="text-muted-foreground">
                    Real-time weather data integrated with your farming decisions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple 3-step process to optimize your agricultural output
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 relative">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Soil Data</h3>
              <p className="text-muted-foreground">
                Input your soil's nitrogen, phosphorus, potassium levels, and pH
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
              <p className="text-muted-foreground">
                Our algorithm analyzes your data and provides optimal crop suggestions
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximize Yield</h3>
              <p className="text-muted-foreground">
                Implement our recommendations to improve your harvest potential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 flex flex-col items-center text-center max-w-4xl mx-auto">
            <Award className="h-12 w-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Start Your Smart Farming Journey Today</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Join thousands of farmers who are already using AgroInsight Engine to make better cultivation decisions
            </p>
            <Link to="/">
              <Button size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

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

export default Landing;
