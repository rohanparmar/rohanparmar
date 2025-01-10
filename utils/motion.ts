export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.7,
      },
    },
  };
}

export function fadeInUp(delay: number) {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.7,
      },
    },
  };
}