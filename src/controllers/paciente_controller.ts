import { RequestHandler } from "express";
import { Paciente } from "../models/paciente";

export const getPacientes: RequestHandler = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.status(200).json({
            message: 'Operation successful',
            data: pacientes
        });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo obtener lista de pacientes',
            error: err.message
        });
    }
}
export const getPaciente: RequestHandler = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(200).json({
                message: 'Operation successful',
                data: paciente
            });
        } else {
            res.status(404).json({
                message: 'Patient not found',
                data: paciente
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo obtener el paciente',
            error: err.message
        });
    }
}
export const createPaciente: RequestHandler = async (req, res) => {
    try {
        const paciente = await Paciente.create(req.body);
        res.status(201).json({
            message: 'Operation successful',
            data: paciente
        });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo crear paciente',
            error: err.message
        });
    }
}
export const updatePaciente: RequestHandler = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id)
        if (paciente) {
            await Paciente.update(req.body, {
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        } else {
            res.status(400).json({
                message: 'El paciente no existe'
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo actualizar el paciente ',
            error: err.message
        });
    }
}
export const deletePaciente: RequestHandler = async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id)
        if (paciente) {
            await Paciente.destroy({
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        } else {
            res.status(400).json({
                message: 'El paciente no existe'
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo eliminar el paciente ',
            error: err.message
        });
    }
}