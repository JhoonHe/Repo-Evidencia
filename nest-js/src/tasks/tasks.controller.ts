import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAlltasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {
        return this.tasksService.createTask(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto) {
        return this.tasksService.updateTask(id, updateFields)
    }
}
