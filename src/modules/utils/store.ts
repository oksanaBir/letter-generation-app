import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import letterTemplates from '@/modules/letterTemplates.json'
import { nanoid } from 'nanoid'
import { GeneratedLetterType, LetterStoreTypes, FormDataTypes } from '@/types/types'

const useLetterStore = create(
  persist<LetterStoreTypes>(
    (set, get) => ({
      formData: {
        id: '',
        username: '',
        position: '',
        company: '',
        desiredSalary: '',
        skills: '',
        additionalSkills: '',
        templateType: 'default',
      } as FormDataTypes,
      generatedLetters: [] as GeneratedLetterType[],
      currentLetter: null,
      updateFormData: (data: FormDataTypes) => set({ formData: data }),
      generateLetter: () => {
        const { formData, generatedLetters } = get();
        const template = letterTemplates[formData.templateType];

        const title = template.title
        .replace('{company}', formData.company)
        const text = template.text
          .replace('{position}', formData.position)
          .replace('{company}', formData.company)
          .replace('{desiredSalary}', formData.desiredSalary)
          .replace('{skills}', formData.skills)
          .replace('{additionalSkills}', formData.additionalSkills);

        const regards = template.regards
        .replace('{username}', formData.username)

        const newLetter: GeneratedLetterType = { id: nanoid(), title, text, regards }
        set({
          generatedLetters: [...generatedLetters, newLetter],
          currentLetter: newLetter,
        });
      },
      deleteLetter: (id: string) => {
        set((state) => ({
          generatedLetters: state.generatedLetters.filter((letter) => letter.id !== id),
        }));
      },
      clearLastGeneratedLetter: () => {
        set({ currentLetter: null });
      },
    }),
    {
      name: 'letter-storage',
      partialize: (state) => ({
        generatedLetters: state.generatedLetters,
      }) as LetterStoreTypes,
    }
  )
)

export default useLetterStore