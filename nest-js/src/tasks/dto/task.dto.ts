import { TaskSatatus } from "../task.entity"
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskSatatus.PENDIGN, TaskSatatus.IN_PROGRESS, TaskSatatus.DONE])
    status?: TaskSatatus
}