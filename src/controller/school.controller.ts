import express from 'express';
<<<<<<< HEAD

const router = express.Router();

const data = [
=======
import { School } from '../types/school';

const router = express.Router();

const data: School[] = [
>>>>>>> dbc5ff808882c3fb7f20e79c17841ff1fb85de5a
  {
    id: 1,
    name: '동북고',
  },
<<<<<<< HEAD
=======
  {
    id: 2,
    name: '둔촌고',
  },
>>>>>>> dbc5ff808882c3fb7f20e79c17841ff1fb85de5a
];

router.get('/', (req, res) => res.status(200).json(data));

router.get('/:schoolId', (req, res) => {
  const { schoolId } = req.params;
  if (!schoolId) {
<<<<<<< HEAD
    return res.status(400).json();
  }

  const schoolIdNumber = parseInt(schoolId, 10);
  if (!data.some(({ id }) => id === schoolIdNumber)) {
    return res.status(404).json();
  }

  const filtered = data.filter((item) => item.id === schoolIdNumber);
  return res.status(200).json(filtered[0]);
});

=======
    if (!schoolId) {
      return res.status(400).json();
    }
  }

  const schoolIdNumber: number = parseInt(schoolId, 10);
  if (!data.some(({ id }) => id === schoolIdNumber)) {
    return res.status(404).json();
  }
  const filtered = data.filter((item: School) => item.id === schoolIdNumber);
  return res.status(200).json(filtered[0]);
});

router.post('/', (req, res) => {
  const school: School = req.body as School;
  if (!school) {
    return res.status(400).json();
  }
  data.push(school);
  return res.status(201).json();
});

>>>>>>> dbc5ff808882c3fb7f20e79c17841ff1fb85de5a
export default router;
