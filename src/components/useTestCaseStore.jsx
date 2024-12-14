import {create} from 'zustand';

const useTestCaseStore = create((set) => ({
  localTestCase: {
    title: '',
    description: '',
    project: '',
    priority: 'low',
    type: 'manual',
  },
  setLocalTestCase: (newData) =>
    set((state) => ({
      localTestCase: { ...state.localTestCase, ...newData },
    })),
  resetLocalTestCase: () =>
    set(() => ({
      localTestCase: {
        title: '',
        description: '',
        project: '',
        priority: 'low',
        type: 'manual',
      },
    })),
}));

export default useTestCaseStore;