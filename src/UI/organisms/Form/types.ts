export interface IRadioOptions {
  id: string;
  type: 'radio';
  name: string;
  value: string;
  label: string;
}

export interface ICountOptions {
  id: string;
  type: 'count';
  name: string;
  label: string;
}

export type FieldOptions = IRadioOptions | ICountOptions;

export type FieldOptionsArray = Readonly<(IRadioOptions | ICountOptions)[]>;

export type DefaultValues<T extends FieldOptionsArray> = {
  [El in T[number] as El['name']]: El extends IRadioOptions
    ? El['value']
    : number;
};
