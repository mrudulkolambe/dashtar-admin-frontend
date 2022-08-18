import React, { useState, createContext } from 'react';

// create context
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // const value = useMemo(
  //   () => ({
  //     isSidebarOpen,
  //     toggleSidebar,
  //     closeSidebar,
  //     isDrawerOpen,
  //     toggleDrawer,
  //     closeDrawer,
  //     setIsDrawerOpen,
  //     isModalOpen,
  //     toggleModal,
  //     closeModal,
  //     isUpdate,
  //     setIsUpdate,
  //   }),

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [isSidebarOpen, isDrawerOpen, isModalOpen, isUpdate]
  // );

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        isDrawerOpen,
        toggleDrawer,
        closeDrawer,
        setIsDrawerOpen,
        isModalOpen,
        toggleModal,
        closeModal,
        isUpdate,
        setIsUpdate,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
