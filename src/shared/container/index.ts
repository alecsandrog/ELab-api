import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ExamsRepository } from "@modules/orders/infra/typeorm/repositories/ExamsRepository";
import { TypeExamsRepository } from "@modules/orders/infra/typeorm/repositories/TypeExamsRepository";
import { IExamsRepository } from "@modules/orders/repositories/IExamsRepository";
import { ITypeExamsRepository } from "@modules/orders/repositories/ITypeExamsRepository";
import { PatientsRepository } from "@modules/patients/infra/typeorm/repositories/PatientsRepository";
import { PhonesRepository } from "@modules/patients/infra/typeorm/repositories/PhonesRepository";
import { TypePhonesRepository } from "@modules/patients/infra/typeorm/repositories/TypePhonesRepository";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { IPhonesRepository } from "@modules/patients/repositories/IPhonesRepository";
import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";

container.registerSingleton<ITypePhonesRepository>(
  "TypePhonesRepository",
  TypePhonesRepository
);

container.registerSingleton<ITypeExamsRepository>(
  "TypeExamsRepository",
  TypeExamsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPatientsRepository>(
  "PatientsRepository",
  PatientsRepository
);

container.registerSingleton<IPhonesRepository>(
  "PhonesRepository",
  PhonesRepository
);

container.registerSingleton<IExamsRepository>(
  "ExamsRepository",
  ExamsRepository
);
