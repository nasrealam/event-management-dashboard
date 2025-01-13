export interface Event {
  id: number;
  name: string;
  date: Date;
  location: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}
