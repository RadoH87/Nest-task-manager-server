import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    @Inject(UserService)
    private userService: UserService,
  ) {}

  async create(createTaskDto: CreateTaskDto, userId: string) {
    const task = new Task();
    task.title = createTaskDto.title;
    task.date = new Date().toLocaleString();
    task.completed = false;
    task.user = await this.userService.findUserById(userId);
    return this.taskRepository.save(task);
  }

  async findAllTaskByUserNotCompleted(userId: string) {
    // userid not completed
    return await this.taskRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, completed: false },
    });
  }

  async findAllTaskByUserCompleted(userId: string) {
    // userid not completed
    return await this.taskRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, completed: true },
    });
  }

  update(taskId: string) {
    return this.taskRepository.update(taskId, { completed: true });
  }

  remove(taskId: string) {
    return this.taskRepository.delete(taskId);
  }
}
