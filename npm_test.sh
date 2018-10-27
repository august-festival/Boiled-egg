rm ./.sqlite_tmp.db;
NODE_ENV=test npm run sequelize:migrate;
npm test
