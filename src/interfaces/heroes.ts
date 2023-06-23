export interface IHeroData {
  id: string;
  name: string;
  universe: string;
  details: {
    fullName: string;
    birthday: string;
    homeland: string;
    height: number;
    weight: number;
  };
}