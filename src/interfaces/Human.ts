export default interface Human {
  id: number;
  name: string;
  birth: {
    year: number;
    month: number;
    day: number;
  },
  job: string;
  company: string;
  university: string;
  address: string;
  email: string;
  getAge(year: number, month: number, day: number): number;
  ghPersonalAccountUrl: string;
  ghOrgAccountUrl: string;
}