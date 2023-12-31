import { Table, Model, Column, DataType, HasMany} from 'sequelize-typescript';
import { Cita } from './cita';

@Table({
    timestamps: false, 
    tableName: 'doctor'
})
export class Doctor extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id_prof !: number
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
        type: DataType.STRING,
        allowNull: false
    })
    correo !: string
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    telefono !: string
    @Column({
        type: DataType.ENUM('medicina_general','cardiologia','medicina_interna','dermatologia',
        'rehabilitacion_fisica','psicologia','odontologia','radiologia'),
        allowNull: false
    })
    especialidad !: string
    @HasMany(() => Cita)
    cita !: Cita []
}