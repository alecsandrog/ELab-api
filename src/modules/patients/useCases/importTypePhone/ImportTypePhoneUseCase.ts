import csvParse from "csv-parser";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";

interface IImportTypePhone {
  name: string;
}

@injectable()
class ImportTypePhoneUseCase {
  constructor(
    @inject("TypePhonesRepository")
    private typePhonesRepository: ITypePhonesRepository
  ) {}

  loadTypePhones(file: Express.Multer.File): Promise<IImportTypePhone[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const typePhones: IImportTypePhone[] = [];

      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name] = line;
          typePhones.push({
            name,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(typePhones);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const typePhones = await this.loadTypePhones(file);

    typePhones.map(async (typePhone) => {
      const { name } = typePhone;

      const existTypePhone = await this.typePhonesRepository.findByName(name);

      if (!existTypePhone) {
        await this.typePhonesRepository.create({
          name,
        });
      }
    });
  }
}

export { ImportTypePhoneUseCase };
