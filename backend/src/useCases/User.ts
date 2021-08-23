
import UserModel from '../models/User'
// type ObjectId = typeof mongoose.Schema.Types.ObjectId

interface IUser {
  _id?:string,
  userName: string;
  email:string;
  password:string;
  createdAt?:Date;
  updatedAt?:Date;
  __v?:number;
}
interface IUserUseCase {
  userName: string;
  email:string;
  password:string;
  save: () => Promise<string | undefined>,
  read: (id:string) => Promise<IUser>,
  readAll: () => Promise<IUser>,
  factory: (user:IUser) => void,
  update: (id:string, user:IUser) =>Promise<IUser>,
  delete: (id:string) =>Promise<IUser>,
  remove: (id:string) =>void,
}
class UserClass implements IUserUseCase{
  userName: string
  email: string
  password: string
  factory(user: IUser){
      this.userName = user.userName
      this.email = user.email
      this.password = user.password
  }

  async read(id:string) { 
    // if (id.match(/^[0-9a-fA-F]{24}$/)) {
    //  console.log(`It's Valid ID`)
    // }
    const result:IUser = await UserModel.findById(id)
    return result
  }

  async readAll() {
    const result:Promise<IUser> = await UserModel.find({})
    return result
  }
  async update(id:string, user:IUser){
    const result:Promise<IUser> = await UserModel.findByIdAndUpdate(id, user, 
      {new: true})
        return result
  }
  async delete(id:string){
    const result:Promise<IUser> = await UserModel.findByIdAndUpdate(id, {
      status: 'inactive'
    }, 
      {new: true})
        return result
  }
  async remove(id:string){
    console.log(`Remove: ${id}`)
    const result:Promise<IUser> = await UserModel.findByIdAndRemove(id)
    console.log(result)
    return result
  }
  async save(){
    try {
      console.log({
        userName: this.userName,
        email: this.email,
        password: this.password,
      })
      await UserModel.create({
        userName: this.userName,
        email: this.email,
        password: this.password,
      })
      return 'SUCCESS'
    } catch (error) {
      console.log(JSON.stringify(error))
      if(error){
        if(error.code==11000){
          return 'EMAIL_DUPLICADO'
        }
      }
    }
  }
}
export default UserClass