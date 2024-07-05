import mysql from 'mysql2/promise';

export class Database {
  private connection: mysql.Connection | null = null;

  public async connect(): Promise<void> {
    try {
      this.connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'admin',
        database: 'db_tareas_challenge'
      });
      console.log('Connected to the MySQL database.');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }

  public getConnection(): mysql.Connection {
    if (!this.connection) {
      throw new Error('Database connection is not established.');
    }
    return this.connection;
  }
}
