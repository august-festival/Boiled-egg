rm ./.sqlite_tmp.db;
NODE_ENV=test npm run sequelize:migrate;
NODE_ENV=test npm run sequelize:seed:all;
npm test
