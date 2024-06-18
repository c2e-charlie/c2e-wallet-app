import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isModalState: boolean;
  setIsModalState: (state: boolean) => void;
}
