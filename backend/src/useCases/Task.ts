
import ProjectModel from '../models/Project'
import TaskModel from '../models/Task'
import ProjectClass from '../useCases/Project'

interface ITask {
  _id?:string;
  projectId:  string, 
  userId:  string, 
  description: string,
  creation_date: Date,
  finish_date: Date,
  status: string
}
interface ITaskUserCase {
  description: string,
  creation_date: Date,
  finish_date: Date,
  userId:  string, 
  projectId:  string, 
  status: string,
  tasks?:  string[],
  save: () => Promise<string | undefined>,
  read: (id:string) => Promise<ITask>,
  readAll: (projectId:string) => Promise<ITask>,
  factory: (task:ITask) => void,
  update: (id:string, task:ITask) =>Promise<ITask>,
  delete: (id:string) =>Promise<ITask>,
  remove: (id:string) =>void,
}

class TaskClass implements ITaskUserCase{
  description: string;
  creation_date: Date;
  finish_date: Date;
  userId:  string;
  projectId:  string;
  status: string;
  tasks?:  string[];
  async factory(task: ITask){
      this.description = task.description
      this.projectId = task.projectId
      console.log('task.projectId:' + task.projectId)
      const project = await ProjectModel.findById(task.projectId)
      if(project===null){
          console.log('Projeto não encontrado:' + task.projectId)
      }
      this.userId = project.userId
  }

  async read(id:string) { 
    const result:ITask = await TaskModel.findById(id)
    return result
  }

  async readAll(projectId:string) {
    const result:Promise<ITask> = await TaskModel.find({
      projectId
    })
    return result
  }
  async update(id:string, task:ITask){
    const result:Promise<ITask> = await TaskModel.findByIdAndUpdate(id, task, 
      {new: true})
        return result
  }
  async delete(id:string){
    const result:Promise<ITask> = await TaskModel.findByIdAndUpdate(id, {
      status: 'inactive'
    }, 
      {new: true})
        return result
  }
  async remove(id:string){
    const result:Promise<ITask> = await TaskModel.findByIdAndRemove(id)
    return result
  }
  async save(){
    try {
      const task = await TaskModel.create({
        projectId:  this.projectId, 
        userId:  this.userId,
        description: this.description,
        creation_date: new Date()
      })
      const project = new ProjectClass()
      project.includeTask(task._id)
      return 'SUCCESS' 
    } catch (error) {
      console.log(JSON.stringify(error))
      if(error){
        console.log(error)
        if(error.code==11000){
          return 'ERRO'
        }
      }
    }
  }
}
export default TaskClass