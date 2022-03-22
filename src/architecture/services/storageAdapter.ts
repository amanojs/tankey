import { UserStorageService } from 'architecture/applications/ports';
import { useStore } from './store';

export function useUserStorageState(): UserStorageService {
    return useStore();
}
