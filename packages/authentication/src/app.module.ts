import { Logger, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

// import { AppService } from "./app.service";

import { AuthController } from "@interface/auth.controller";

// import { EventStoreImplement } from "@auth/infrastructure/cache/event-store";
// import { IntegrationEventPublisherImplement } from "@auth/infrastructure/message/integration-event.publisher";
// import { AccountQueryImplement } from "@auth/infrastructure/queries/account.query";
// import { AccountRepositoryImplement } from "@auth/infrastructure/repositories/account.repository";

// import { AccountsController } from "@auth/interface/auth.controller";

// import { CloseAccountHandler } from "@auth/application/commands/close-account.handler";
// import { DepositHandler } from "@auth/application/commands/deposit.handler";
// import { OpenAccountHandler } from "@auth/application/commands/open-account.handler";
// import { RemitHandler } from "@auth/application/commands/remit.handler";
// import { UpdatePasswordHandler } from "@auth/application/commands/update-password.handler";
// import { WithdrawHandler } from "@auth/application/commands/withdraw.handler";
// import { AccountClosedHandler } from "@auth/application/events/account-closed.handler";
// import { AccountOpenedHandler } from "@auth/application/events/account-opened.handler";
// import { DepositedHandler } from "@auth/application/events/deposited.handler";
// import { PasswordUpdatedHandler } from "@auth/application/events/password-updated.handler";
// import { WithdrawnHandler } from "@auth/application/events/withdrawn.handler";
// import { FindAccountByIdHandler } from "@auth/application/queries/find-account-by-id.handler";
// import { FindAccountsHandler } from "@auth/application/queries/find-accounts.handler";

// import { AccountService } from "@auth/domain/service";
// import { AccountFactory } from "@auth/domain/factory";

// const infrastructure = [
//     AccountRepositoryImplement,
//     EventStoreImplement,
//     IntegrationEventPublisherImplement,
//     AccountQueryImplement,
// ];

// const application = [
//     CloseAccountHandler,
//     DepositHandler,
//     OpenAccountHandler,
//     RemitHandler,
//     UpdatePasswordHandler,
//     WithdrawHandler,
//     AccountClosedHandler,
//     AccountOpenedHandler,
//     DepositedHandler,
//     PasswordUpdatedHandler,
//     WithdrawnHandler,
//     FindAccountByIdHandler,
//     FindAccountsHandler,
// ];

// const domain = [AccountService, AccountFactory];

@Module({
    imports: [CqrsModule],
    controllers: [AuthController],
    providers: [
        // AppService,
        Logger,
        // ...infrastructure,
        // ...application,
        // ...domain,
    ],
})
export class AppModule {}
