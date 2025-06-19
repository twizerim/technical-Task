import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
    this.id = uuidv4(); 
    this.createdAt = new Date().toISOString();
  }
}

export default User;