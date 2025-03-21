import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { Modal } from 'widgets/Modal';
import s from './Navbar.module.scss'
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, []);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
                 />
        </div>
    );
};
