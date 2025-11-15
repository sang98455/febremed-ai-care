import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import { Video } from "@/lib/videoDatabase";

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
      <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to default thumbnail if maxresdefault fails
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {video.duration}
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </CardTitle>
        <CardDescription className="text-xs flex items-center gap-2">
          <span className="text-muted-foreground">{video.source || 'Medical Professional'}</span>
          <span>•</span>
          <span className="text-muted-foreground">
            {Array.isArray(video.category) ? video.category[0] : video.category}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {video.description}
        </p>
        <Button
          onClick={() => onPlay(video)}
          className="w-full"
          size="sm"
        >
          <Play className="mr-2 h-4 w-4" />
          Watch Video
        </Button>
      </CardContent>
    </Card>
  );
}

