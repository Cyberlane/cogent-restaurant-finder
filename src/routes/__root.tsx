import { Flex } from '@mantine/core';
import { IconSalad } from '@tabler/icons-react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import type React from 'react';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';

import LanguagePicker from '../components/LanguagePicker';

const RouteComponent = (): React.ReactElement => {
  return (
    <>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
        <Link to="/" className="text-blue-600 hover:underline">
          <Flex justify="center" align="center" gap="md">
            <IconSalad size={36} /> Cogent Labs - Restaurant Finder
          </Flex>
        </Link>
        <LanguagePicker />
      </div>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
});
