// src/context/JobDetailContext.tsx
import {createContext, useContext} from 'react';

// Define the JobDetailContextType interface
export interface JobDetailContextType {
  jobDetail: any; // Replace 'any' with your actual JobDetail type if available
}

export const JobDetailContext = createContext<JobDetailContextType | undefined>(undefined);

export const JobDetailProvider = JobDetailContext.Provider;

export const useJobDetailContext = () => {
  const context = useContext (JobDetailContext);
  if (!context) {
    throw new Error (
      'useJobDetailContext must be used within JobDetailProvider'
    );
  }
  return context;
};
export const JobDetailConsumer = JobDetailContext.Consumer;