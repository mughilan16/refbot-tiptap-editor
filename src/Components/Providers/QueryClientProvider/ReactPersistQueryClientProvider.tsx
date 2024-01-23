import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import React from 'react'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // gcTime: 1000 * 60 * 60 * 24, // 24 hours
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchInterval: 1000 * 60 * 30
        },
    },
})

const persister = createSyncStoragePersister({
    storage: window.localStorage,
})

const ReactPersistQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <PersistQueryClientProvider persistOptions={{ persister }} client={queryClient}>
            {children}
            <ReactQueryDevtools position='right' initialIsOpen={false} />
        </PersistQueryClientProvider>
    )
}

export default ReactPersistQueryClientProvider