import {PerformanceMarker} from '../../performance/PerformanceMarker';
import SQLite from 'react-native-sqlite-storage';

// Enable promise support for SQLite
SQLite.enablePromise(true);

export const DatabaseService = {
  /**
   * Initialize the database.
   * Simulates slow DB creation and initial queries.
   */
  async initialize(): Promise<void> {
    PerformanceMarker.begin('DB_INIT');
    
    try {
      const db = await SQLite.openDatabase({
        name: 'PerformanceLab.db',
        location: 'default',
      });

      await db.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT);'
      );

      // Simulate heavy initial database seeding/indexing
      await new Promise<void>(resolve => setTimeout(() => resolve(), 1000));
      
    } catch (error) {
      console.warn('[DB_INIT] Error initializing SQLite:', error);
    }
    
    PerformanceMarker.end('DB_INIT');
  },
};
