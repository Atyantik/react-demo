let blocked = false;

let scrollYArr: number[] = [];

export const stopBodyScroll = () => {
  if (typeof window !== 'undefined' && scrollYArr.length === 0) {
    scrollYArr.push(window.scrollY);
  }
  // const top = scrollYArr[0] || 0;

  if (typeof window !== 'undefined' && !blocked) {
    window?.document?.body?.classList?.add('modal-open');
    // document.body.style.marginTop = `-${top}px`;
    blocked = true;
  }
};

export const resumeBodyScroll = () => {
  if (typeof window !== 'undefined' && blocked) {
    const scrollY = scrollYArr[0] || 0;
    scrollYArr = [];
    window?.document?.body?.classList?.remove('modal-open');
    // document.body.style.marginTop = '0px';
    window.scrollTo(0, scrollY);
    blocked = false;
  }
};
