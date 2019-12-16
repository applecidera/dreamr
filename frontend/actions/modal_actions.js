export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL2 = "OPEN_MODAL2";
export const CLOSE_MODAL2 = "CLOSE_MODAL2";


export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openModal2 = modal => {
  return {
    type: OPEN_MODAL2,
    modal
  };
};

export const closeModal2 = () => {
  return {
    type: CLOSE_MODAL2
  };
};
