import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, CheckCircle2, AlertTriangle } from "lucide-react";
import { Remedy } from "@/lib/videoDatabase";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface RemedyCardProps {
  remedy: Remedy;
}

export function RemedyCard({ remedy }: RemedyCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getSeverityColor = (category: string) => {
    switch (category) {
      case 'high':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'moderate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <Card className={`border-2 ${getSeverityColor(remedy.category)} hover:shadow-lg transition-all duration-300`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div className="text-3xl">{remedy.icon}</div>
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{remedy.name}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {remedy.category.toUpperCase()}
                </Badge>
                {remedy.bestFor && (
                  <Badge variant="secondary" className="text-xs">
                    Best for: {remedy.bestFor}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground">Duration:</span>
            <p className="font-medium">{remedy.duration}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Frequency:</span>
            <p className="font-medium">{remedy.frequency}</p>
          </div>
        </div>

        {/* Benefits Preview */}
        <div>
          <p className="text-sm font-medium mb-2">Key Benefits:</p>
          <ul className="space-y-1">
            {remedy.benefits.slice(0, 2).map((benefit, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Details */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between" size="sm">
              <span>{isOpen ? 'Show Less' : 'Show Full Details'}</span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 pt-2">
            {/* Ingredients */}
            <div>
              <p className="text-sm font-medium mb-2">Ingredients:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {remedy.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div>
              <p className="text-sm font-medium mb-2">Preparation Steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                {remedy.preparation.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </div>

            {/* Application */}
            {remedy.application && (
              <div>
                <p className="text-sm font-medium mb-2">Application:</p>
                <p className="text-sm text-muted-foreground">{remedy.application}</p>
              </div>
            )}

            {/* Timing */}
            {remedy.timing && (
              <div>
                <p className="text-sm font-medium mb-2">Best Timing:</p>
                <p className="text-sm text-muted-foreground">{remedy.timing}</p>
              </div>
            )}

            {/* All Benefits */}
            <div>
              <p className="text-sm font-medium mb-2">All Benefits:</p>
              <ul className="space-y-1">
                {remedy.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scientific Basis */}
            <div>
              <p className="text-sm font-medium mb-2">Scientific Basis:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {remedy.scientificBasis}
              </p>
            </div>

            {/* Contraindications */}
            {remedy.contraindications.length > 0 && (
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                <p className="text-sm font-medium mb-2 flex items-center gap-2 text-warning">
                  <AlertTriangle className="h-4 w-4" />
                  Important Warnings:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-warning/90">
                  {remedy.contraindications.map((contra, idx) => (
                    <li key={idx}>{contra}</li>
                  ))}
                </ul>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

