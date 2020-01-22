const {User} = require ('./db/models');
const bcrypt = require ('bcrypt');

const hashPassword = async (pass) =>{
  try{
    return bcrypt.hash(pass, 10);
  }catch(e){
    throw e;
  }
};


const createUser = async (data) => {
  try{
    data.passwordHash = await hashPassword(data.password);
    const createedUser = await User.create(data);
    if(createedUser) {
      return createedUser.get();
    }
  }catch(e){
    throw e;
  }
};

const  getUserById = async (id) => {
  try{
    const user = await User.findByPk(id);
    if(user) {
      return user.get();
    }
  }catch (e){
    throw e;
  }
};


getUserById(2).then(console.log).catch(console.error);