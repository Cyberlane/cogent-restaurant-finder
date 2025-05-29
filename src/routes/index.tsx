import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";

function Index() {
  const { t } = useTranslation();
  return (
    <div className="p-2">
      <h3>{t('home.title')}</h3>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
});