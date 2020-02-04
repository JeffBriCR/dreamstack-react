/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTranslation } from 'react-i18next'
import { Text, Button } from '@theme-ui/components'

export default function DemoComponent() {
  const { t } = useTranslation(['demo'])
  const { i18n } = useTranslation()

  const handlerChangeLang = (e: Event) => {
    e.preventDefault()
    i18n.changeLanguage('es')
  }

  return (
    <div>
      <h3>{t('demo:hello')}</h3>
      <Text
        sx={{
          fontSize: 2,
          color: 'secondary',
        }}
      >
        {t('description')}
      </Text>
      <Button onClick={handlerChangeLang} bg="purple">
        Español
      </Button>
    </div>
  )
}
