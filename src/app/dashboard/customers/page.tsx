import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: 'Lorem Ipsum',
    avatar: '/assets/avatar-10.png',
    email: 'lorem.ipsum@remlap',
    phone: '123-456-7890',
    address: { city: 'Lorem City', country: 'Lorem Country', state: 'Lorem State', street: '123 Lorem Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-009',
    name: 'Dolor Sit',
    avatar: '/assets/avatar-9.png',
    email: 'dolor.sit@remlap',
    phone: '234-567-8901',
    address: { city: 'Dolor City', country: 'Dolor Country', state: 'Dolor State', street: '234 Dolor Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-008',
    name: 'Amet Consectetur',
    avatar: '/assets/avatar-8.png',
    email: 'amet.consectetur@remlap',
    phone: '345-678-9012',
    address: { city: 'Amet City', country: 'Amet Country', state: 'Amet State', street: '345 Amet Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-007',
    name: 'Adipiscing Elit',
    avatar: '/assets/avatar-7.png',
    email: 'adipiscing.elit@remlap',
    phone: '456-789-0123',
    address: { city: 'Adipiscing City', country: 'Adipiscing Country', state: 'Adipiscing State', street: '456 Adipiscing Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-006',
    name: 'Sed Do',
    avatar: '/assets/avatar-6.png',
    email: 'sed.do@remlap',
    phone: '567-890-1234',
    address: { city: 'Sed City', country: 'Sed Country', state: 'Sed State', street: '567 Sed Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-005',
    name: 'Eiusmod Tempor',
    avatar: '/assets/avatar-5.png',
    email: 'eiusmod.tempor@remlap',
    phone: '678-901-2345',
    address: { city: 'Eiusmod City', country: 'Eiusmod Country', state: 'Eiusmod State', street: '678 Eiusmod Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-004',
    name: 'Incididunt Ut',
    avatar: '/assets/avatar-4.png',
    email: 'incididunt.ut@remlap',
    phone: '789-012-3456',
    address: { city: 'Incididunt City', country: 'Incididunt Country', state: 'Incididunt State', street: '789 Incididunt Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-003',
    name: 'Labore Et',
    avatar: '/assets/avatar-3.png',
    email: 'labore.et@remlap',
    phone: '890-123-4567',
    address: { city: 'Labore City', country: 'Labore Country', state: 'Labore State', street: '890 Labore Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-002',
    name: 'Dolore Magna',
    avatar: '/assets/avatar-2.png',
    email: 'dolore.magna@remlap',
    phone: '901-234-5678',
    address: { city: 'Dolore City', country: 'Dolore Country', state: 'Dolore State', street: '901 Dolore Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-001',
    name: 'Aliqua Ut',
    avatar: '/assets/avatar-1.png',
    email: 'aliqua.ut@remlap',
    phone: '012-345-6789',
    address: { city: 'Aliqua City', country: 'Aliqua Country', state: 'Aliqua State', street: '012 Aliqua Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Customers</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
