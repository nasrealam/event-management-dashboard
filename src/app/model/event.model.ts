export interface EventTypes {
  id: number;
  name: string;
  date: Date;
  time: Date;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  location: string;
}
