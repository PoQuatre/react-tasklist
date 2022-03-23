import type { Dispatch, SetStateAction } from 'react';

export interface ITask {
  id: number;
  title: string;
  priority: 'low' | 'normal' | 'high';
}

export type StateFrom<T> = [T, Dispatch<SetStateAction<T>>];
