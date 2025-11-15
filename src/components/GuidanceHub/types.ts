/**
 * TypeScript types for GuidanceHub components
 */

export type FeverSeverity = 'LOW' | 'MODERATE' | 'HIGH';
export type Decision = 'CONTINUE' | 'CONSULT_DOCTOR' | 'LIKELY_SAFE_TO_STOP';

export interface GuidanceHubProps {
  severity: FeverSeverity;
  decision: Decision;
  age: number;
  symptoms: string[];
  duration: number;
  temperature?: number;
}

export interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  onClose: () => void;
}

