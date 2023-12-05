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
exports.deletePaciente = exports.updatePaciente = exports.createPaciente = exports.getPaciente = exports.getPacientes = void 0;
const paciente_1 = require("../models/paciente");
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield paciente_1.Paciente.findAll();
        res.status(200).json({
            message: 'Operation successful',
            data: pacientes
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo obtener lista de pacientes',
            error: err.message
        });
    }
});
exports.getPacientes = getPacientes;
const getPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(200).json({
                message: 'Operation successful',
                data: paciente
            });
        }
        else {
            res.status(404).json({
                message: 'Patient not found',
                data: paciente
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo obtener el paciente',
            error: err.message
        });
    }
});
exports.getPaciente = getPaciente;
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_1.Paciente.create(req.body);
        res.status(201).json({
            message: 'Operation successful',
            data: paciente
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo crear paciente',
            error: err.message
        });
    }
});
exports.createPaciente = createPaciente;
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            yield paciente_1.Paciente.update(req.body, {
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        }
        else {
            res.status(400).json({
                message: 'El paciente no existe'
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo actualizar el paciente ',
            error: err.message
        });
    }
});
exports.updatePaciente = updatePaciente;
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            yield paciente_1.Paciente.destroy({
                where: { num_cedula: req.params.id }
            });
            res.status(200).json({
                message: 'Operation successful'
            });
        }
        else {
            res.status(400).json({
                message: 'El paciente no existe'
            });
        }
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error: No se pudo eliminar el paciente ',
            error: err.message
        });
    }
});
exports.deletePaciente = deletePaciente;
