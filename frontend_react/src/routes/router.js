import { createRouter, createRoute } from '@tanstack/react-router';
import Form from '../components/Form';  
import Table from '../components/Table'; 

// Tworzymy nowe trasy
const routes = [
  createRoute({
    path: "/",
    element: <Form />,  
  }),
  createRoute({
    path: "/table",
    element: <Table />, 
  }),
];

// Tworzymy router
export const router = createRouter({ routes });