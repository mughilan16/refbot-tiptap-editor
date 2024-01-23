import React from 'react';
import ReactPersistQueryClientProvider from './QueryClientProvider/ReactPersistQueryClientProvider';
import ReactQueryClientProvider from './QueryClientProvider/ReactQueryClientProvider';

const QueryClientProvider = false ? ReactQueryClientProvider : ReactPersistQueryClientProvider;

const AppRootProviders = ({ children }: { children: React.ReactNode }) => {

    return (
        <QueryClientProvider>
            {children}
        </QueryClientProvider>
    )
}

export default AppRootProviders