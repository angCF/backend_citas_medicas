import { Router } from "express";
import { getPacientes, deletePaciente, updatePaciente, createPaciente, getPaciente } from "../controllers/paciente_controller";

const router = Router();

router.get('/', getPacientes);
router.get('/:id', getPaciente);
router.post('/', createPaciente);
router.put('/:id', updatePaciente);
router.delete('/:id', deletePaciente);

export default router;