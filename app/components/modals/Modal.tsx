'use client';

import { useCallback, useEffect, useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionalLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onSubmit,
  secondaryAction,
  secondaryLabel,
  isOpen,
  title,
  body,
  footer,
  actionalLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }
  return <div></div>;
};

export default Modal;
