
import ProjectModel from '../models/Project'
import TaskModel from '../models/Task'

interface IProject {
  _id?:string;
  description: string,
  creation_date: Date,
  finish_date: Date,
  userId:  string, 
  status: string,
  tasks:  string[]
}
interface IProjectUserCase {
  description: string,
  creation_date: Date,
  finish_date: Date,
  userId:  string, 
  status: string,
  tasks?:  string[],
  save: () => void,
  read: (id:string) => Promise<IProject>,
  readAll: () => Promise<IProject>,
  includeTask: (taskid:string) => Promise<IProject>,
  removeTask: (taskid:string) => Promise<IProject>,
  factory: (project:IProject) => void,
  update: (id:string, project:IProject) =>Promise<IProject>,
  delete: (id:string) =>Promise<IProject>,
  remove: (id:string) =>void,
}

class ProjectClass implements IProjectUserCase{
  description: string;
  creation_date: Date;
  finish_date: Date;
  userId:  string;
  status: string;
  tasks?:  string[];
  factory(project: IProject){
      this.description = project.description
      this.userId = project.userId
      this.userId = project.userId
  }

  async read(id:string) { 
    console.log('read')
    const result:IProject = await ProjectModel.findById(id).populate('tasks')
    console.log(result);
    return result
  }

  async readAll() {
    const result:Promise<IProject> = await ProjectModel.find({}).populate('tasks')
    return result
  }
  async update(id:string, project:IProject){
    const result:Promise<IProject> = await ProjectModel.findByIdAndUpdate(id, project, 
      {new: true})
        return result
  }
  async delete(id:string){
    const result:Promise<IProject> = await ProjectModel.findByIdAndUpdate(id, {
      status: 'inactive'
    }, 
      {new: true})
        return result
  }
  async remove(id:string){
    console.log(`Remove: ${id}`)
    const result:Promise<IProject> = await ProjectModel.findByIdAndRemove(id)
    console.log(result)
    return result
  }
  async save(){
    await ProjectModel.create({
      description: this.description,
      userId: this.userId
    })
  }
  async includeTask(idTask:string){
    const task = await TaskModel.findById(idTask)
    const project = await ProjectModel.findById(task.projectId)
    const tasks = project.tasks
    tasks.push(idTask)
    const result = await ProjectModel.findByIdAndUpdate(task.projectId,
      {
        tasks
      })
    return result
  }
  async removeTask(idTask:string){
    const task = await TaskModel.findById(idTask)
    const project = await ProjectModel.findById(task.projectId)
    const tasks = project.tasks
    tasks.filter((task:string) => task != idTask)
    const result = await ProjectModel.findByIdAndUpdate(task.projectId,
      {
        tasks
      })
    return result
  }
}
export default ProjectClass