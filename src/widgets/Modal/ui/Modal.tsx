import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode, useRef, useState, useEffect, useCallback } from 'react';
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import s from './Modal.module.scss'

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const ANIMATION_DELAY = 300;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {theme} = useTheme()

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    },[closeHandler])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearInterval(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    }

    if(lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(s.Modal, mods, [className])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};