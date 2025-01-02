interface FormDataTypes {
  username: string;
  position: string;
  company: string;
  desiredSalary: string;
  skills: string;
  additionalSkills: string;
  templateType: 'default' | 'large' | 'small';
}

interface FormFieldTypes {
  name: keyof FormDataTypes;
  label: string;
  placeholder: string;
  description?: string;
}

interface GeneratedLetterType {
  id: string;
  title: string;
  text: string;
  regards: string;
}

interface LetterStoreTypes {
  formData: FormDataTypes;
  generatedLetters: GeneratedLetterType[];
  updateFormData: (data: FormDataTypes) => void;
  generateLetter: () => void;
  currentLetter: GeneratedLetterType | null;
  deleteLetter: (id: string) => void;
  clearLastGeneratedLetter: () => void;
}

export type {
  FormDataTypes,
  FormFieldTypes,
  GeneratedLetterType,
  LetterStoreTypes
}