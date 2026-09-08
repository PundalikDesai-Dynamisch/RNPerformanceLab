import {PerformanceMarker} from '../../performance/PerformanceMarker';

export const ApiService = {
  /**
   * Initialize the API service.
   * Simulates a slow, blocking network request.
   */
  async initialize(): Promise<void> {
    PerformanceMarker.begin('API_INIT');
    
    // Simulate a 1.5 second network request
    await new Promise<void>(resolve => setTimeout(() => resolve(), 1500));
    
    PerformanceMarker.end('API_INIT');
  },
};
