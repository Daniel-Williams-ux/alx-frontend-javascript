//Install TypeORM:
npm install typeorm

//Import and configure TypeORM in your code:
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class RowElementEntity {
  @PrimaryGeneratedColumn()
  id: RowID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  age?: number;
}

//Connect to your database and save the entity:
import { createConnection } from "typeorm";

createConnection().then(async connection => {
  const rowElementRepository = connection.getRepository(RowElementEntity);
  const rowElement = new RowElementEntity();
  rowElement.firstName = "John";
  rowElement.lastName = "Doe";
  rowElement.age = 30;
  await rowElementRepository.save(rowElement);
  console.log("RowElement has been saved.");
});
