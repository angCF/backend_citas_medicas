import { Router } from "express";
import { getDoctor, getDoctores, createDoctor, updateDoctor, deleteDoctor} from "../controllers/doctor_controller";

const router = Router();

router.get('/', getDoctores);
router.get('/:id', getDoctor);
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;