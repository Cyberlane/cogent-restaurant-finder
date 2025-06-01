import { Group, Image, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import en from '../../assets/images/en.svg';
import ja from '../../assets/images/ja.svg';
import classes from './LanguagePicker.module.css';

const languages = [
  { lang: 'en', image: en, key: 'language.en' },
  { lang: 'ja', image: ja, key: 'language.ja' },
];

const LanguagePicker = () => {
  const [opened, setOpened] = useState(false);
  const [current, setCurrent] = useState(languages[0]!);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n]);

  useEffect(() => {
    const lang = languages.find((l) => l.lang === i18n.language);
    if (lang != null) {
      setCurrent(lang);
    }
  }, [i18n.language]);

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
            <Image src={current.image} w={22} h={22} />
            <span className={classes.label}>{t(current.key)}</span>
          </Group>
          <IconChevronDown className={classes.icon} size={16} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {languages.map((lang) => (
          <Menu.Item
            key={lang.key}
            leftSection={<Image src={lang.image} w={18} h={18} />}
            onClick={() => i18n.changeLanguage(lang.lang)}
          >
            {t(lang.key)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguagePicker;
