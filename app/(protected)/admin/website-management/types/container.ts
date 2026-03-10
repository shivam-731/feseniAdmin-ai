export type Container = {
  id: number;
  name: string;
  order: number;
  className: string;
  style?: string;
  htmlContent?: string;
  image?: File | null;
};
