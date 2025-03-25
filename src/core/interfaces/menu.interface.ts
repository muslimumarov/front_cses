export interface MenuInterface {
  label: string;
  path: string;
  disabled?: boolean;
  children?: MenuInterface[];
}
