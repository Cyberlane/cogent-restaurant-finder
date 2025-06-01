import { Group, Image, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import en from '../../assets/images/en.svg';
import ja from '../../assets/images/ja.svg';
import classes from './LanguagePicker.module.css';

const images = {
  en,
  ja,
};

const LanguagePicker = () => {
  const [opened, setOpened] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n]);

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened ?? undefined}
        >
          <Group gap="xs">
            <Image src={images[i18n.language as 'en' | 'ja']} w={22} h={22} />
            <span className={classes.label}>
              {t(`language.${i18n.language}`)}
            </span>
          </Group>
          <IconChevronDown className={classes.icon} size={16} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<Image src={en} w={18} h={18} />}
          onClick={() => i18n.changeLanguage('en')}
        >
          {t('language.en')}
        </Menu.Item>
        <Menu.Item
          leftSection={<Image src={ja} w={18} h={18} />}
          onClick={() => i18n.changeLanguage('ja')}
        >
          {t('language.ja')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguagePicker;
