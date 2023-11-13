import app from './app';
import { sequelize } from './database/db';

async function init() {
  await sequelize.sync();

  const port = 3000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

init();