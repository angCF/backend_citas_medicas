import { RequestHandler } from "express";
import { Doctor } from "../models/doctor";

export const getDoctores: RequestHandler = async (req, res) => {
    try {
        const doctores = await Doctor.findAll();
        res.status(200).json({
            message: 'Operation successful',
            data: doctores
        });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo obtener lista de doctores',
            error: err.message
        });
    }
}
export const getDoctor: RequestHandler = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (doctor) {
            res.status(200).json({
                message: 'Operation successful',
                data: doctor
            });
        } else {
            res.status(404).json({
                message: 'Patient not found',
                data: doctor
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo obtener el doctor',
            error: err.message
        });
    }
}
export const createDoctor: RequestHandler = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json({
            message: 'Operation successful',
            data: doctor
        });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo crear doctor',
            error: err.message
        });
    }
}
export const updateDoctor: RequestHandler = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id)
        if (doctor) {
            await Doctor.update(req.body, {
                where: { id_prof: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        } else {
            res.status(400).json({
                message: 'El doctor no existe'
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo actualizar el doctor ',
            error: err.message
        });
    }
}
export const deleteDoctor: RequestHandler = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id)
        if (doctor) {
            await Doctor.destroy({
                where: { id_prof: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        } else {
            res.status(400).json({
                message: 'El doctor no existe'
            });
        }
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message: 'Error: No se pudo eliminar el doctor ',
            error: err.message
        });
    }
}