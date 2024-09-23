import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function useQuery() {
    // Hook para pegar o parâmetro da URL
    const {search} = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
};
