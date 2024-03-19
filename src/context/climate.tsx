import React, { createContext, useState, useContext, ReactNode } from 'react';

type BackgroundImageType = string | null;

interface BackgroundImageContextType {
    backgroundImage: BackgroundImageType
    setBackgroundImage: (url: BackgroundImageType) => void;

}

const BackgroundImageContext = createContext<BackgroundImageContextType | undefined>(undefined);

export const BackgroundImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState<BackgroundImageType>(null);
  
    return (
      <BackgroundImageContext.Provider value={{ backgroundImage, setBackgroundImage }}>
        {children}
      </BackgroundImageContext.Provider>
    );
  };

export const useBackgroundImage = (): BackgroundImageContextType => {
    const context = useContext(BackgroundImageContext);
    if (!context) {
      throw new Error('useBackgroundImage deve ser usado dentro de um BackgroundImageProvider');
    }
    return context;
  };