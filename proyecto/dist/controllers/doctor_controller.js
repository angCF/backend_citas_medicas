"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoctor = exports.updateDoctor = exports.createDoctor = exports.getDoctor = exports.getDoctores = void 0;
const doctor_1 = require("../models/doctor");
const getDoctores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctores = yield doctor_1.Doctor.findAll();
        res.status(200).json({
            message: 'Operation successful',
            data: doctores
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo obtener lista de doctores',
            error: err.message
        });
    }
});
exports.getDoctores = getDoctores;
const getDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctor_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            res.status(200).json({
                message: 'Operation successful',
                data: doctor
            });
        }
        else {
            res.status(404).json({
                message: 'Patient not found',
                data: doctor
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo obtener el doctor',
            error: err.message
        });
    }
});
exports.getDoctor = getDoctor;
const createDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctor_1.Doctor.create(req.body);
        res.status(201).json({
            message: 'Operation successful',
            data: doctor
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo crear doctor',
            error: err.message
        });
    }
});
exports.createDoctor = createDoctor;
const updateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctor_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            yield doctor_1.Doctor.update(req.body, {
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        }
        else {
            res.status(400).json({
                message: 'El doctor no existe'
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo actualizar el doctor ',
            error: err.message
        });
    }
});
exports.updateDoctor = updateDoctor;
const deleteDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctor_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            yield doctor_1.Doctor.destroy({
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        }
        else {
            res.status(400).json({
                message: 'El doctor no existe'
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo eliminar el doctor ',
            error: err.message
        });
    }
});
exports.deleteDoctor = deleteDoctor;
