// seed.js

const { Role, User } = require('./models'); 

(async () => {
  try {
    
    const roles = await Role.bulkCreate([
      { name: 'admin',  createdAt: new Date(), updatedAt: new Date() },
      { name: 'user',   createdAt: new Date(), updatedAt: new Date() }
    ], { returning: true });
    console.log('Roles creados:', roles.map(r => r.name).join(', '));

  
    const adminRole = roles.find(r => r.name === 'admin');

   
    const plainPass = 'root123';  
   

    const adminUser = await User.create({
      username: 'admin',
      password: plainPass,       
      email: 'delaSebas@gmail.com',
      roleId: adminRole.id,
      createdAt: new Date(),
      updatedAt: new Date()
   
    });

    console.log(`Usuario admin creado: ${adminUser.username} / contraseña: ${plainPass}`);
    process.exit(0);

  } catch (err) {
    console.error('Error en seed:', err);
    process.exit(1);
  }
})();
