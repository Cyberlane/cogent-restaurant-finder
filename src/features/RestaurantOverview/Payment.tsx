import { Group, Paper } from '@mantine/core';
import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import type { Payment as PaymentType } from '../../types/foursquare.type';

type PaymentProps = {
  payment: PaymentType | undefined;
};

const Payment = ({ payment }: PaymentProps) => {
  const { t } = useTranslation();

  return (
    <Paper shadow="md" p="md" mb="md">
      <Group>
        {t('overview.acceptCreditCards')}{' '}
        {payment?.credit_cards.accepts_credit_cards ? (
          <IconCheck color="green" />
        ) : (
          <IconCancel color="red" />
        )}
      </Group>
    </Paper>
  );
};

export default Payment;
