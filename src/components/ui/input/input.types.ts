type InputType ='search';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  type: InputType;
  isValid?: boolean;
  captionMessage?: string;
  placeholder?: string;
  onClear?: () => void;
  onClick?: () => void;
  iconItem?: JSX.Element;
  iconName?: string;
  required?: boolean;
  disabled?: boolean;
}
