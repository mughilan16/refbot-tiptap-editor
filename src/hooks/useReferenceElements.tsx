import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axiosLaravel from '../utils/axiosLaravel';

type GetReferenceElementResponse = {
    data: {
        referenceStyles: Array<{
            id: number;
            index: number;
            name: string;
            color: string;
            created_at: string;
            updated_at: string;
            is_active: number;
            allow_sub_tagging: number;
        }>;
    };
};


const useReferenceElements = () => {
    return useQuery({
        queryKey: ['ReferenceElements'],
        queryFn: async () => {
            return axiosLaravel
                .get<GetReferenceElementResponse>("reference-element")
                .then((res) => res.data);
        }
    })
}

export default useReferenceElements