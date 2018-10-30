import { 
    SET_STICKERS
} from './types';

function fetchStickers() {
    const stickers =  [
        {
          _id: 0,
          category: 'JavaScript',
          remaining: 4,
          imageUrl: 'https://via.placeholder.com/80x80'
        },
        {
          _id: 1,
          category: 'Python',
          remaining: 2,
          imageUrl: 'https://via.placeholder.com/80x80'
        },
        {
          _id: 2,
          category: 'Ruby',
          remaining: 6,
          imageUrl: 'https://via.placeholder.com/80x80'
        }
      ]

      const response = {
          data: { stickers }
      }

      return ({
          type: SET_STICKERS,
          payload: response.data.stickers
      })
}

export { fetchStickers }