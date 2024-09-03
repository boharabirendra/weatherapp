export interface ITextInput {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
  id?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
