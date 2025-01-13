export interface Event {
  id: number;
  name: string;
  date: Date;
  time: Date;
  location: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}
