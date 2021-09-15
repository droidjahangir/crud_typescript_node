import { RequestHandler } from 'express';
import { Mock } from '../models/mockModel';

import mockData from '../mock_data.json';

let mock: Mock[] = [];

mock = mockData;

// Create
export const createMock: RequestHandler = (req, res, next) => {
  const id = (req.body as { id: string }).id;
  const first_name = (req.body as { first_name: string }).first_name;
  const last_name = (req.body as { last_name: string }).last_name;
  const email = (req.body as { email: string }).email;
  const gender = (req.body as { gender: string }).gender;

  const newMock = new Mock(id, first_name, last_name, email, gender);
  mock.push(newMock);

  res.status(201).json({ message: 'Created the Mock.', createMock: newMock });
};

// get
export const getMockData: RequestHandler = (req, res, next) => {
  res.json({ data: mockData });
};

// update
export const updateMock: RequestHandler<{ id: string }> = (req, res, next) => {
  const mockId = req.params.id;

  const update_first_name = (req.body as { first_name: string }).first_name;
  const update_last_name = (req.body as { last_name: string }).last_name;
  const update_email = (req.body as { email: string }).email;
  const update_gender = (req.body as { gender: string }).gender;

  const mockIndex = mock.findIndex((moc) => moc.id === mockId);

  if (mockIndex < 0) {
    throw new Error('Could not find Mock data!');
  }

  mock[mockIndex] = new Mock(
    mock[mockIndex].id,
    update_first_name,
    update_last_name,
    update_email,
    update_gender
  );

  res.json({ message: 'Updated! ', updateMock: mock[mockIndex] });
};

// delete
export const deleteMock: RequestHandler = (req, res, next) => {
  const mockId = req.params.id;

  const mockIndex = mock.findIndex((moc) => moc.id === mockId);

  if (mockIndex < 0) {
    throw new Error('Could not find mock!');
  }

  mock.splice(mockIndex, 1);

  res.json({ message: 'Mock deleted!' });
};
