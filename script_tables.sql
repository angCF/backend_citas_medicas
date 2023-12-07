DROP DATABASE IF EXISTS CITAS;
CREATE DATABASE IF NOT EXISTS CITAS CHARACTER SET utf8mb4;
USE CITAS;
CREATE TABLE doctor (
    id_prof INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    especialidad ENUM('medicina_general','cardiologia','medicina_interna','dermatologia',
    'rehabilitacion_fisica','psicologia','odontologia','radiologia') NOT NULL,
    PRIMARY KEY (id_prof)
);
CREATE TABLE paciente (
    num_cedula INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad DATE NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    PRIMARY KEY (num_cedula)
);
CREATE TABLE cita(
    fecha_hora DATETIME NOT NULL,
    num_cedula INT NOT NULL,
    id_prof INT NOT NULL,
    FOREIGN KEY (id_prof) REFERENCES doctor (id_prof),
    FOREIGN KEY (num_cedula) REFERENCES paciente (num_cedula),
    PRIMARY KEY (id_prof,num_cedula,fecha_hora)
);