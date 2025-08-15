// src/database/index.ts

import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'devflix_development',
  username: 'Raphael',
  password: '898123',
	define: {
    underscored: true
  }
})