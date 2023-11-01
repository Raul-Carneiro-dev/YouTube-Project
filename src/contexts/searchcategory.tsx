import { createContext, useState } from 'react';


export const CategoryContexts = createContext({} as any)

interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string;
        }
      }
      channelTitle: string;
      publishedAt: string;
    },
    statistics: {
      viewCount: string;
    }
  }

export const CategoryStore = ({children}: any) => {
    const [categoryId, setCategoryId] = useState('0')
    const [videos, setVideos] = useState<Videos[]>([]);

    return (
        <CategoryContexts.Provider value={{ categoryId, setCategoryId, videos, setVideos}}>
            {children}
        </CategoryContexts.Provider>
    )

}