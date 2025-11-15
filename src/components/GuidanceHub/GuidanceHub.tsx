import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  BookOpen, 
  Phone, 
  AlertTriangle, 
  Info
} from "lucide-react";
import { 
  getRecommendedRemedies,
  Remedy
} from "@/lib/videoDatabase";
import { RemedyCard } from "./RemedyCard";
import { GuidanceHubProps } from "./types";

export function GuidanceHub({
  severity,
  decision,
  age,
  symptoms,
  duration,
  temperature
}: GuidanceHubProps) {
  const [loading, setLoading] = useState(false);

  const recommendedRemedies = getRecommendedRemedies({
    severity,
    decision,
    age,
    symptoms,
    duration
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'HIGH':
        return 'bg-destructive text-destructive-foreground';
      case 'MODERATE':
        return 'bg-warning text-warning-foreground';
      case 'LOW':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const isEmergency = severity === 'HIGH' || decision === 'CONSULT_DOCTOR';

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Emergency Alert */}
      {isEmergency && (
        <Alert className="border-destructive bg-destructive/10 animate-in slide-in-from-top duration-300">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive font-bold">
            Important: Monitor Symptoms Closely
          </AlertTitle>
          <AlertDescription className="text-destructive/90 mt-2">
            {severity === 'HIGH' && (
              <p className="mb-2">
                You have a high fever. Please monitor your symptoms carefully and seek immediate medical attention if symptoms worsen.
              </p>
            )}
            {decision === 'CONSULT_DOCTOR' && (
              <p className="mb-2">
                Our AI recommends consulting a doctor. Use the emergency hotline if you experience severe symptoms.
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              <Button
                variant="destructive"
                size="sm"
                asChild
                className="shadow-lg"
              >
                <a href="tel:108">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency: 108
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <a href="tel:102">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Ambulance: 102
                </a>
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Disclaimer */}
      <Alert className="border-primary/50 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <strong>Medical Disclaimer:</strong> The information provided here is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for proper diagnosis and treatment.
        </AlertDescription>
      </Alert>

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Guidance Hub
          </h2>
          <p className="text-muted-foreground mt-2">
            Personalized home remedies and care tips based on your condition
          </p>
        </div>
        <Badge className={`${getSeverityColor(severity)} text-lg px-4 py-2`}>
          {severity} FEVER
        </Badge>
      </div>

      {/* Home Remedies Section */}
      <Card className="border-2 border-success/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-success/5 via-success/10 to-success/5 border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-success" />
                Home Remedies & Care Tips
              </CardTitle>
              <CardDescription className="mt-1">
                Scientifically-backed home care remedies for fever management
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-sm">
              {recommendedRemedies.length} remedies
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-64 w-full" />
              ))}
            </div>
          ) : recommendedRemedies.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No remedies available for your condition</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedRemedies.map((remedy) => (
                <RemedyCard key={remedy.id} remedy={remedy} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

