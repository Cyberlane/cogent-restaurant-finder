import { Divider, Group } from '@mantine/core';
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
          <Group>
            <IconSalad />
            Cogent Labs - Restaurant Finder
          </Group>
        </Link>
        <LanguagePicker />
      </div>
      <Divider className="my-4" />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
});
