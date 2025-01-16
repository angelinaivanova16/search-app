export interface CardProps {
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  trackPrice: number;
  trackViewUrl: string;
  trackId: number;
  activeCard: boolean;
  onClick: (trackId: number) => void;
}
