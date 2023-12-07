import { Table, Model, Column, DataType, BelongsTo, PrimaryKey, ForeignKey} from 'sequelize-typescript';
import {Doctor} from './doctor';
import {Paciente} from './paciente';
@Table({
    timestamps: false, 
    tableName: 'cita'
})
export class Cita extends Model {
    @Column({
        type: DataType.DATE,
        allowNull: false,
        primaryKey: true
    })
    fecha_hora !: Date
    @ForeignKey( () => Paciente)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    num_cedula !: number
    @ForeignKey( () => Doctor)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_prof !: number
    @BelongsTo( () => Doctor) // Indicar una relación de pertenencia, cita pertenece a un doctor
    doctor !: Doctor;
    @BelongsTo( () => Paciente) // Indicar una relación de pertenencia, cita pertenece a un paciente
    paciente !: Paciente;
}
