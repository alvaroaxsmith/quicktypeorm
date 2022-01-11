import { Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

export default classRouter;
