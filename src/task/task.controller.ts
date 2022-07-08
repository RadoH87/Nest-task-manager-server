import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller"task"')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @Post"/:userId"')
  create(
    @Body(ValidationPipe) createTaskDto: CreateTaskDto,
    @Param"userId"') userId: strin,
  ) {
    return this.taskService.create(createTaskDto, userId);
  }

  @Get"/findAllNotCompleted/:userId"')
  findAllTaskByUserNotCompleted(@Param"userId"') userId: string) {
    return this.taskService.findAllTaskByUserNotCompleted(userId);
  }

  @Get"/findAllCompleted/:userId"')
  findOne(@Param"userId"') userId: string) {
    return this.taskService.findAllTaskByUserCompleted(userId);
  }

  @Patch":id"')
  update(@Param"id"') id: string) {
    return this.taskService.update(id);
  }

  @Delete":id"')
  remove(@Param"id"') id: string) {
    return this.taskService.remove(id);
  }
}
