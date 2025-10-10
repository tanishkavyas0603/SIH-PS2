import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { useState, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'mni', name: 'Manipuri', nativeName: 'ꯃꯩꯇꯩꯂꯣꯟ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" data-testid="button-language-toggle">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            data-testid={`button-language-${language.code}`}
            className={i18n.language === language.code ? 'bg-accent' : ''}
          >
            {language.nativeName} ({language.name})
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface LanguageSelectionDialogProps {
  open: boolean;
  onLanguageSelect: (langCode: string) => void;
}

export function LanguageSelectionDialog({ open, onLanguageSelect }: LanguageSelectionDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-language-selection">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t('language.selectLanguage')}</DialogTitle>
          <DialogDescription>
            {t('language.selectPreferred')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-3 py-4">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="outline"
              className="justify-start text-left h-auto py-3"
              onClick={() => onLanguageSelect(language.code)}
              data-testid={`button-select-${language.code}`}
            >
              <div>
                <div className="font-semibold">{language.nativeName}</div>
                <div className="text-sm text-muted-foreground">{language.name}</div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
