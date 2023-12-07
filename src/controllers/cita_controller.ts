import { RequestHandler } from "express";
import { Cita } from "../models/cita";

export const getCitas: RequestHandler = async (req, res) => {
    try {
        const citas = await Cita.findAll();
        res.status(200).json({
            message: 'Operation successful',
            data: citas
        });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo obtener lista de citas',
            error: err.message
        });
    }
}
export const getCita: RequestHandler = async (req, res) => {
    try {
        const cita = await Cita.findByPk(req.params.id);
        if (cita) {
            res.status(200).json({
                message: 'Operation successful',
                data: cita
            });
        } else {
            res.status(404).json({
                message: 'Patient not found',
                data: cita
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo obtener el cita',
            error: err.message
        });
    }
}
export const createCita: RequestHandler = async (req, res) => {
    try {
        const cita = await Cita.create(req.body);
        res.status(201).json({
            message: 'Operation successful',
            data: cita
        });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo crear cita',
            error: err.message
        });
    }
}
export const updateCita: RequestHandler = async (req, res) => {
    try {
        const cita = await Cita.findByPk(req.params.id)
        if (cita) {
            await Cita.update(req.body, {
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        } else {
            res.status(400).json({
                message: 'El cita no existe'
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo actualizar el cita ',
            error: err.message
        });
    }
}
export const deleteCita: RequestHandler = async (req, res) => {
    try {
        const cita = await Cita.findByPk(req.params.id)
        if (cita) {
            await Cita.destroy({
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        } else {
            res.status(400).json({
                message: 'El cita no existe'
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo eliminar el cita ',
            error: err.message
        });
    }
}