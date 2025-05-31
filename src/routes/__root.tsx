import { Button, Divider } from '@mantine/core';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import dayjs from 'dayjs';
import type React from 'react';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';

const RouteComponent = (): React.ReactElement => {
  const { i18n } = useTranslation();

  const onTranslateButtonClick = useCallback(async () => {
    if (i18n.resolvedLanguage === 'en') {
      await i18n.changeLanguage('ja');
    } else {
      await i18n.changeLanguage('en');
    }
  }, [i18n]);

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n]);

  return (
    <>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Button
          variant="outline"
          color="blue"
          onClick={onTranslateButtonClick}
          className="transition duration-300 ease-in-out transform hover:scale-105"
        >
          Translate
        </Button>
      </div>
      <Divider className="my-4" />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
});
