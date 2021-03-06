import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly _logger = new Logger(LoggingInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        this._logger.log("Before...");

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => this._logger.log(`After... ${Date.now() - now}ms`))
            );
    }
}
