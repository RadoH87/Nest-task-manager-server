import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { Request } from 'express';

export class RoleGuard implements CanActivate {
  constructor(private role: string) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request: any = ctx.getRequest<Request>();
    return this.role === request.user.role;
  }
}
