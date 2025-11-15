import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Video } from "@/lib/videoDatabase";

interface VideoPlayerProps {
  video: Video | null;
  onClose: () => void;
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  if (!video) return null;

  return (
    <Dialog open={!!video} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-xl pr-4">{video.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0&modestbranding=1&enablejsapi=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              onError={() => {
                console.error('Video failed to load:', video.youtubeId);
              }}
            />
            {/* Fallback message if video unavailable */}
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white text-center p-4 hidden" id={`video-error-${video.youtubeId}`}>
              <div>
                <p className="text-lg font-semibold mb-2">Video Unavailable</p>
                <p className="text-sm opacity-90 mb-4">
                  This video cannot be played. Please check the video ID or replace it with a valid, embeddable YouTube video.
                </p>
                <p className="text-xs opacity-75">
                  Video ID: {video.youtubeId}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Source:</span> {video.source || 'Medical Professional'}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Category:</span> {Array.isArray(video.category) ? video.category.join(', ') : video.category}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Duration:</span> {video.duration}
            </p>
            {video.tips && video.tips.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">Key Tips:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {video.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-sm text-foreground mt-3">{video.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

