import { useTankStorageState, useUserStorageState } from 'architecture/services/storageAdapter';

export const useUserStorage = useUserStorageState;
export const useTankStorage = useTankStorageState;
