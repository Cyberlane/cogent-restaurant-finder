import { useTranslation } from 'react-i18next';

export const useFormatDistance = () => {
  const { t } = useTranslation();

  const formatDistance = (distance: number) => {
    if (distance < 1000) {
      return `${distance} ${distance === 1 ? t('distance.meter') : t('distance.meters')}${t('distance.away')}`;
    }
    const kms = (distance / 1000).toFixed(1);
    return `${kms} ${kms === '1.0' ? t('distance.kilometer') : t('distance.kilometers')}${t('distance.away')}`;
  };

  return formatDistance;
};
