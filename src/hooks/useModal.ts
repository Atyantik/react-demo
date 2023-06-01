import { activeModalsAtom, registeredModalsAtom } from '@atoms/modal.atom';
import { useRecoilState, useRecoilValue } from 'recoil-ssr';

function useModals() {
  const [activeModals, setActiveModals] = useRecoilState(activeModalsAtom);
  const registeredModals = useRecoilValue(registeredModalsAtom);
  const openModal = (id: string, props: Record<string, any> = {}) => {
    if (!registeredModals.has(id)) {
      // eslint-disable-next-line no-console
      console.error('Modal should be registerd before opening.');
      return;
    }
    const newActiveModals = new Map(activeModals);
    newActiveModals.set(id, { state: 'open', props });
    setActiveModals(newActiveModals);
  };

  const closeModal = (id: string) => {
    const newActiveModals = new Map(activeModals);
    const activeModal = newActiveModals.get(id);
    if (activeModal) {
      newActiveModals.set(id, { state: 'close', props: activeModal.props });
      setActiveModals(newActiveModals);
    }

    setTimeout(() => {
      const newActiveModals2 = new Map(activeModals);
      newActiveModals2.delete(id);
      setActiveModals(newActiveModals2);
    }, 200);
  };
  return [openModal, closeModal];
}

export { useModals };
