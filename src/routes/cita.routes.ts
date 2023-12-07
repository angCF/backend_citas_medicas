import { Router } from "express";
import { getCitas, getOneCita, createCita, updateCita, deleteCita } from "../controllers/cita_controller";

const router = Router();

router.get('/', getCitas);
//http://127.0.0.1:3000/eps/citas/mi-cita?profesional=10246546&paciente=765663&fecha=2023-11-04T20:40:00.000Z
router.get('/mi-cita', getOneCita);
router.post('/', createCita);
router.put('/', updateCita);
router.delete('/', deleteCita);

export default router;