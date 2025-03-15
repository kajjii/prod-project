import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { Modal } from 'widgets/Modal';
import s from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, []);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio odit suscipit earum modi nihil unde vitae fugiat enim beatae inventore.
            </Modal>
        </div>
    );
};
