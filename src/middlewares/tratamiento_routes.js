import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';


router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)

