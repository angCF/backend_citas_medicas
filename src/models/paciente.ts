import { Table, Model, Column, DataType, HasMany} from 'sequelize-typescript';
import { Cita } from './cita';

@Table({
    timestamps: false, 
    tableName: 'paciente'
})
export class Paciente extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    num_cedula !: number
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre !: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    apellido !: string
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    edad !: Date
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    telefono !: string
    @HasMany(() => Cita)
    cita !: Cita []
}
